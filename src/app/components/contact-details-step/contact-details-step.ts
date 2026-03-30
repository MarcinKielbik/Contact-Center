import { Component } from '@angular/core';
import { ContactsStore } from '../../core/contacts-store';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-details-step',
  standalone: false,
  templateUrl: './contact-details-step.html',
  styleUrl: './contact-details-step.scss',
})
export class ContactDetailsStep {

  submitted = false;

  form = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email]
    })
  });

  constructor(
    private store: ContactsStore,
    private router: Router
  ) {
    const draft = this.store.draft();

    this.form.patchValue({
      name: draft.name ?? '',
      email: draft.email ?? ''
    });
  }



  next() {
    this.submitted = true;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.store.setDetails(
      this.form.value.name!,
      this.form.value.email!
    );

    this.router.navigate(['/contacts/new/message']);
  }

  get name() {
    return this.form.get('name')!;
  }

  get email() {
    return this.form.get('email')!;
  }


}
