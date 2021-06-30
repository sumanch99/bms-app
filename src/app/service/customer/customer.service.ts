import { Observable } from 'rxjs';
import { RecurringDeposit } from './../../model/recurring-deposit.model';
import { FixedDeposit } from './../../model/fixed-deposit.model';
import { Loan } from 'src/app/model/loan.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from 'src/app/model/cutomer.model';
import { DebitCard } from 'src/app/model/debit-card.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  private baseUrl: string = 'http://localhost:8080/customer/';

  customerSignUp(customer:Customer){
    return this.http.post(this.baseUrl+'customer-signup',customer);
  }
  getAllAccounts()
  {
    let user = sessionStorage.getItem('customerUserId')
    return this.http.get(this.baseUrl+'get-all-accounts/'+user);
  }
  deposit(accNo:number,amount:number)
  {
    return this.http.post(this.baseUrl+'deposit/'+accNo,amount);
  }
  withdraw(accNo:number,amount:number)
  {
    return this.http.post(this.baseUrl+'withdraw/'+accNo,amount);
  }
  transfer(fromAccNo:number,toAccNo:number,amount:number)
  {
    return this.http.post(this.baseUrl+`account-transfer/${fromAccNo}/${toAccNo}`,amount)
  }
  getBalance(accNo:number)
  {
    return this.http.get(this.baseUrl+'get-balance/'+accNo);
  }
  viewStatement(accNo:number)
  {
    return this.http.get(this.baseUrl+'view-statement/'+accNo);
  }
  getInterestRateList() {
    return this.http.get<any>(this.baseUrl + 'view-interest-plans');
  }
  customerApplyForDebitCard(debitCard:DebitCard):Observable<any>{
    return this.http.post(this.baseUrl+'apply-debit-card',debitCard);
  }
  customerApplyLoan(loan:Loan){
    return this.http.post(this.baseUrl+'apply-loan',loan);
  }
  customerGetAllAccounts(userId:any){
    return this.http.get(this.baseUrl+'get-all-accounts/'+userId);
  }
  customerApplyForFd(fixedDeposit:FixedDeposit){
    return this.http.post(this.baseUrl+'apply-fd',fixedDeposit);
  }
  customerApplyForRd(recurringDeposit:RecurringDeposit){
    return this.http.post(this.baseUrl+'apply-rd',recurringDeposit);
  }
  viewDebitCards(accountNum:number)
  {
    return this.http.get(this.baseUrl+'view-debit-card/'+accountNum);
  }
  customerMyLoans(userId:any):Observable<any>{
    console.log("User Id:"+userId);
    return this.http.get(this.baseUrl+'view-my-loans/'+userId);
  }
  customerMyFd(accountNumber:number):Observable<any>{
    return this.http.get(this.baseUrl+"view-my-fd/"+accountNumber);
  }
  customerMyRd(accountNumber:number):Observable<any>{
    console.log("account no "+accountNumber);
    return this.http.get(this.baseUrl+'view-my-rd/'+accountNumber);
  }
}
