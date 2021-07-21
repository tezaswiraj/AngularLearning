import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  targetApiUrl: string = "https://jsonplaceholder.typicode.com/users"

  getUsers() {
    return this.httpClient.get(this.targetApiUrl)
  }
  postUsers() {
    
  }  

}
