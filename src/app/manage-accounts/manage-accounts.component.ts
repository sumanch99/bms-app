import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../model/account.model';
import { DataServiceService } from '../service/data/data-service.service';

@Component({
  selector: 'app-manage-accounts',
  templateUrl: './manage-accounts.component.html',
  styleUrls: ['./manage-accounts.component.css']
})
export class ManageAccountsComponent implements OnInit {

  errorMessage:any;
  accounts:Account[]=[];
  constructor(private service:DataServiceService, private router:Router) { }

  ngOnInit(): void {
    this.viewAllAccounts();
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
  };
  }

  viewAllAccounts(){
    this.service.getAllAccounts().subscribe(
      response=>{
        if(response.status !== 200)
        {
          this.errorMessage=response.message;
          console.log('Response status '+response.status);
        }
        else{
          this.accounts = response.data;
          console.log(response);
        }
    });
  }

  disableAccount(accountNo:any) {
    this.service.disableAccount(accountNo).subscribe(
      response=>{
        if(response.status !== 200)
        {
          this.errorMessage=response.message;
          console.log('Response status '+response.status);
        }
        else{
          this.router.navigate(['manage-accounts']);
        }
      }
    )
  }

  enableAccount(accountNo:any) {
    this.service.enableAccount(accountNo).subscribe(
      response=>{
        if(response.status !== 200)
        {
          this.errorMessage=response.message;
          console.log('Response status '+response.status);
        }
        else{
          this.router.navigate(['manage-accounts']);
        }
      }
    )
  }

}
