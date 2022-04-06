import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CollectionService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http
      .get(
        'https://www.rijksmuseum.nl/api/nl/collection?key=ieMiAU7a'
      )
      .subscribe((data) => console.log(data));
  }
}
