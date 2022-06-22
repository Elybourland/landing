import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  private url = 'https://newsapi.org/v2/top-headlines';
  private pageSize = 10;
  private apiKey = 'b0a130e435f74200bb51c9bf2dada3cf';
  private country = 'us';

  pagesInput: Subject<number>;
  pagesOutput: Observable<any>;
  numberOfPages: Observable<number>;

  constructor() {
    this.pagesInput = new Subject();
    this.pagesOutput = this.pagesInput.pipe(

    );
   }
}
