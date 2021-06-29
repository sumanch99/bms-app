import { DatePipe } from "@angular/common";

export class RecurringDeposit {
    recurringDepositId: number = 0;
    monthlyAmount: number = 0;
    tenure: number = 0;
    accountNumber: number = 0;
    interest: number = 0;
    startDate: Date = new Date();
    maturedAmount: number = 0;
}