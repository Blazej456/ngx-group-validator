import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { switchMap } from 'rxjs/operators';
import { of, timer } from 'rxjs';
import { NgxGroupValidators } from 'ngx-form-group-validator';

@Component({
  selector: 'fgv-demo-async',
  templateUrl: './async.component.html',
  styles: []
})
export class AsyncComponent {
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
    }, {
      asyncValidators: NgxGroupValidators.async({
        comment: [
          {
            condition: {
              paths: ['checkbox1', 'checkbox2'],
              check: (a, b) => a.value === true && b.value === true
            },
            validators: control => {
              return timer(2000)
                .pipe(
                  switchMap(() => {
                    if (control.value) {
                      return of(null);
                    }
                    return of({asyncRequired: true});
                  })
                );
            }
          }
        ]
      })
    });
  }

  hasError(error: string) {
    return this.form.errors != null && this.form.errors.comment != null && error in this.form.errors.comment;
  }
}
