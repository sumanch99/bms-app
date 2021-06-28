
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert';
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
  constructor(private service: DataServiceService,private router:Router) { }

  ngOnInit(): void {
   this.showDebitCardDetails();
   this.router.routeReuseStrategy.shouldReuseRoute = function() {
    return false;
};
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

    swal({
      title: "Are you sure?",
      text: "You want to reject the debit card request!",
      icon: "warning",
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this.service.deleteRejectedDebitCardRequest(cardDetails.cardNo).subscribe(
          response=>{
    
            console.log(response);
            swal("Done! Debit card request rejected successfully!", {
              icon: "success",
            });
            this.showDebitCardDetails();
            this.alertFlag=true;
            this.successLabel="Debit Card Request Rejected Successfully";
            this.router.navigate(['view-atm-requests']);
          },
          error=>{
            swal('Oops!','Debit card cannot be rejected!','error');
          }
        );
      } else {
        this.showDebitCardDetails();
      }
    });
  }

  onClickAcceptDebitCard(cardDetails:DebitCard){
    this.service.acceptDebitCardRequest(cardDetails.cardNo).subscribe(
      response=>{
        swal('Done!','Accepted debit card request successfully!','success');
      },
      error=>{
        swal('Oops!','Debit card request cannot be accepted','error');
      }
    )
  }

}