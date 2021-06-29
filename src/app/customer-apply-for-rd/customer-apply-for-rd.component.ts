import { Component, OnInit } from '@angular/core';
import { Account } from '../model/account.model';
import { InterestPlans } from '../model/interest-plans.model';
import { CustomerService } from '../service/customer/customer.service';
import swal from 'sweetalert';
import { RecurringDeposit } from '../model/recurring-deposit.model';


@Component({
  selector: 'app-customer-apply-for-rd',
  templateUrl: './customer-apply-for-rd.component.html',
  styleUrls: ['./customer-apply-for-rd.component.css']
})
export class CustomerApplyForRdComponent implements OnInit {

  constructor(private customerService: CustomerService) { }
  accounts: Account[] = [];
  rd: RecurringDeposit = new RecurringDeposit();

  interestPlan: InterestPlans = new InterestPlans();
  ngOnInit(): void {
    this.customerService.getInterestRateList().subscribe(
      response => {


        this.interestPlan = response.data[1];
        console.log(this.interestPlan);
      }
    );

    this.customerService.customerGetAllAccounts(sessionStorage.getItem("customerUserId")).subscribe(
      response => {
        console.log(response);
        const res = JSON.stringify(response);
        const jsonRes = JSON.parse(res);
        this.accounts = jsonRes.data;
      }
    );
  }


  onSubmit() {
    this.customerService.customerApplyForRd(this.rd).subscribe(
      response => {
        console.log(response);
        swal("Congratulations!", "RD Apply successful. Check MyRd for more details", "success");
      },
      error => {
        console.log(error);
        swal("Failed!!!", "FD Apply Failed. Contact Nearest Branch.", "error");

      }
    );
  }

}