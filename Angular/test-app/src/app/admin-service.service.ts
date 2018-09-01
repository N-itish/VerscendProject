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
  
  private UserQueries = new BehaviorSubject<any>('');
  currentUserqueries = this.UserQueries.asObservable();
  
  //Change the history list behaviour
  changeHistory(History:any){
    this.HistoryList.next(History);
    
  }
  changeQuery(Users:any){
    this.UserQueries.next(Users);
  }
  
  constructor() { }
}
