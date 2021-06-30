import { DebitCard } from './../model/debit-card.model';
import { CustomerService } from './../service/customer/customer.service';
import swal from 'sweetalert';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-view-debit-cards',
  templateUrl: './customer-view-debit-cards.component.html',
  styleUrls: ['./customer-view-debit-cards.component.css']
})
export class CustomerViewDebitCardsComponent implements OnInit {
  accounts:any
  accountNum:number=0
  debitCards:DebitCard[]=[]
  constructor(private service:CustomerService,private router:Router) { }

  ngOnInit(): void {
    this.service.getAllAccounts().subscribe(
      data=>{
        const res =JSON.stringify(data);
        const jsonRes = JSON.parse(res);
        this.accounts =  jsonRes.data;
        console.log(this.accounts)
      }
     )
  }

  onClick()
  {
   this.service.viewDebitCards(this.accountNum).subscribe(
     response=>{console.log(response)
      const res = JSON.stringify(response)
      const jsonRes = JSON.parse(res)
      if(jsonRes.data.length===0){
      swal("Sorry!", "You have no debit cards", "error")
      this.debitCards=[];
      this.router.navigate(['view-debit-cards']);
      }
      else
      {
        this.debitCards=jsonRes.data
        console.log(this.debitCards)
      }
    }
   ) 
  }

}