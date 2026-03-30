import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactsStore } from '../../core/contacts-store';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-message',
  standalone: false,
  templateUrl: './contact-message.html',
  styleUrl: './contact-message.scss',
})
export class ContactMessage {

  form = new FormGroup({
    message: new FormControl('', {
      nonNullable: true,
      validators: [Validators.maxLength(500)]
    })
  });

  constructor(
    private store: ContactsStore,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.form.patchValue({
      message: this.store.draft().message ?? ''
    });
  }

  get length(): number {
    return this.form.controls.message.value.length;
  }

  back() {
    this.store.setMessage(this.form.value.message ?? '');
    this.router.navigate(['/contacts/new/details']);
  }

  submit() {
    this.store.setMessage(this.form.value.message ?? '');
    this.store.addContact();

    this.snackBar.open('Contact created successfully!', 'Close', {
      duration: 3000
    });

    this.router.navigate(['/contacts']);
  }
}