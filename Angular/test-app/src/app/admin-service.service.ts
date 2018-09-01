import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  
  //these two lines are used to create a observable
  private HistoryList = new BehaviorSubject<any>('');
  currentdata = this.HistoryList.asObservable();
  
  //for getting user queries to the queries table in html
  private UserQueries = new BehaviorSubject<any>('');
  currentUserqueries = this.UserQueries.asObservable();
  

  //for getting the packages from databases
  private UserPackages = new BehaviorSubject<any>('');
  currentUserpackages = this.UserPackages.asObservable();


  //for changing the label to update or create depending upon situation
  private packageLabel = new BehaviorSubject<any>('');
  currentpackageLabel = this.packageLabel.asObservable();

  //for changing the model attribute when data is present
  private updateData = new BehaviorSubject<any>('');
  currentupdateData =  this.updateData.asObservable();

  //functions for changing the observable data
  changeHistory(History:any){
    this.HistoryList.next(History);
    
  }
  changeQuery(Users:any){
    this.UserQueries.next(Users);
  }
  changePackage(Package:any){
    this.UserPackages.next(Package);
  }
  changelabel(packlab:any){
    this.packageLabel.next(packlab);
  }
  changeUpdate(updateModel:any){
    
    this.updateData.next(updateModel);
  }
  constructor() { }
}
