import { DataServiceService } from './../service/data/data-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-deposit-to-branch-funds',
  templateUrl: './deposit-to-branch-funds.component.html',
  styleUrls: ['./deposit-to-branch-funds.component.css']
})
export class DepositToBranchFundsComponent implements OnInit {
  ifscCode:string='';
  amount:number=0;
  errorMessage ='';
  constructor(private route:ActivatedRoute,private service:DataServiceService,private router:Router) { }

  ngOnInit(): void {
    this.ifscCode= this.route.snapshot.params['ifscCode'];
  }
  onSubmit(addBranchFund:any)
  {
    this.amount=addBranchFund.value.amount;
    console.log(this.amount);
    console.log(this.ifscCode);
    this.service.depositToBranch(this.ifscCode,this.amount).subscribe(
      response=>{console.log(response);
        
        this.router.navigate(['listBranches']);
      }
    )
  }
}
