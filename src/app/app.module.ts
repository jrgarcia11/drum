import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DroomslistComponent } from './droomslist/droomslist.component';
import { SiteContactComponent } from './site-contact/site-contact.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DroomslistComponent,
    SiteContactComponent,
    CalendarComponent,
    FaqComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
