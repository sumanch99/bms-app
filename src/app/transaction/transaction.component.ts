import { DataServiceService } from './../service/data/data-service.service';
import { Component, OnInit } from '@angular/core';
import { Transaction } from '../model/transaction.model';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

 transactions:Transaction[]=[];
  constructor(private service:DataServiceService) { }
  errorMessage:string ='';
  ngOnInit(): void {
    this.service.getAllTransactions().subscribe(
      response=>{
        if(response.status !== 200)
        {
          this.errorMessage = response.message;
          console.log('Response status ' + response.status);
        }
        
          this.transactions = response.data;
          console.log(response);
      }
    )
  }

}
