import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

type ConditionFn = (control: AbstractControl) => boolean;
interface GroupConfig {
  [path: string]: {
    condition: {
      paths: string[];
      check: (..._: AbstractControl[]) => boolean
    },
    validators: ValidatorFn | ValidatorFn[]
  };
}

export class NgxGroupValidators {
  static sync(config: GroupConfig): ValidatorFn {
    return;
  }
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
