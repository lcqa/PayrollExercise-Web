import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http'
import { GetEmployeePayrollRequest } from '../models/payroll.http.model';
import { Response } from '../models/base.model';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';
import { environment } from 'src/app/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PayrollHttpService {

  baseUrl = `${environment.baseApiUrl}/payroll`;
  constructor(private http: HttpClient) { 

  }

  GetPayrollDetails(request: GetEmployeePayrollRequest): Observable<Response<Employee>>{
    const httpParams = new HttpParams({
      fromObject: {
        ...request
      }
    });
    return this.http.get<Response<Employee>>(`${this.baseUrl}/payroll-details`, {params: httpParams})
  }

}
