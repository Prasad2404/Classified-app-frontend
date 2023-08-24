import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css'],
})
export class UserloginComponent {
  public username: string = '';
  public password: string = '';
  public errorMessage: string = '';

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {

  }

  public async onLogin(event: any) {
    const user = await this.userService.validateLogin({
      username: this.username,
      password: this.password,
    });
    user.subscribe({
      next: (data: any) => {
        this.username = '';
        this.password = '';
        this.errorMessage = '';
        localStorage.setItem('username', data.username);
        localStorage.setItem('password', data.password);
        this.router.navigate(['/']);
      },
      error: (error) => {
        this.errorMessage = error.error.message;
      },
    });
  }
}
