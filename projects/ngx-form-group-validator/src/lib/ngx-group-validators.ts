import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

type ConditionFn = (..._: AbstractControl[]) => boolean;

interface GroupConfig {
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
    return (formGroup: FormGroup) => {
      return Object
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

            return _mergeErrors(_executeValidators(formGroup.get(path), presentValidators));
          }
          return null;
        })
        .filter(a => a != null);
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

// example of use:
const test: FormGroup = new FormGroup({
    field1: new FormControl(''),
    field2: new FormControl(''),
    field3: new FormControl('')
  },
  NgxGroupValidators.sync({
    field1: {
      condition: {
        paths: ['field2', 'field3'],
        check: (f2, f3) => f2.value === true && f3.value === true
      },
      validators: [Validators.required]
    }
  }));
