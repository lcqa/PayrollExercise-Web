import { PayrollDetails } from "./payroll.model";

export interface Employee
{
    firstName: string;
    lastName: string;
    payrollDetails: PayrollDetails
}