import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { InterestPlans } from '../model/interest-plans.model';
import { DataServiceService } from '../service/data/data-service.service';

@Component({
  selector: 'app-change-interest',
  templateUrl: './change-interest.component.html',
  styleUrls: ['./change-interest.component.css']
})
export class ChangeInterestComponent implements OnInit {

  interestPlan: InterestPlans[] = [];
  successLabel:string=''
  oldRate:number=0;
  interestPlanObj: InterestPlans = new InterestPlans();
  constructor(private dataService: DataServiceService,private router:Router) { }

  ngOnInit(): void {
    this.dataService.getInterestRateList().subscribe(
      response => {
        console.log(response.data);


        this.interestPlan = response.data;


      }
    )
  }
  
  onSubmit(ChangeInterestRateForm: any) {
    console.log(this.interestPlanObj)
    console.log(ChangeInterestRateForm.value);

    this.dataService.postChangedInterestRate(this.interestPlanObj)
      .subscribe(data => {
        console.log(data);
        swal('Done!','Interest rate changed successfully','success');
        this.router.navigate(['change-interest']);
      },
      error=>{
        swal('Oops!','Interest rate cannot be changed','error');
      }
      )
      

  }

  onClickReset(){
    this.successLabel='';
  }

  getRate(){

    console.log('here');
    this.interestPlan.forEach(element => {
      if(element.plan===this.interestPlanObj.plan) {
        this.oldRate = element.rate;
      }
    });
    console.log(this.oldRate);
    return this.oldRate;
  }

}