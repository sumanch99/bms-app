import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import _swal from 'sweetalert'; import { DebitCard } from '../model/debit-card.model';
import { JSONResponse } from '../model/JSON-response.model';
import { AtmService } from '../service/atm/atm.service';

@Component({
  selector: 'app-atm-check-balance',
  templateUrl: './atm-check-balance.component.html',
  styleUrls: ['./atm-check-balance.component.css']
})
export class AtmCheckBalanceComponent implements OnInit {

  constructor(private atmService: AtmService, private router: Router) { }
  debitCard: DebitCard = new DebitCard();
  ngOnInit(): void {
  }

  onSubmit(atmCheckBalanceForm: any) {
    this.debitCard.cardNo = atmCheckBalanceForm.value.cardNumber;
    this.debitCard.cvvNo = atmCheckBalanceForm.value.cvvNumber;
    this.debitCard.pin = atmCheckBalanceForm.value.pinNumber;
    this.atmService.checkBalanceUsingATM(this.debitCard).subscribe(
      response => {
        const res =JSON.stringify(response); 
        const jsonResponse = JSON.parse(res);
        console.log(jsonResponse.data);
        _swal(jsonResponse.message, "RS."+JSON.stringify(jsonResponse.data));
        this.router.navigate(['atm-homepage']);
      },
      error => {
        console.log(error);
        _swal("Failed!!", "Invalid Credentials", "error");
        this.router.navigate(['atm-homepage']);
      }
    );
  }

}