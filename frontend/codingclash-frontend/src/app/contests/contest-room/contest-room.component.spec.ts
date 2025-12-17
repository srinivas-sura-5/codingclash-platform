import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestRoomComponent } from './contest-room.component';

describe('ContestRoomComponent', () => {
  let component: ContestRoomComponent;
  let fixture: ComponentFixture<ContestRoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContestRoomComponent]
    });
    fixture = TestBed.createComponent(ContestRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
