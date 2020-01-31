import { AbstractControl, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

export class NgxValidatorsHelpers {
  static errors(control: AbstractControl, name: string): ValidationErrors | null {
    let errors = {};
    if (control instanceof FormGroup) {
      if (control.errors && control.errors[name]) {
        errors = {...control.errors[name]};
      }
    } else if (control instanceof FormControl) {
      errors = {...control.errors};
    }

    if (control.parent instanceof FormGroup) {
      errors = {...errors, ...this.errors(control.parent, name)};
    }
    return Object.keys(errors).length > 0 ? errors : null;
  }
}
