import { Component, OnInit } from '@angular/core';
import { ResourceService } from 'src/app/services/resource.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  message = '';

  constructor(
    private resourceService: ResourceService
  ) { }

  ngOnInit(): void {
    this.resourceService.admin().subscribe( data => {
      this.message = data.message;
    },
    err => {
      console.log(err);
    });
  }

}
