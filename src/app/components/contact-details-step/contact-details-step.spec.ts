import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDetailsStep } from './contact-details-step';

describe('ContactDetailsStep', () => {
  let component: ContactDetailsStep;
  let fixture: ComponentFixture<ContactDetailsStep>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactDetailsStep],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactDetailsStep);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
