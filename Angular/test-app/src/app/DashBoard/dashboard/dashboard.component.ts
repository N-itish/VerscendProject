import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../user-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  getPersonalDetails(){
    this.userservice.getPersonalDetails().subscribe((response)=>{
      this.userservice.changeuserDetails(response);
    })
  }
  getUserBookings(){
    this.userservice.getbookings().subscribe((response)=>{
      console.log(response);
      this.userservice.changebookingDetails(response);
    })
  }
  constructor(private userservice:UserServiceService) { }

  ngOnInit() {
  }

}
