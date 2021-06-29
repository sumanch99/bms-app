import { CustomerService } from './../service/customer/customer.service';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';

@Component({
  selector: 'app-customer-deposit',
  templateUrl: './customer-deposit.component.html',
  styleUrls: ['./customer-deposit.component.css']
})
export class CustomerDepositComponent implements OnInit {
 
  accounts:any
  accountNum:number=0
  depositedAmount:number=0
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
  onSubmit(deposit:any)
  {
    console.log(this.depositedAmount,this.accountNum)
    this.service.deposit(this.accountNum,this.depositedAmount).subscribe
    (
      response=>{
        console.log(response);
        const res = JSON.stringify(response);
        const jsonRes = JSON.parse(res);
        swal("Done!", jsonRes.message, "success")
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
