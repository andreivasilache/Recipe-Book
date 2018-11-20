import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {  Subject } from 'rxjs';

@Injectable()

export class AuthService {

    logInErrorSubject = new Subject<string>();

    registerErrorSubject = new Subject<string>();


    token: string;

    constructor(private router: Router) {}

    signUpUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(
                error => this.registerErrorSubject.next(error)
            );
    }

    signInUser(email: string, password: string ) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                response => {
                     this.router.navigate(['/recipe']);

                     console.log(response);

                    firebase.auth().currentUser.getIdToken()
                    .then(
                        (token: string) => this.token = token
                    );
                }
            )
            .catch(
                error => this.logInErrorSubject.next(error)
            );
    }

    getToken() {
        firebase.auth().currentUser.getIdToken()
            .then(
                (token: string) => this.token = token
            );

        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }

    logOut() {
        firebase.auth().signOut();
        this.token = null;
    }

    // return login errors
    getLoginErrors(): Subject<string> {
        return this.logInErrorSubject;
    }

    // return register errors
    getRegisterErrors(): Subject<string> {
        return this.registerErrorSubject;
    }
}
