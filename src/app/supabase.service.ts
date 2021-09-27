import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
	supabase:any;
	constructor() {
		const supabaseUrl = environment.SUPABASE_URL;
		const supabaseKey = environment.SUPABASE_KEY;
		this.supabase = createClient(supabaseUrl, supabaseKey);
	}
	async signup(_email:string, _pass:string): Promise<void>{
		let { user, error } = await this.supabase.auth.signUp({
			email: _email,
			password: _pass
		})
	}
	async login(_email:string, _pass:string): Promise<void>{
		let {user, error} = await this.supabase.auth.signIn({
			email: _email,
			pass: _pass
		})
	}
}
