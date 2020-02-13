import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { NgxGroupValidators } from 'ngx-form-group-validator';

@Component({
  selector: 'fgv-demo-sync',
  templateUrl: './sync.component.html'
})
export class SyncComponent {
  form: FormGroup;
  matcher: ErrorStateMatcher = {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      return !!(form.invalid && form.errors && form.errors.comment);
    }
  };
  gist: any;
  github = faGithub;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      checkbox1: [true],
      checkbox2: [false],
      comment: [''],
      long: [''],
      longEnable: [false]
    }, {
      validators: NgxGroupValidators.sync({
        comment: [
          {
            condition: {
              paths: ['checkbox1', 'checkbox2'],
              check: (a, b) => a.value === true && b.value === true
            },
            validators: Validators.required
          },
          {
            condition: {
              paths: ['comment', 'long', 'longEnable'],
              check: (a, b, c) => {
                if (b.value.length > 0 && c.value) {
                  return a.value.length > b.value.length;
                }
                return false;
              }
            },
            validators: c => ({commentToLong: true})
          }
        ]
      })
    });
  }

  hasError(error: string) {
    return this.form.errors && 'comment' in this.form.errors && error in this.form.errors.comment;
  }
}
