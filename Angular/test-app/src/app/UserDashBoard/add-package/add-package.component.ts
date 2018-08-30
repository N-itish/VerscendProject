import { Component, OnInit } from '@angular/core';

@Component({
 
  templateUrl: './add-package.component.html',
  styleUrls: ['./add-package.component.css']
})
export class AddPackageComponent implements OnInit {
  createPackage(packageForm){
    console.log(packageForm.value);
  }
  constructor() { }

  ngOnInit() {
  }

}
