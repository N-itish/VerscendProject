import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
url : string = "http://localhost:8080/";  

// *************** ALL  HTTP REQUESTS **************//

//adding package for the database
addPackage(packageForm): Observable<any>{
  return  this.http.post(this.url+"Package/add",packageForm.value);
}
updatePackage(packageForm):Observable<any>{
  return this.http.put(this.url+"Package/update",packageForm.value)
}

//returns the booking history
getBookingHistory(): Observable<any>{
  return this.http.get(this.url+"Customers/all");
}

//returns the user queries
getUserHistory(): Observable<any>{
  return this.http.get(this.url+"UserQuery/all");
}

//getting all the packages form database
getPackage() : Observable<any>{
  return this.http.get(this.url+"Package/all");
}

//deleteting the particular package with id
deletePackage(Formpackage) : Observable<any>{
  return this.http.delete(this.url +'Package/delete/'+Formpackage.id.toString());
}

//deleting the particular userqueries with id
deleteQueries(userQuery) :Observable<any>{
    console.log(userQuery.value);
    return this.http.delete(this.url+'UserQuery/delete/'+userQuery.messageId.toString());
}

// ********************* FOR DATA TRANSFER BETWEEN TWO COMPONENT ********************* //


 //these two lines are used to create a observable
  private HistoryList = new BehaviorSubject<any>('');
  currentdata = this.HistoryList.asObservable();
  
  //for getting user queries to the queries table in html
  private UserQueries = new BehaviorSubject<any>('');
  currentUserqueries = this.UserQueries.asObservable();
  
<<<<<<< HEAD
  //for changing the value of success message in add/update page
  private Success = new BehaviorSubject<any>('');
  currentSuccess = this.Success.asObservable();
  
  //for getting the packages from users
=======

  //for getting the packages to the table in html
>>>>>>> sixteenth commit
  private UserPackages = new BehaviorSubject<any>('');
  currentUserpackages = this.UserPackages.asObservable();


  //for changing the label to add/update depending upon situation
  private packageLabel = new BehaviorSubject<any>('');
  currentpackageLabel = this.packageLabel.asObservable();

<<<<<<< HEAD
  //for changing the model attribute when data is present
  //------- This is for upadate only -------//
  
=======
  //setting the model variable in addpackage for updating package
>>>>>>> sixteenth commit
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
  changeSuccess(changeSuccess){
    this.Success.next(changeSuccess);
  }
  constructor(private http:HttpClient) { }
}
