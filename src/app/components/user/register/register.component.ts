import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public username: string = '';
  public password: string = '';
  public confirmPassword: string = '';
  public errorMessage: string = '';

  constructor(private router: Router, private userService: UserService ){}

  public async onRegister(event: any) {
    const user = await this.userService.register({
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
        this.router.navigate(['/user-profile']);
      },
      error: (error) => {
        this.errorMessage = error.error.message;
      },
    });
  }
}
