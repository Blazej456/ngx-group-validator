import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export type ConditionFn = (...controls: AbstractControl[]) => boolean;

export interface GroupConfig {
  [path: string]: {
    condition: {
      paths: string[];
      check: ConditionFn
    },
    validators: ValidatorFn | ValidatorFn[]
  };
}

export class NgxGroupValidators {
  static sync(config: GroupConfig): ValidatorFn {
    return (formGroup: FormGroup): ValidationErrors | null => {
      const errors = Object
        .entries(config)
        .map(([path, data]) => {
          if (!controlIsValidable(formGroup.get(path))) {
            return null;
          }

          if (data.condition.paths.length === 0) {
            return null;
          }

          if (!pathsIsCorrect(data.condition.paths, formGroup)) {
            return null;
          }

          const doValidate = data.condition.check(...data.condition.paths.map(c => formGroup.get(c)));
          if (doValidate) {
            if (!data.validators) {
              return null;
            }

            const validators = Array.isArray(data.validators) ? data.validators : [data.validators];
            const presentValidators: ValidatorFn[] = validators.filter(isPresent) as any;
            if (presentValidators.length === 0) {
              return null;
            }

            const err = _mergeErrors(_executeValidators(formGroup.get(path), presentValidators));
            return err ? {[path]: err} : null;
          }
          return null;
        })
        .filter(a => a != null);

      return _mergeErrors(errors);
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
