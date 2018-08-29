import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {CustomerFormComponent} from './customer-form/customer-form.component';
import { AppComponent } from './app.component';

const routes:Routes=[
  {path : 'customer', component:CustomerFormComponent},
  {path : '',component:AppComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { 
 
}
