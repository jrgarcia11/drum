import { Component } from '@angular/core';
import { SupabaseService} from './supabase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SupabaseService]
})
export class AppComponent {
	constructor(private supabaseService:SupabaseService){}
	name = this.supabaseService.getName();
	title = 'drum';
}
