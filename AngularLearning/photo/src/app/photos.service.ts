import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators'

interface unsplashResponse {
  urls: {
    regular:string;
  }
}
@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

  getPhotos() {
    return this.http.get<unsplashResponse>('https://api.unsplash.com/photos/random',{
      headers:{
        Authorization: 'Client-ID 6klKxXg4RvCx_QMHT9e9evfNjobcRodGotCucSv2sj8'
      }
    }).pipe(pluck('urls','regular'))
  }
}
