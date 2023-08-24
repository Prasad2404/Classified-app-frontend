import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  public name: string = '';
  public password: string = '';
  public email: string ='';
  public gender: string ='';
  public mobile: any ='';
  public address: string ='';
  public city: string ='';
  public state: string ='';
  public pincode: any ='';
  public country: string ='';

  constructor(private router: Router, private userService: UserService ){}

  public async onProfileUpdate(event: any) {

    console.log(event.value)
    const user = await this.userService.register({
      username: this.name,
      password: this.password,
      email: this.email,
      gender: this.gender,
      mobile: this.mobile,
      address: this.address,
      city: this.city,
      state: this.state,
      pincode: this.pincode,
      country: this.country,
    });
    user.subscribe({
      next: (data: any) => {
        this.name = '';
        this.password = '';
        this.email = '';
        this.gender = '';
        this.mobile = '';
        this.address = '';
        this.city = '';
        this.state = '';
        this.pincode = '';
        this.country = '';
        
        localStorage.setItem('name', data.name);
        localStorage.setItem('password', data.password);
        localStorage.setItem('email', data.email);
        localStorage.setItem('gender', data.gender);
        localStorage.setItem('mobile', data.mobile);
        localStorage.setItem('address', data.address);
        localStorage.setItem('city', data.city);
        localStorage.setItem('state', data.state);
        localStorage.setItem('pincode', data.pincode);
        localStorage.setItem('country', data.country);
        this.router.navigate(['/home']);
      },
    
    });
}

}
