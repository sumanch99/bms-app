
import { Component, OnInit } from '@angular/core';
import { DebitCard } from '../model/debit-card.model';

import { DataServiceService } from '../service/data/data-service.service';

@Component({
  selector: 'app-view-atm-requests',
  templateUrl: './view-atm-requests.component.html',
  styleUrls: ['./view-atm-requests.component.css']
})
export class ViewAtmRequestsComponent implements OnInit {
  debitCardRequestList: DebitCard[]=[];
  successLabel:String='';
  alertFlag:boolean=false;
  constructor(private service: DataServiceService) { }

  ngOnInit(): void {
   this.showDebitCardDetails();
  }

  showDebitCardDetails(){
    this.service.getPendingATMRequests().subscribe(
      response => {
        console.log(response);
        this.debitCardRequestList= response.data;
      }
    );
  }

  onClickRejectDebitCard(cardDetails:DebitCard){
    this.service.deleteRejectedDebitCardRequest(cardDetails.cardNo).subscribe(
      response=>{
        console.log(response);
        this.showDebitCardDetails();
        this.alertFlag=true;
        this.successLabel="Debit Card Request Rejected Successfully";
      }
      
    );
    
  }

}