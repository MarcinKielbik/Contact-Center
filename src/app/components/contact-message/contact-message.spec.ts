import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMessage } from './contact-message';

describe('ContactMessage', () => {
  let component: ContactMessage;
  let fixture: ComponentFixture<ContactMessage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactMessage],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactMessage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
