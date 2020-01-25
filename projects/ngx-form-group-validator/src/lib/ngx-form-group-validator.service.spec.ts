import { TestBed } from '@angular/core/testing';

import { NgxFormGroupValidatorService } from './ngx-form-group-validator.service';

describe('NgxFormGroupValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxFormGroupValidatorService = TestBed.get(NgxFormGroupValidatorService);
    expect(service).toBeTruthy();
  });
});
