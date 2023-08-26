import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetPayrollComponent } from './get-payroll/get-payroll.component';
import { InformationComponent } from './information/information.component';

const routes: Routes = [
  {component: InformationComponent, 'path': ''},
  {component: GetPayrollComponent, 'path': 'payroll'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
