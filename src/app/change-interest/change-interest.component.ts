import { Component, OnInit } from '@angular/core';
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
  constructor(private dataService: DataServiceService) { }

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
        
      })
      this.successLabel = this.interestPlanObj.plan + " INTEREST RATE SUCCESSFULLY CHANGED TO " + this.interestPlanObj.rate +"%.";

  }

  onClickReset(){
    this.successLabel='';
  }

}