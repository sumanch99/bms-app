
import { DataServiceService } from './../service/data/data-service.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/cutomer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  errorMessage:string='';
 public customers:Customer[]=[]
  constructor(private dataService:DataServiceService) { }
  ngOnInit(): void {
    this.dataService.getCustomerList().subscribe(
      response=>{
       if(response.status !== 200)
       {console.log(response.status);
        this.errorMessage ='Sorry. Currently facing some problem in loading the list of all approved customers.'}
       else{
         console.log(response);
       this.customers = response.data;}
      }
    )
  }

}
