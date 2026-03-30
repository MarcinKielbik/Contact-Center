import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './components/navbar/navbar';
import { ContactList } from './components/contact-list/contact-list';
import { ContactDetails } from './components/contact-details/contact-details';
import { ContactMessage } from './components/contact-message/contact-message';
import { ContactDetail } from './components/contact-detail/contact-detail';

@NgModule({
  declarations: [App, Navbar, ContactList, ContactDetails, ContactMessage, ContactDetail],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration(withEventReplay())],
  bootstrap: [App],
})
export class AppModule {}
