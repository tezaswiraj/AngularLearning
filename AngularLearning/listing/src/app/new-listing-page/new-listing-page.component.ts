import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-listing-page',
  templateUrl: './new-listing-page.component.html',
  styleUrls: ['./new-listing-page.component.css']
})
export class NewListingPageComponent implements OnInit {
  name:string;
  id:string;
  description:string;
  price:number;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  submitform() {
    alert('creating a new listing')
    this.router.navigateByUrl('my-listings')
  }

}
