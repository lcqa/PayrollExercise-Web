import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPayrollComponent } from './get-payroll.component';

describe('GetPayrollComponent', () => {
  let component: GetPayrollComponent;
  let fixture: ComponentFixture<GetPayrollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetPayrollComponent]
    });
    fixture = TestBed.createComponent(GetPayrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
