import { AbstractControl, AsyncValidatorFn, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AsyncValidationRules, SingleControlCondition, ValidationRules } from './ngx-group-validators.model';
import { forkJoin, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

export class NgxGroupValidators {
  static sync(config: ValidationRules): ValidatorFn {
    return (formGroup: FormGroup): ValidationErrors | null => {
      const errors = Object
        .entries(config)
        .map(([path, conditions]) => {
          if (!controlIsValidable(formGroup.get(path))) {
            return null;
          }

          const allErrors = Object.values(conditions).map((data: SingleControlCondition<ValidatorFn>) => {
            if (data.condition.paths.length === 0) {
              return null;
            }

            if (!pathsIsCorrect(data.condition.paths, formGroup)) {
              return null;
            }

            let err = null;
            if (data.condition.check(...data.condition.paths.map(c => formGroup.get(c)))) {
              if (!data.validators) {
                return null;
              }
              const validators = Array.isArray(data.validators) ? data.validators : [data.validators];
              err = Validators.compose(validators)(formGroup.get(path));
            }
            return err ? {[path]: err} : null;
          });
          return _mergeErrors(allErrors);
        })
        .filter(a => a != null);

      return _mergeErrors(errors);
    };
  }

  static async(config: AsyncValidationRules): AsyncValidatorFn {
    return (formGroup: FormGroup): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      const errors = Object
        .entries(config)
        .map(([path, conditions]) => {
          if (!controlIsValidable(formGroup.get(path))) {
            return of(null);
          }

          const allErrors = Object.values(conditions).map((data: SingleControlCondition<AsyncValidatorFn>) => {
            if (data.condition.paths.length === 0) {
              return of(null);
            }

            if (!pathsIsCorrect(data.condition.paths, formGroup)) {
              return of(null);
            }

            let err = null;
            if (data.condition.check(...data.condition.paths.map(c => formGroup.get(c)))) {
              if (!data.validators) {
                return of(null);
              }

              const validators = Array.isArray(data.validators) ? data.validators : [data.validators];
              err = Validators.composeAsync(validators)(formGroup.get(path));

            }
            return of({[path]: err});
          });
          return forkJoin(allErrors).pipe(map(_mergeErrors));
        });
      return forkJoin(errors).pipe(map(_mergeErrors));
    };
  }
}

function pathsIsCorrect(paths: string[], formGroup: FormGroup): boolean {
  return paths.every(path => formGroup.get(path) != null);
}

function controlIsValidable(control: AbstractControl): boolean {
  return control != null && !control.disabled;
}


/**
 * This function is raw copy from @Angular/forms
 */
function _mergeErrors(arrayOfErrors: ValidationErrors[]): ValidationErrors | null {
  const res: { [key: string]: any } =
    arrayOfErrors.reduce((res: ValidationErrors | null, errors: ValidationErrors | null) => {
      return errors != null ? {...res !, ...errors} : res !;
    }, {});
  return Object.keys(res).length === 0 ? null : res;
}
