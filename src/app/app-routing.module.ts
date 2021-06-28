import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerSignupComponent } from './customer-signup/customer-signup.component';
import { AtmCheckBalanceComponent } from './atm-check-balance/atm-check-balance.component';
import { AtmWithdrawComponent } from './atm-withdraw/atm-withdraw.component';
import { AtmHomepageComponent } from './atm-homepage/atm-homepage.component';
import { RouterGuardService } from './service/router-guard.service';

import { AdminLogoutComponent } from './admin-logout/admin-logout.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AddNewCustomerComponent } from './add-new-customer/add-new-customer.component';
import { ViewInterestPlansComponent } from './view-interest-plans/view-interest-plans.component';
import { DepositToBranchFundsComponent } from './deposit-to-branch-funds/deposit-to-branch-funds.component';
import { TransactionComponent } from './transaction/transaction.component';
import { CustomerComponent } from './customer/customer.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBranchesComponent } from './list-branches/list-branches.component';
import { BranchComponent } from './branch/branch.component';
import { ViewPendingLoanRequestComponent } from './view-pending-loan-request/view-pending-loan-request.component';
import { ChangeInterestComponent } from './change-interest/change-interest.component';
import { ViewAccountComponent } from './view-account/view-account.component';
import { ViewAllApprovedLoansComponent } from './view-all-approved-loans/view-all-approved-loans.component';
import { ViewAtmRequestsComponent } from './view-atm-requests/view-atm-requests.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ManageAccountsComponent } from './manage-accounts/manage-accounts.component';


const routes: Routes = [
  {
    path:'',component:WelcomeComponent
  },
  {
    path:'app-admin-login',component:AdminLoginComponent
  },
  
  {
    path:'admin-dashboard',component:AdminDashboardComponent,canActivate:[RouterGuardService]
  },
  {
    path:'new-Customer-Account',component:AddNewCustomerComponent,canActivate:[RouterGuardService]
  },
  {
    // To get the list of all the customers.
    path:'viewCustomer',component:CustomerComponent,canActivate:[RouterGuardService]
  },
  {
    //To get the list of all the branches of this bank.
    path:'listBranches',component:ListBranchesComponent,canActivate:[RouterGuardService]
  },
  {
    //To get the list of all the branches of this bank.
    path:'manage-accounts',component:ManageAccountsComponent,canActivate:[RouterGuardService]
  },
  {
    //To get the list of all the transactions that have occurred
    path:'allTransactions',component:TransactionComponent,canActivate:[RouterGuardService]
  },
  {
    //To add a new branch
    path:'branchManipulations',component:BranchComponent,canActivate:[RouterGuardService]
  },
  { 
    //To change the interest rate
    path: 'change-interest', component: ChangeInterestComponent ,canActivate:[RouterGuardService]
  },
  {
    //To add to branch funds
    path:'depositToBranchFunds/:ifscCode',component:DepositToBranchFundsComponent,canActivate:[RouterGuardService]
  },
  { 
    // To view all the loan requests that are yet to be approved
    path: 'view-pending-loan-request', component: ViewPendingLoanRequestComponent,canActivate:[RouterGuardService]
  },
  { 
    path: 'view-account/:accountNo', component: ViewAccountComponent,canActivate:[RouterGuardService]
  },
  { 
    //To view the list of approved loans
    path: 'view-all-approved-loans', component: ViewAllApprovedLoansComponent ,canActivate:[RouterGuardService]
  },
  {
    path:'view-interest-plans',component:ViewInterestPlansComponent,canActivate:[RouterGuardService]
  },
  {
    //To view all pending atm requests
    path:'view-atm-requests',component:ViewAtmRequestsComponent,canActivate:[RouterGuardService]
  },
  {
    path:'admin-Logout',component:AdminLogoutComponent,canActivate:[RouterGuardService]
  },
  {
    path: 'atm-homepage', component: AtmHomepageComponent
  },
  {
    path: "atm-withdraw", component: AtmWithdrawComponent
  },
  {
    path: "atm-check-balance", component: AtmCheckBalanceComponent
  },
  {
    path:'customer-signup',component:CustomerSignupComponent
  },
  {
    path:'customer-login',component:CustomerLoginComponent
  },
  {
    //Page to occur in case of an invalid url
    path:'**',component:ErrorpageComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    onSameUrlNavigation: 'reload'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
