import { Component, OnInit } from '@angular/core';
import { CollectionService } from './collection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'muse';

  constructor(public collection: CollectionService) {}

  ngOnInit(): void {
    this.collection.get();
  }
}
