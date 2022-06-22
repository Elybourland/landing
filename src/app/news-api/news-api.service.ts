import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  private url = 'https://newsapi.org/v2/top-headlines';
  private pageSize = 10;
  private apiKey = 'b0a130e435f74200bb51c9bf2dada3cf';
  private country = 'us';

  constructor() { }
}
