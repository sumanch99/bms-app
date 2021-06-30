import { Component, OnInit } from '@angular/core';
import { Account } from '../model/account.model';
import { DebitCard } from '../model/debit-card.model';
import { CustomerService } from '../service/customer/customer.service';
import swal from 'sweetalert';


@Component({
  selector: 'app-apply-for-debit-card',
  templateUrl: './apply-for-debit-card.component.html',
  styleUrls: ['./apply-for-debit-card.component.css']
})
export class ApplyForDebitCardComponent implements OnInit {
  accounts: Account[] = [];
  debitCard: DebitCard = new DebitCard();
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.customerGetAllAccounts(sessionStorage.getItem("customerUserId")).subscribe(
      response => {
        console.log(response);
        const res = JSON.stringify(response);
        const jsonRes = JSON.parse(res);
        this.accounts = jsonRes.data;
      }
    );
  }

  onSubmit() {
    this.customerService.customerApplyForDebitCard(this.debitCard).subscribe(
      response => {
        console.log(response);
        swal("Congratulations!", "Debit Card Apply successful. Await Grant from Admin.", "success");
      },
      error => {
        console.log(error);
        swal("Failed!!!", "You are not eligible for Debit Card", "error");

      }
    );
  }



}