import { CustomerService } from './../service/customer/customer.service';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';

@Component({
  selector: 'app-customer-account-transfer',
  templateUrl: './customer-account-transfer.component.html',
  styleUrls: ['./customer-account-transfer.component.css']
})
export class CustomerAccountTransferComponent implements OnInit {

  accounts:any
  accountNum:number=0
  toAccNum:number=0
  transferAmount:number=0
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
    console.log(this.transferAmount,this.accountNum,this.toAccNum)
    this.service.transfer(this.accountNum,this.toAccNum,this.transferAmount).subscribe
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
