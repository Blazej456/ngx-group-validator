import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxGroupValidators } from 'ngx-form-group-validator';
import { MyErrorStateMatcher } from './my-error-state-matcher';

@Component({
  selector: 'fgv-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NgxGroupValidator';
  form: FormGroup;
  matcher = new MyErrorStateMatcher();

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
