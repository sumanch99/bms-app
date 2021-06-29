import { Component, OnInit } from '@angular/core';
import { Loan } from '../model/loan.model';
import { CustomerService } from '../service/customer/customer.service';

@Component({
  selector: 'app-customer-my-loan',
  templateUrl: './customer-my-loan.component.html',
  styleUrls: ['./customer-my-loan.component.css']
})
export class CustomerMyLoanComponent implements OnInit {

  constructor(private customerService: CustomerService) { }
  loans: Loan[] = [];
  ngOnInit(): void {
    this.customerService.customerMyLoans(sessionStorage.getItem("customerUserId")).subscribe(
      response => {
        // const res = JSON.stringify(response);
        // const jsonRes = JSON.parse(res);
        this.loans = response.data;
        console.log(response);
      }
    );
  }

}