import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
 
  templateUrl: './add-package.component.html',
  styleUrls: ['./add-package.component.css']
})
export class AddPackageComponent implements OnInit {
  createPackage(packageForm){
    console.log(packageForm.value);
    let obs = this.http.post("http://localhost:8080/Package/add",packageForm.value);
    obs.subscribe((response)=>{

    })
  }
  
  constructor(private http : HttpClient) { }

  ngOnInit() {
  }

}
