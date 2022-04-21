import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionGridListComponent } from './collection-grid-list.component';

describe('CollectionGridListComponent', () => {
  let component: CollectionGridListComponent;
  let fixture: ComponentFixture<CollectionGridListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionGridListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionGridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
