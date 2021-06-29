import { DataServiceService } from './../service/data/data-service.service';
import { Account } from './../model/account.model';
import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Branch } from '../model/branch.model';
import swal from 'sweetalert';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-customer',
  templateUrl: './add-new-customer.component.html',
  styleUrls: ['./add-new-customer.component.css']
})
export class AddNewCustomerComponent implements OnInit {

  newAccount:Account=new Account();
  branchDetails:Branch[]=[];
	accountType: string='';
	ifscCode:string ='';
  newAccountAadharNumber:string=''
	nomineeAdhaarNum: string='';
  sameAadharNumberError:string='Addhar Number for a new account holder and nominee account holder can not be same';
  accountTypes:string[]=['SAVINGS','CURRENT'];
  constructor(private service:DataServiceService,private router:Router) { }
  ngOnInit(): void {
    
    this.service.viewAllBranches().subscribe(
      data => this.branchDetails=data.data
    )

    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
  };
  }
  onSubmit(createAccount:any)
  {
    console.log(createAccount.value);
    this.newAccount.accNo = createAccount.value.accountNumber;
    this.newAccount.accType = createAccount.value.accType;
    this.newAccount.active =true;
    this.newAccount.adhaarNumber= this.newAccountAadharNumber
    this.newAccount.balance=0;
    this.newAccount.ifscCode=createAccount.value.branch;
    this.newAccount.introducerAccountNo = createAccount.value.introducerAccno;
    this.newAccount.nomineeAdhaarNo = this.nomineeAdhaarNum;
    this.newAccount.phoneNumber = createAccount.value.phoneNumber;
    console.log(this.newAccount);
    this.service.createAccount(this.newAccount).subscribe(
      data=>{
        swal("Done!", "New account created successfully!", "success");
        console.log(data);
        this.router.navigate(['new-Customer-Account']);
      },
      error=>{
        swal("Oops!", "Account cannot be created!", "error");
      }
    )
  }
}