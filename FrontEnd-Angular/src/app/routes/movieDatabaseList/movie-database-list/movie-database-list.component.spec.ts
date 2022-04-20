import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDatabaseListComponent } from './movie-database-list.component';

describe('MovieDatabaseListComponent', () => {
  let component: MovieDatabaseListComponent;
  let fixture: ComponentFixture<MovieDatabaseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDatabaseListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDatabaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
