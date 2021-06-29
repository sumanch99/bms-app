import { CustomerMyRdComponent } from './customer-my-rd/customer-my-rd.component';
import { CustomerMyfdComponent } from './customer-myfd/customer-myfd.component';
import { CustomerMyLoanComponent } from './customer-my-loan/customer-my-loan.component';
import { CustomerApplyForRdComponent } from './customer-apply-for-rd/customer-apply-for-rd.component';
import { CustomerApplyForFdComponent } from './customer-apply-for-fd/customer-apply-for-fd.component';
import { ManageAccountsComponent } from './manage-accounts/manage-accounts.component';
import { HomeRouteGuardService } from './service/home/home-route-guard.service';
import { CustomerRouteGuardService } from './service/customer/customer-route-guard.service';
import { CustomerViewStatementComponent } from './customer-view-statement/customer-view-statement.component';
import { CustomerMyAccountsComponent } from './customer-my-accounts/customer-my-accounts.component';
import { CustomerAccountTransferComponent } from './customer-account-transfer/customer-account-transfer.component';
import { CustomerCheckBalanceComponent } from './customer-check-balance/customer-check-balance.component';
import { CustomerLogoutComponent } from './customer-logout/customer-logout.component';
import { CustomerWithdrawComponent } from './customer-withdraw/customer-withdraw.component';
import { CustomerDepositComponent } from './customer-deposit/customer-deposit.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
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
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { ListBranchesComponent } from './list-branches/list-branches.component';
import { BranchComponent } from './branch/branch.component';
import { ViewPendingLoanRequestComponent } from './view-pending-loan-request/view-pending-loan-request.component';
import { ChangeInterestComponent } from './change-interest/change-interest.component';
import { ViewAccountComponent } from './view-account/view-account.component';
import { ViewAllApprovedLoansComponent } from './view-all-approved-loans/view-all-approved-loans.component';
import { ViewAtmRequestsComponent } from './view-atm-requests/view-atm-requests.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CustomerApplyForLoanComponent } from './customer-apply-for-loan/customer-apply-for-loan.component';
import { AdminSetupComponent } from './admin-setup/admin-setup.component';


const routes: Routes = [
  {
    path:'',component:WelcomeComponent
  },
  {
    path:'welcome',component:WelcomeComponent
  },
  {
    path:'admin-setup',component:AdminSetupComponent
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
    path:'customer-login',component:CustomerLoginComponent
  },
  {
    path:'customer-signup',component:CustomerSignupComponent
  },
  
  {
    path:'customer-dashboard',component:CustomerDashboardComponent,canActivate:[CustomerRouteGuardService]
  },
  {
    path:'customer-deposit',component:CustomerDepositComponent,canActivate:[CustomerRouteGuardService]
  },
  {
    path:'customer-withdraw',component:CustomerWithdrawComponent,canActivate:[CustomerRouteGuardService]
  },
  {
    path:'customer-check-balance',component:CustomerCheckBalanceComponent,canActivate:[CustomerRouteGuardService]
  },
  {
    path:'customer-account-transfer',component:CustomerAccountTransferComponent,canActivate:[CustomerRouteGuardService]
  },
  {
    path:'customer-my-accounts',component:CustomerMyAccountsComponent,canActivate:[CustomerRouteGuardService] 
  },
  {
    path:'view-statement',component:CustomerViewStatementComponent,canActivate:[CustomerRouteGuardService]
  },
  {
    path:'apply-for-loan',component:CustomerApplyForLoanComponent,canActivate:[CustomerRouteGuardService]
  },
  {
    path:'apply-for-fd',component:CustomerApplyForFdComponent,canActivate:[CustomerRouteGuardService]
  }, 
  {
    path:'apply-for-rd',component:CustomerApplyForRdComponent,canActivate:[CustomerRouteGuardService]
  },
  {
    path:'my-loans',component:CustomerMyLoanComponent,canActivate:[CustomerRouteGuardService]
  },
  {
    path:'my-fd',component:CustomerMyfdComponent,canActivate:[CustomerRouteGuardService]
  },
  {
    path:'my-rd',component:CustomerMyRdComponent,canActivate:[CustomerRouteGuardService]
  },
  {
    path:'customer-logout', component:CustomerLogoutComponent,canActivate:[CustomerRouteGuardService]
  },
  {
    //Page to occur in case of an invalid url
    path:'**',component:ErrorpageComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
