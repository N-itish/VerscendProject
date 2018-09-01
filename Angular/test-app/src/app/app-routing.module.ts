import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {CustomerFormComponent} from './customer-form/customer-form.component';
import { AppComponent } from './app.component';
import { GetHistoryComponent } from './UserDashBoard/get-history/get-history.component';
import { AddPackageComponent } from './UserDashBoard/add-package/add-package.component';
import { UserQueriesComponent } from './UserDashBoard/user-queries/user-queries.component';
import { ShowPackagesComponent } from './UserDashBoard/show-packages/show-packages.component';

const routes:Routes=[
  {path : 'customer', component:CustomerFormComponent},
  {path : 'recentBookings', component: GetHistoryComponent},
  {path : 'addPackage', component: AddPackageComponent},
  {path : 'UserQueries',component:UserQueriesComponent},
  {path : 'showPackages',component:ShowPackagesComponent}
  // {path : '',component:AppComponent},
  // {path :"dashboard",component: DashboardComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { 
 
}
