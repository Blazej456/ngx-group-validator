import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { AsyncValidationRules, SingleControlCondition, ValidationRules } from './ngx-group-validators.model';
import { Observable, of } from 'rxjs';

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

            const doValidate = data.condition.check(...data.condition.paths.map(c => formGroup.get(c)));
            let err = null;
            if (doValidate) {
              if (!data.validators) {
                return null;
              }

              const validators = Array.isArray(data.validators) ? data.validators : [data.validators];
              const presentValidators: ValidatorFn[] = validators.filter(isPresent) as any;
              if (presentValidators.length === 0) {
                return null;
              }

              err = _mergeErrors(_executeValidators(formGroup.get(path), presentValidators));

            }
            return err ? {[path]: err} : null;
          });
          return _mergeErrors(allErrors);
        })
        .filter(a => a != null);

      return _mergeErrors(errors);
    };
  }

  static async(config: AsyncValidationRules): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return of(null);
  }
}

function pathsIsCorrect(paths: string[], formGroup: FormGroup): boolean {
  return paths.every(path => formGroup.get(path) != null);
}

function controlIsValidable(control: AbstractControl): boolean {
  return control != null && !control.disabled;
}


/**
 * All functions above are copy from Angular
 */
function isPresent(o: any): boolean {
  return o != null;
}

function _executeValidators(control: AbstractControl, validators: ValidatorFn[]): any[] {
  return validators.map(v => v(control));
}

function _mergeErrors(arrayOfErrors: ValidationErrors[]): ValidationErrors | null {
  const res: { [key: string]: any } =
    arrayOfErrors.reduce((res: ValidationErrors | null, errors: ValidationErrors | null) => {
      return errors != null ? {...res !, ...errors} : res !;
    }, {});
  return Object.keys(res).length === 0 ? null : res;
}
