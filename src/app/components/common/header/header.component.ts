import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public isLoggedIn: boolean = false;

  constructor(private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  ngOnInit() {
    const username = localStorage.getItem('username');
    this.isLoggedIn = !!username;
  }

  public async logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    this.isLoggedIn = false;
    this.router.navigate(['/home']);
  }
}
