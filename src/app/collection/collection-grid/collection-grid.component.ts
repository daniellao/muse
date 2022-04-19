import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../collection.service';

@Component({
  selector: 'app-collection-grid',
  templateUrl: './collection-grid.component.html',
  styleUrls: ['./collection-grid.component.css']
})
export class CollectionGridComponent implements OnInit {

  constructor(public collection: CollectionService) { }

  ngOnInit(): void {
  }

}
