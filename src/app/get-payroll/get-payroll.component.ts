import { Component } from '@angular/core';
import { PayrollHttpService } from '../shared/services/payroll.http.service';
import { Employee } from '../shared/models/employee.model';
import { GetEmployeePayrollRequest } from '../shared/models/payroll.http.model';
import { Selection } from '../shared/models/base.model';

@Component({
  selector: 'app-get-payroll',
  templateUrl: './get-payroll.component.html',
  styleUrls: ['./get-payroll.component.scss']
})
export class GetPayrollComponent {

  employeeDetails = {} as Employee;
  request = {} as GetEmployeePayrollRequest;
  isSubmitted = false;

  months: Selection<number>[] = [
    {name: 'January', value: 1},
    {name: 'February', value: 2},
    {name: 'March', value: 3},
    {name: 'April', value: 4},
    {name: 'May', value: 5},
    {name: 'June', value: 6},
    {name: 'July', value: 7},
    {name: 'August', value: 8},
    {name: 'September', value: 9},
    {name: 'October', value: 10},
    {name: 'November', value: 11},
    {name: 'December', value: 12}
  ]

  errorMessage = [] as string[];

  constructor(private payrollService: PayrollHttpService){

  }

  ngOnInit(): void
  {

  }

  submit(): void
  {
    this.errorMessage = [];
    this.payrollService.GetPayrollDetails(this.request).subscribe(response => {
       this.employeeDetails = response.data ?? {} as Employee;
       this.isSubmitted = true;
    },
    error => {
      console.log(error);
      var keys = Object.keys(error.error.errors);

      for(let i =0; i < keys.length; i++)
      {
        this.errorMessage.push(`${keys[i]}: ${error.error.errors[keys[i]]}`);
      }
    });
  }

  closeAlert(alertMessage: string): void {
    this.errorMessage.splice(this.errorMessage.indexOf(alertMessage), 1);
  }

}
