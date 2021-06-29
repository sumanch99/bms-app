import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert';
import { DebitCard } from '../model/debit-card.model';
import { AtmService } from '../service/atm/atm.service';

@Component({
  selector: 'app-atm-withdraw',
  templateUrl: './atm-withdraw.component.html',
  styleUrls: ['./atm-withdraw.component.css']
})
export class AtmWithdrawComponent implements OnInit {
  debitCard: DebitCard = new DebitCard();
  amount: number = 0;


  constructor(private atmService: AtmService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(atmWithdrawForm: any) {
    this.debitCard.cardNo = atmWithdrawForm.value.cardNumber;
    this.debitCard.cvvNo = atmWithdrawForm.value.cvvNumber;
    this.debitCard.pin = atmWithdrawForm.value.pinNumber;
    this.amount = atmWithdrawForm.value.amount;
    this.atmService.withdrawUsingATM(this.debitCard, this.amount).subscribe(
      (response) => {
        console.log(response);
        swal("Congratulations!", "Successfully Withdrawn Rs." + this.amount + " from Account!", "success");
        this.router.navigate(['atm-homepage']);
      },
      (error) => {
        console.log(error);
        swal("Failed!!", "Invalid Credentials", "error");
        this.router.navigate(['atm-homepage']);
      }
    );
  }

}