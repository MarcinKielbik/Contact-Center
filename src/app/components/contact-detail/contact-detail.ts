import { Component } from '@angular/core';
import { Contact } from '../../interfaces/contact';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsStore } from '../../core/contacts-store';

@Component({
  selector: 'app-contact-detail',
  standalone: false,
  templateUrl: './contact-detail.html',
  styleUrl: './contact-detail.scss',
})
export class ContactDetail {
  contact?: Contact;

  constructor(
    private route: ActivatedRoute,
    private store: ContactsStore,
    private router: Router
  ) {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      this.router.navigate(['/contacts']);
      return;
    }

    this.contact = this.store.getById(id);

    if (!this.contact) {
      this.router.navigate(['/contacts']);
    }
  }
}
