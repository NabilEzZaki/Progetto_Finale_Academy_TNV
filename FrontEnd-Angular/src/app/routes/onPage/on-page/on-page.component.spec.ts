import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnPageComponent } from './on-page.component';

describe('OnPageComponent', () => {
  let component: OnPageComponent;
  let fixture: ComponentFixture<OnPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
