import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit, OnDestroy {

  errorMessage: string;


  constructor(private auth: AuthService) {
    this.auth.getLoginErrors().subscribe(
      (error) => this.errorMessage = error
    );
  }

  ngOnInit() {
    this.errorMessage = '';
  }

  ngOnDestroy() {
    this.errorMessage = '';
  }


  onLogIn(form: NgForm) {
    const email: string = form.value.email;
    const password: string = form.value.password;
    this.auth.signInUser(email, password );
 }

}
