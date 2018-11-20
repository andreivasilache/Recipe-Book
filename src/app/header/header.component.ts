import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from 'selenium-webdriver/http';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService,
              private auth: AuthService,
              private rute: Router
              ) { }


  isAuthenticated() {
    return this.auth.isAuthenticated();
  }
  saveData() {
    this.dataStorageService.storeRecipes()
    .subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

    fetchData() {
      this.dataStorageService.getRecipes();
  }

  logOut() {
    this.auth.logOut();
    this.rute.navigate(['/recipe']);
  }
}
