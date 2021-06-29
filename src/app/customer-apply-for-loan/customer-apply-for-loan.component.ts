import { Component, OnInit } from '@angular/core';
import { InterestPlans } from '../model/interest-plans.model';
import { Loan } from '../model/loan.model';
import { CustomerService } from '../service/customer/customer.service';
import swal from 'sweetalert';
import { DataServiceService } from '../service/data/data-service.service';
import { Account } from '../model/account.model';

@Component({
  selector: 'app-customer-apply-for-loan',
  templateUrl: './customer-apply-for-loan.component.html',
  styleUrls: ['./customer-apply-for-loan.component.css']
})
export class CustomerApplyForLoanComponent implements OnInit {

  constructor(private customerService: CustomerService) { }
  interestPlan: InterestPlans[] = [];
  loan: Loan = new Loan();
  accounts: Account[] = [];
  ngOnInit(): void {
    let i: number;
    this.customerService.getInterestRateList().subscribe(

      response => {
        for (i = 2; i <= 5; i++) {

          //this.interestPlan = response.data[i];
          this.interestPlan[i - 2] = response.data[i];
          console.log(this.interestPlan);
        }
      });

    this.customerService.customerGetAllAccounts(sessionStorage.getItem("customerUserId")).subscribe(
      response => {
        console.log(response);
        const res = JSON.stringify(response);
        const jsonRes = JSON.parse(res);
        this.accounts=jsonRes.data;
      }
    );
  }
  onSubmit() {
    this.customerService.customerApplyLoan(this.loan).subscribe(
      response => {
        console.log(response);
        swal("Congratulations!", "Loan Apply successful. Await Grant.", "success");

      },
      error=>{
        console.log(error);
        swal("Failed!!!", "Loan Apply Failed. Contact Nearest Branch.", "error");
      }
    );
  }
}