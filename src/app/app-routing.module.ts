import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetPayrollComponent } from './get-payroll/get-payroll.component';

const routes: Routes = [
  {component: GetPayrollComponent, 'path': ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
