import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../admin-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent implements OnInit {
  changePackageName(){
    this.adminservice.changelabel('Create');
    this.adminservice.changeUpdate('');
  }
  getBookingHistory(){
    let obs = this.http.get("http://localhost:8080/Customers/all",{
      headers:new HttpHeaders().set('access-control-allow-origin','get')
    });
    obs.subscribe((HistoryList)=>{
      this.adminservice.changeHistory(HistoryList);
    })
  }
  getUserHistory(){
    let obs = this.http.get("http://localhost:8080/UserQuery/all",{
      headers:new HttpHeaders().set('access-control-allow-origin','get')
    });
    obs.subscribe((UserQuery)=>{
      this.adminservice.changeQuery(UserQuery);
    })
  }
  getPackges(){
    let obs = this.http.get("http://localhost:8080/Package/all");
    obs.subscribe((userPackage)=>{
      this.adminservice.changePackage(userPackage);
    })
  }

  constructor(private adminservice:AdminServiceService,private http:HttpClient) { }

  ngOnInit() {
    
  }

}
