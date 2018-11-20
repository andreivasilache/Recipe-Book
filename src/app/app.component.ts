import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = ' firstProject ';
// APIKEY
// AUTHDOMAIN
  ngOnInit() {
    firebase.initializeApp({
      apiKey: process.env.APIKEY,
      authDomain: process.env.AUTHDOMAIN,
    });
  }

}
