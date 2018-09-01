import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminServiceService } from '../../admin-service.service';

@Component({
 
  templateUrl: './add-package.component.html',
  styleUrls: ['./add-package.component.css']
})
export class AddPackageComponent implements OnInit {
  Create_Update;
  model : any;
  
  createPackage(packageForm){
    console.log(packageForm.value);
    let obs = this.http.post("http://localhost:8080/Package/add",packageForm.value);
    obs.subscribe((response)=>{

    })
  }
  
  constructor(private http : HttpClient,private adminservice:AdminServiceService) { }

  ngOnInit() {
    this.adminservice.currentpackageLabel.subscribe(packageName => this.Create_Update = packageName);
    this.adminservice.currentupdateData.subscribe(modelUpdate =>this.model = modelUpdate);
  }

}
