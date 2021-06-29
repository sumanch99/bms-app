import { Component, OnInit } from '@angular/core';
import { Account } from '../model/account.model';
import { RecurringDeposit } from '../model/recurring-deposit.model';
import { CustomerService } from '../service/customer/customer.service';
import swal from 'sweetalert';


@Component({
  selector: 'app-customer-my-rd',
  templateUrl: './customer-my-rd.component.html',
  styleUrls: ['./customer-my-rd.component.css']
})
export class CustomerMyRdComponent implements OnInit {
  accounts: Account[] = [];
  account:Account=new Account();
  recurringDeposits:RecurringDeposit[]=[];
  showData: boolean = false;
  
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.customerGetAllAccounts(sessionStorage.getItem("customerUserId")).subscribe(
      response => {
        console.log(response);
        const res = JSON.stringify(response);
        const jsonRes = JSON.parse(res);
        this.accounts = jsonRes.data;
      }
    );
  }

  onSubmit(accountNumber:number) {
    console.log("component account no -"+accountNumber);
    this.customerService.customerMyRd(accountNumber).subscribe(
      response => {
        console.log(response);
        
        this.recurringDeposits = response.data;
        console.log(this.recurringDeposits);
        if (this.recurringDeposits.length > 0) {
          this.showData = true;
        }
        else {
          swal("Failed!!!", "You Dont Have RD on this Account", "error");
        }
      },
      error => {
        console.log(error);
        swal("Failed!!!", "You Dont Have RD on this Account", "error");
      }
    );
  }

}