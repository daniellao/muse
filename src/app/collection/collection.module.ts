import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionGridComponent } from './collection-grid/collection-grid.component';
import { CollectionListComponent } from './collection-list/collection-list.component';
import { ObjectCardComponent } from './object-card/object-card.component';
import { ObjectListEntryComponent } from './object-list-entry/object-list-entry.component';
import { CollectionGridListComponent } from './collection-grid-list/collection-grid-list.component';
import { CollectionGridListEntryComponent } from './collection-grid-list-entry/collection-grid-list-entry.component';

@NgModule({
  declarations: [
    CollectionGridComponent,
    CollectionListComponent,
    ObjectCardComponent,
    ObjectListEntryComponent,
    CollectionGridListComponent,
    CollectionGridListEntryComponent,
  ],
  imports: [CommonModule],
  exports: [
    CollectionGridComponent,
    CollectionListComponent,
    ObjectCardComponent,
    ObjectListEntryComponent,
    CollectionGridListComponent,
    CollectionGridListEntryComponent,
  ],
})
export class CollectionModule {}
