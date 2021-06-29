import { CustomerService } from './../service/customer/customer.service';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';

@Component({
  selector: 'app-customer-check-balance',
  templateUrl: './customer-check-balance.component.html',
  styleUrls: ['./customer-check-balance.component.css']
})
export class CustomerCheckBalanceComponent implements OnInit {

  accounts:any
  accountNum:number=0
  balanceAmount:number=0
  errorMessage:boolean=false
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
  onSubmit()
  {
    console.log(this.accountNum)
    this.service.getBalance(this.accountNum).subscribe
    (
      response=>{
        console.log(response);
        const res = JSON.stringify(response);
        const jsonRes = JSON.parse(res);
        this.errorMessage = false;
        this.balanceAmount = jsonRes.data;
        swal("Done!", jsonRes.message + ':' + this.balanceAmount, "success")
      },
      error=>{
        this.errorMessage=true;
        console.log(error)
        const res = JSON.stringify(error);
        const jsonRes = JSON.parse(res);
        swal("Sorry",jsonRes.message, "error")
      }
    )
    
  }

}
