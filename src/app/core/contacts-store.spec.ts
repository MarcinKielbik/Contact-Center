import { TestBed } from '@angular/core/testing';

import { ContactsStore } from './contacts-store';

describe('ContactsStore', () => {
  let service: ContactsStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactsStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
