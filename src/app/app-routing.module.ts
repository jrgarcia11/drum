import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterOutlet } from '@angular/router';
import { DroomslistComponent } from './droomslist/droomslist.component';
import { SiteContactComponent } from './site-contact/site-contact.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
	{ path: 'rooms', component: DroomslistComponent },
	{ path: 'site-contact', component: SiteContactComponent },
	{ path: 'schedule', component: CalendarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
