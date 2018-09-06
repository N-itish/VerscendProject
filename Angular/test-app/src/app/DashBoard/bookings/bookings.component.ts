import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../user-service.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  bookings;
  cancelBooking(id:number){
    this.userservice.cancel(id);
  }
  constructor(private userservice : UserServiceService) { }

  ngOnInit() {
    this.userservice.currentbookingDetails.subscribe(userdata => this.bookings = userdata);
  }

}
