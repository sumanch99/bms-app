import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DebitCard } from 'src/app/model/debit-card.model';
import { JSONResponse } from 'src/app/model/JSON-response.model';

@Injectable({
  providedIn: 'root'
})
export class AtmService {
private baseURl:string="http://bmsapi.herokuapp.com/atm-corner/"
  constructor(private http:HttpClient) { }

withdrawUsingATM(debitCard:DebitCard,amount:number){

  return this.http.post(this.baseURl+'withdraw/'+amount,debitCard);

}

checkBalanceUsingATM(debitCard:DebitCard){
  return this.http.post(this.baseURl+'check-balance',debitCard);
}

}