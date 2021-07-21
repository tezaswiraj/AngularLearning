import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css']
})
export class PhotoShowComponent implements OnInit {

  constructor(private photoService: PhotosService) { 
    this.fetchPhoto()
  }
  photoUrl:string = '';
  onClick() {
    this.fetchPhoto()
  }
  fetchPhoto() {
    this.photoService.getPhotos().subscribe(data => this.photoUrl = data);
  }
  ngOnInit(): void {
  }

}
