import { DataServiceService } from './../service/data/data-service.service';
import { Component, OnInit } from '@angular/core';
import { InterestPlans } from '../model/interest-plans.model';

@Component({
  selector: 'app-view-interest-plans',
  templateUrl: './view-interest-plans.component.html',
  styleUrls: ['./view-interest-plans.component.css']
})
export class ViewInterestPlansComponent implements OnInit {
  errorMessage='';
  interestPlans:InterestPlans[]=[];
  constructor(private service:DataServiceService) { }

  ngOnInit(): void {
    this.service.getInterestRateList().subscribe(
      response=>{console.log(response);
        this.interestPlans=response.data;
        console.log(this.interestPlans);
      }
    )
  }

}
