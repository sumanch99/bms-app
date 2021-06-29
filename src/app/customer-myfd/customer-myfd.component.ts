import { Component, OnInit } from '@angular/core';
import { Account } from '../model/account.model';
import { CustomerService } from '../service/customer/customer.service';
import swal from 'sweetalert';
import { FixedDeposit } from '../model/fixed-deposit.model';

@Component({
  selector: 'app-customer-myfd',
  templateUrl: './customer-myfd.component.html',
  styleUrls: ['./customer-myfd.component.css']
})
export class CustomerMyfdComponent implements OnInit {
  accounts: Account[] = [];
  account: Account = new Account();
  fixedDeposits: FixedDeposit[] = [];
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

  onSubmit(accountNumber: number) {
    this.customerService.customerMyFd(accountNumber).subscribe(
      response => {
        console.log(response);

        this.fixedDeposits = response.data;
        console.log(this.fixedDeposits);
        if (this.fixedDeposits.length > 0) {
          this.showData = true;
        }
        else {
          swal("Failed!!!", "You Dont Have FD on this Account", "error");
        }
      },
      error => {
        console.log(error);
        swal("Failed!!!", "You Dont Have FD on this Account", "error");
      }
    );
  }

}