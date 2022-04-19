import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CollectionService {
  constructor(private http: HttpClient) {}

  terms = ['brits', 'vaas'];
  maker = '';
  sort = 'relevance';
  view = 'grid';
  
  private _key = 'ieMiAU7a';

  get() {
    return this.http
      .get(
        `https://www.rijksmuseum.nl/api/nl/collection?key=${this._key}&q=${this.terms}&involvedMaker=${this.maker}&s=${this.sort}`
      )
      .subscribe((data) => console.log(data));
  }
}
