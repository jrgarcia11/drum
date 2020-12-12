import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroomslistComponent } from './droomslist.component';

describe('DroomslistComponent', () => {
  let component: DroomslistComponent;
  let fixture: ComponentFixture<DroomslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DroomslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DroomslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
