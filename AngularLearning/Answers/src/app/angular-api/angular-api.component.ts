import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-angular-api',
  templateUrl: './angular-api.component.html',
  styleUrls: ['./angular-api.component.css']
})
export class AngularApiComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getUsers().subscribe(data => console.log(data))
  }

}
