import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../user-service.service';

@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.css']
})
export class PersonaldetailsComponent implements OnInit {

  userDetails:any;
  updateUser(userdetails){
    this.userservice.updateCustomer(userdetails).subscribe((ChangeUser)=>{
      this.userDetails = ChangeUser;
    })
  }
  constructor(private userservice:UserServiceService) { }

  ngOnInit() {
    console.log(this.userDetails);
    this.userservice.currentuserdetails.subscribe(userDetails => this.userDetails = userDetails);
  }

}
