import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wsearch';

  constructor(private wikipedia: WikipediaService) {}
  pages:any = []
  onTerm(term:any) {
    this.wikipedia.search(term).subscribe((pages) =>{
      this.pages = pages
    })
    // console.log(result)
  }
}
