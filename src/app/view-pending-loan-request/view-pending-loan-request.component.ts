import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Loan } from '../model/loan.model';
import { DataServiceService } from '../service/data/data-service.service';

@Component({
  selector: 'app-view-pending-loan-request',
  templateUrl: './view-pending-loan-request.component.html',
  styleUrls: ['./view-pending-loan-request.component.css']
})
export class ViewPendingLoanRequestComponent implements OnInit {
  pendingLoans: Loan[] = [];
  constructor(private dataService: DataServiceService, private router:Router) { }

  ngOnInit(): void {
    this.viewAllPendingRequest()
  }

  viewAllPendingRequest()
  {
    this.dataService.getPendingLoanRequests().subscribe(
      response => {
        console.log(response.data);
        this.pendingLoans = response.data;
      }
    )
  }
  onClickGrantLoan(loan: Loan) {
    this.dataService.patchGrantLoan(loan).subscribe(data => {
      console.log(data);
      this.viewAllPendingRequest();
    });
  }
  onClickReject(loanId: number) {
    console.log("deleting " + loanId);
    this.dataService.deleteRejectedLoan(loanId).subscribe(
    // window.location.reload();
    data =>{
    this.viewAllPendingRequest()}
    ) 
  }
}