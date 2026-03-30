import { computed, Injectable, signal } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactsStore {
  private _contacts = signal<Contact[]>([]);
  contacts = this._contacts.asReadonly();

  private _draft = signal<Partial<Contact>>({});
  draft = this._draft.asReadonly();

  search = signal('');

  filtered = computed(() => {
    const q = this.search().toLowerCase();

    return this._contacts().filter(c =>
      c.name.toLowerCase().includes(q) ||
      c.email.toLowerCase().includes(q)
    );
  });

  setDetails(name: string, email: string) {
    this._draft.update(d => ({ ...d, name, email }));
  }

  setMessage(message: string) {
    this._draft.update(d => ({ ...d, message }));
  }

  addContact() {
    const d = this._draft();

    const contact: Contact = {
      id: crypto.randomUUID(),
      name: d.name!,
      email: d.email!,
      message: d.message,
      createdAt: new Date()
    };

    this._contacts.update(list => [contact, ...list]);
    this._draft.set({});
  }

  getById(id: string) {
    return this._contacts().find(c => c.id === id);
  }
}
