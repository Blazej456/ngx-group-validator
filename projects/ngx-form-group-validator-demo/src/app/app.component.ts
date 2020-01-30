import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { NgxGroupValidators } from 'ngx-form-group-validator';
import { ErrorStateMatcher } from '@angular/material';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'fgv-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-group-validator';
  form: FormGroup;
  matcher: ErrorStateMatcher = {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      return !!(form.invalid && form.errors.comment && form.errors.comment.required === true);
    }
  };
  gist: any;
  github = faGithub;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      checkbox1: [true],
      checkbox2: [false],
      comment: ['']
    }, {
      validators: NgxGroupValidators.sync({
        comment: {
          condition: {
            paths: ['checkbox1', 'checkbox2'],
            check: (a, b) => a.value === true && b.value === true
          },
          validators: Validators.required
        }
      })
    });
  }
}
