import { CustomerService } from './../service/customer/customer.service';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';
import { Transaction } from '../model/transaction.model';
@Component({
  selector: 'app-customer-view-statement',
  templateUrl: './customer-view-statement.component.html',
  styleUrls: ['./customer-view-statement.component.css']
})
export class CustomerViewStatementComponent implements OnInit {

  accounts:any
  accountNum:number=0
  depositedAmount:number=0
  transactions:Transaction[]=[]
  constructor(private service:CustomerService) { }

  ngOnInit(): void {
   this.service.getAllAccounts().subscribe(
    data=>{
      const res =JSON.stringify(data);
      const jsonRes = JSON.parse(res);
      this.accounts =  jsonRes.data;
    }
   )
   
  }
  onClick()
  {
    console.log(this.accountNum)
    this.service.viewStatement(this.accountNum).subscribe
    (
      response=>{
        console.log(response);
        const res = JSON.stringify(response);
        const jsonRes = JSON.parse(res);
        this.transactions=jsonRes.data;
      },
      error=>{
        console.log(error)
        const res = JSON.stringify(error);
        const jsonRes = JSON.parse(res);
        swal("Sorry",jsonRes.error.message, "error")
      }
    )
    
  }
}
