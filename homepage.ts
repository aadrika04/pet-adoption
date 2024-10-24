import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  navigateTo(category: string) {
    this.router.navigateByUrl(`/${category}`);
  }

  signIn() {
    // Logic to handle user sign-in
    console.log('Sign In');
  }
}
