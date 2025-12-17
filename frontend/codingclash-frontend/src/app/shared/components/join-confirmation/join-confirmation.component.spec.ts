import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinConfirmationComponent } from './join-confirmation.component';

describe('JoinConfirmationComponent', () => {
  let component: JoinConfirmationComponent;
  let fixture: ComponentFixture<JoinConfirmationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JoinConfirmationComponent]
    });
    fixture = TestBed.createComponent(JoinConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
