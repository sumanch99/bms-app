import { Component, OnInit } from '@angular/core';
import { Loan } from '../model/loan.model';
import { DataServiceService } from '../service/data/data-service.service';

@Component({
  selector: 'app-view-all-approved-loans',
  templateUrl: './view-all-approved-loans.component.html',
  styleUrls: ['./view-all-approved-loans.component.css']
})
export class ViewAllApprovedLoansComponent implements OnInit {

  approvedLoans: Loan[] = [];
  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.dataService.getApprovedLoanRequests().subscribe(
      response => {
        console.log(response.data);


        this.approvedLoans = response.data;
      }
    )

  }
  

}