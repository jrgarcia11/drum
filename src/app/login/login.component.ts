import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../supabase.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
	loginTitle='Sign Up';
	option='Login';
	signup=true;
	sent=false;
	wrong=false;

	constructor(private backend: SupabaseService, private router: Router) { }
	ngOnInit(): void {}

	flip(): void{
		this.signup = !this.signup;
		var temp = this.loginTitle;
		this.loginTitle = this.option;
		this.option = temp;
	}
	onSubmit(f: NgForm){
		console.log(f.value);
		if(this.signup){
			this.backend.signup(f.value.email, f.value.pass);
			this.sent=true;
		}
		else{
			this.backend.login(f.value.email, f.value.pass);
			this.router.navigate(['/profile']);
		}
	}
}
