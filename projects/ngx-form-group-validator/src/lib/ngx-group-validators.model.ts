import { AbstractControl, ValidatorFn } from '@angular/forms';

export type ConditionFn = (...controls: AbstractControl[]) => boolean;

export interface ValidationRules {
  [path: string]: SingleControlCondition[];
}

export interface SingleControlCondition {
  condition: {
    paths: string[];
    check: ConditionFn
  };
  validators: ValidatorFn | ValidatorFn[];
}
