import { Component } from '@angular/core';
import { ContactsStore } from '../../core/contacts-store';

@Component({
  selector: 'app-contact-list',
  standalone: false,
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.scss',
})
export class ContactList {
   constructor(
    public store: ContactsStore,
  ) {}
}
