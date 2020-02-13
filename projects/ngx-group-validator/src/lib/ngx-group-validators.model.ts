import { AbstractControl, AsyncValidatorFn, ValidatorFn } from '@angular/forms';

export type ConditionFn = (...controls: AbstractControl[]) => boolean;

export interface ValidationRules {
  [path: string]: SingleControlCondition<ValidatorFn>[];
}

export interface AsyncValidationRules {
  [path: string]: SingleControlCondition<AsyncValidatorFn>[];
}

export interface SingleControlCondition<Type> {
  condition: {
    paths: string[];
    check: ConditionFn
  };
  validators: Type | Type[];
}
