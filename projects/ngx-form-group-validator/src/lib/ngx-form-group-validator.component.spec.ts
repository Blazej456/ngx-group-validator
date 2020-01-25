import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFormGroupValidatorComponent } from './ngx-form-group-validator.component';

describe('NgxFormGroupValidatorComponent', () => {
  let component: NgxFormGroupValidatorComponent;
  let fixture: ComponentFixture<NgxFormGroupValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxFormGroupValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFormGroupValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
