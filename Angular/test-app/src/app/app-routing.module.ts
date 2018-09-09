import { NgModule, Component } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {CustomerFormComponent} from './customer-form/customer-form.component';
import { AppComponent } from './app.component';
import { GetHistoryComponent } from './UserDashBoard/get-history/get-history.component';
import { AddPackageComponent } from './UserDashBoard/add-package/add-package.component';
import { UserQueriesComponent } from './UserDashBoard/user-queries/user-queries.component';
import { ShowPackagesComponent } from './UserDashBoard/show-packages/show-packages.component';
<<<<<<< HEAD
import { DashboardComponent } from './DashBoard/dashboard/dashboard.component';
import { PersonaldetailsComponent } from './DashBoard/personaldetails/personaldetails.component';
import { BookingsComponent } from './DashBoard/bookings/bookings.component';
=======
import { UpdateComponent } from './UserDashBoard/update/update.component';
>>>>>>> sixteenth commit

const routes:Routes=[
  {path : 'customer', component:CustomerFormComponent},
  {path : 'recentBookings', component: GetHistoryComponent},
  //creating a subcomponent
  {path : 'addPackage', component: AddPackageComponent,
    children:[
      {path:'update',component:UpdateComponent}
    ]
  },
  {path : 'UserQueries',component:UserQueriesComponent},
  {path : 'showPackages',component:ShowPackagesComponent},
  {path : 'personalDetails',component:PersonaldetailsComponent},
  {path : 'dashboard',component: DashboardComponent},
  {path : 'bookings',component:BookingsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { 
 
}
