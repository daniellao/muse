import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionGridListEntryComponent } from './collection-grid-list-entry.component';

describe('CollectionGridListEntryComponent', () => {
  let component: CollectionGridListEntryComponent;
  let fixture: ComponentFixture<CollectionGridListEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionGridListEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionGridListEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
