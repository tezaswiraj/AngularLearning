import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pluck } from 'rxjs/operators'

interface wikipediaResponse {
  query:{
    search:{
      title:string,
      snippet:string,
      pageid: number
    }[]
  }
}

// interface Car {
//   year:number;
//   color:string;
//   running:boolean;
//   make:{
//     name:string;
//     dateCreated:number;
//   }
// }

// const observable = new Observable<Car>((observer)=>{
//   observer.next({
//     year:2000,
//     color:'red',
//     running:false,
//     make:{
//       name:'chevvy',
//       dateCreated:1950
//     }
//   })
// }).pipe(
//   pluck('make')
// )

// observable.subscribe((value)=>console.log(value))

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private http: HttpClient) { }

  search(term:any) {
    return this.http.get<wikipediaResponse>('https://en.wikipedia.org/w/api.php',{
      params:{
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*'
      }
    }).pipe(pluck('query','search'))
  }
}
