import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../admin-service.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';




@Component({
  selector: 'app-show-packages',
  templateUrl: './show-packages.component.html',
  styleUrls: ['./show-packages.component.css']
})

export class ShowPackagesComponent implements OnInit {
  UserPackage:any;


  deletePackage(packageid:number){
    let obs = this.http.delete('http://localhost:8080/Packages/delete/'+packageid.toString());
    obs.subscribe(()=>{

    })
  }
  updatePackage(packageid:number)
  {
    console.log(packageid)
  }
  constructor(private adminservice:AdminServiceService,private http:HttpClient) { }
  ngOnInit() {
    this.adminservice.currentUserpackages.subscribe(UserPackage => this.UserPackage = UserPackage)
  }

}
