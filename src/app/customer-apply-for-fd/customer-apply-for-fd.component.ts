import { Component, OnInit } from '@angular/core';
import { Account } from '../model/account.model';
import { FixedDeposit } from '../model/fixed-deposit.model';
import { InterestPlans } from '../model/interest-plans.model';
import { CustomerService } from '../service/customer/customer.service';
import swal from 'sweetalert';


@Component({
  selector: 'app-customer-apply-for-fd',
  templateUrl: './customer-apply-for-fd.component.html',
  styleUrls: ['./customer-apply-for-fd.component.css']
})
export class CustomerApplyForFdComponent implements OnInit {

  constructor(private customerService: CustomerService) { }
  accounts: Account[] = [];
  fd: FixedDeposit = new FixedDeposit();

  interestPlan: InterestPlans = new InterestPlans();
  ngOnInit(): void {
    this.customerService.getInterestRateList().subscribe(
      response => {


        this.interestPlan = response.data[0];
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
    this.customerService.customerApplyForFd(this.fd).subscribe(
      response => {
        console.log(response);
        swal("Congratulations!", "FD Apply successful. Await Grant from Admin.", "success");
      },
      error => {
        console.log(error);
        swal("Failed!!!", "FD Apply Failed. Contact Nearest Branch.", "error");

      }
    );
  }

}