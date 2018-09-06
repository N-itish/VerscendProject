import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  url:string = "http://localhost:8080/";

  //This function is used to cancel the booking of customer
  cancel(id:number){
    this.http.get(this.url+"Booking/cancel/"+id.toString()).subscribe(()=>{});
  }

  //This function is used to get the user details when
  //the user logs in 
  //TODO: after login get the email and use it to get the userdetails

  getPersonalDetails():Observable<any>{
    return this.http.get(this.url+"Customers/getUser/nitish@gmail.com");
  }
  //Getting the total booking in the table
  //TODO:create mapping in java
  //TODO:get user bookings according to email
  getbookings():Observable<any>{
    return this.http.get(this.url+"Booking/all");
  }
  //Update the data of the user
  updateCustomer(userdetails):Observable<any>{
    console.log(userdetails.value);
    return this.http.put(this.url+"Customers/update",userdetails);
    
  }

  //Setting the booking of the customerDashboard 
  private bookingDetails = new BehaviorSubject<any>('');
  currentbookingDetails = this.bookingDetails.asObservable();

  changebookingDetails(booking){
    this.bookingDetails.next(booking);
  }

  //Setting the userdetails of the customerDashBoard
  private userdetails = new BehaviorSubject<any>('');
  currentuserdetails = this.userdetails.asObservable();

  changeuserDetails(details){
    this.userdetails.next(details);
  }

  constructor(private http:HttpClient) { }
}
