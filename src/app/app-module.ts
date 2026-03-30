import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './components/navbar/navbar';
import { ContactList } from './components/contact-list/contact-list';
import { ContactMessage } from './components/contact-message/contact-message';
import { ContactDetail } from './components/contact-detail/contact-detail';
import { ContactDetailsStep } from './components/contact-details-step/contact-details-step';

@NgModule({
  declarations: [
    App,
    Navbar,
    ContactList,
    ContactMessage,
    ContactDetail,
    ContactDetailsStep,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration(withEventReplay())],
  bootstrap: [App],
})
export class AppModule {}
