import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {

  constructor() {
  }

  ngOnInit(){
	const supabaseUrl = environment.SUPABASE_URL;
	const supabaseKey = environment.SUPABASE_KEY;
	const supabase = createClient(supabaseUrl, supabaseKey);
  }

  getName() {
	return 'Jade';
  }

  //asterisk needed for functions with 'await' keyword to signify generator
  /**async getuser() {
		let { user, error } = await supabase.auth.signIn({
  		email: 'jrenegarcia11@email.com'
	})
	//console.log('user: '+user);
  }*/
}
