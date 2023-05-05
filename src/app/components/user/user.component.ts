import { ResourceService } from './../../services/resource.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  message = '';

  constructor(
    private resourceService: ResourceService
  ) { }

  ngOnInit(): void {
    this.resourceService.user().subscribe( data => {
      this.message = data.message;
    },
    err => {
      console.log(err);
    });
  }

}
