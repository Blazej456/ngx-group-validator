# NgxGroupValidator

Angular 8+ conditional validation rules for `FormGroup`

Demo available [here](https://blazej456.github.io/ngx-group-validator/) 

#### Example
````typescript
this.form = this.fb.group({
      checkbox: [false],
      comment: ['']
    }, {
      validators: NgxGroupValidators.sync({
        comment: [
          {
            condition: {
              paths: ['checkbox'],
              check: (a) => a.value === true
            },
            validators: Validators.required
          }
        ]
      })
    });
````
##### How it works
Validate `comment` control than, and only then, when described in `condition` part `check`
function will return `true`. And `comment` control will be validated with `validators` part
of configuration.  

Realize that the every control in configuration can have many conditions.
And each condition has own `check` function, and each condition validate control with it's
own validation rules.

#### Instalation
````shell script
npm install ngx-group-validator
````
````shell script
yarn add ngx-group-validator
````

