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

  //Change the history list behaviour
  changeHistory(History:any){
    this.HistoryList.next(History);
    //checking if the history list has changed
    console.log(this.HistoryList);
  }
  
  constructor() { }
}
