import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterOutlet } from '@angular/router';
import { DroomslistComponent } from './droomslist/droomslist.component';
import { SiteContactComponent } from './site-contact/site-contact.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'rooms', component: DroomslistComponent },
	{ path: 'schedule', component: CalendarComponent },
	{ path: 'site-contact', component: SiteContactComponent },
	{ path: 'faq', component: FaqComponent },
	{ path: 'profile', component: ProfileComponent },
	{ path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
