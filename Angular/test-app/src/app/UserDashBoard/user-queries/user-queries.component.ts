import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../admin-service.service';

@Component({
  selector: 'app-user-queries',
  templateUrl: './user-queries.component.html',
  styleUrls: ['./user-queries.component.css']
})
export class UserQueriesComponent implements OnInit {
  UserQueries : any;
  constructor(private adminservice : AdminServiceService) { }

  ngOnInit() {
    this.adminservice.currentUserqueries.subscribe(UserQueries => this.UserQueries = UserQueries);
  }

}
