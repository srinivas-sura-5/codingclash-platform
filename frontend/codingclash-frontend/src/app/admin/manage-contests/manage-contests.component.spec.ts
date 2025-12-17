import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageContestsComponent } from './manage-contests.component';

describe('ManageContestsComponent', () => {
  let component: ManageContestsComponent;
  let fixture: ComponentFixture<ManageContestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageContestsComponent]
    });
    fixture = TestBed.createComponent(ManageContestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
