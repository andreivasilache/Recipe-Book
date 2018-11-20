import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {

  registerErrorMessage: string;

  constructor(private auth: AuthService) {
    this.auth.getRegisterErrors().subscribe(
      (error) => this.registerErrorMessage = error
    );
   }

  ngOnInit() {
    this.registerErrorMessage = '';
  }

  ngOnDestroy() {
    this.registerErrorMessage = '';

  }

  onRegister(f: NgForm) {
    const email: string = f.value.email;
    const password: string = f.value.password;
    this.auth.signUpUser(email, password);

  }

}
