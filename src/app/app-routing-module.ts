import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactList } from './components/contact-list/contact-list';
import { ContactDetail } from './components/contact-detail/contact-detail';
import { ContactMessage } from './components/contact-message/contact-message';
import { ContactDetailsStep } from './components/contact-details-step/contact-details-step';

const routes: Routes = [

  {
    path: 'contacts',
    children: [
      {
        path: '',
        component: ContactList
      },

      {
        path: 'new/details',
        component: ContactDetailsStep
      },
      {
        path: 'new/message',
        component: ContactMessage
      },
      {
        path: ':id',
        component: ContactDetail
      }
    ]
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
