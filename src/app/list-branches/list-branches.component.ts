import { DataServiceService } from './../service/data/data-service.service';
import { Component, OnInit } from '@angular/core';
import { Branch } from '../model/branch.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-branches',
  templateUrl: './list-branches.component.html',
  styleUrls: ['./list-branches.component.css']
})
export class ListBranchesComponent implements OnInit {

  errorMessage:any;
  branches:Branch[]=[];
  addBranch:boolean=false;
  constructor(private service:DataServiceService, private router:Router) { }

  ngOnInit(): void {
    this.viewAllBranches();
  }
  viewAllBranches()
  {
    this.service.viewAllBranches().subscribe(
      response=>{
        if(response.status !== 200)
        {
          this.errorMessage='Sorry. Currently facing some problem in loading the list of all the branches.';
          console.log('Response status '+response.status);
        }
        else{
          this.branches = response.data;
        console.log(response);
        }
      }
    )
  }
  addNewBranch()
  {
    this.router.navigate(['branchManipulations']);    
  }
  depositToBranch(ifscCode:string)
  {
    this.router.navigate(['depositToBranchFunds',ifscCode]);
  }
  
}
