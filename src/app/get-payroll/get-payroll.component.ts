import { Component } from '@angular/core';
import { PayrollHttpService } from '../shared/services/payroll.http.service';
import { Employee } from '../shared/models/employee.model';
import { GetEmployeePayrollRequest } from '../shared/models/payroll.http.model';

@Component({
  selector: 'app-get-payroll',
  templateUrl: './get-payroll.component.html',
  styleUrls: ['./get-payroll.component.scss']
})
export class GetPayrollComponent {

  employeeDetails = {} as Employee;
  request = {} as GetEmployeePayrollRequest;
  constructor(private payrollService: PayrollHttpService){

  }

  ngOnInit(): void
  {

  }

  submit(): void
  {
    this.payrollService.GetPayrollDetails(this.request).subscribe(response => {
       this.employeeDetails = response.data ?? {} as Employee;
       console.log(this.employeeDetails);
    },
    error => {
      console.log(error);
    });
  }

}
