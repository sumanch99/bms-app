import { CustomerService } from './../service/customer/customer.service';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';

@Component({
  selector: 'app-customer-withdraw',
  templateUrl: './customer-withdraw.component.html',
  styleUrls: ['./customer-withdraw.component.css']
})
export class CustomerWithdrawComponent implements OnInit {

  accounts:any
  accountNum:number=0
  withdrawAmount:number=0
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
    console.log(this.withdrawAmount,this.accountNum)
    this.service.withdraw(this.accountNum,this.withdrawAmount).subscribe
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
        swal("Sorry", jsonRes.error.message, "error")
      }
    )
    
  }

}
