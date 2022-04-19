import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectListEntryComponent } from './object-list-entry.component';

describe('ObjectListEntryComponent', () => {
  let component: ObjectListEntryComponent;
  let fixture: ComponentFixture<ObjectListEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectListEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectListEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
