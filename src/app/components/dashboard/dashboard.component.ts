import { AdvertisementService } from 'src/app/services/advertisement.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Advertisement } from '../models/advertisement';
import { UserService } from 'src/app/services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public myAdvertisements: Array<Advertisement> = [];
  public currentUser?: User;

  constructor(private router: Router, private advertisementService: AdvertisementService, private userService: UserService) {}

  ngOnInit() {
    this.load();
  }

  async load() {
    const adResponse = await this.advertisementService.fetchAll();
    adResponse.subscribe({
      next: async (data: any) => {
        this.myAdvertisements = data;
      },
      error: (error) => { },
    });

    const userResponse = await this.userService.getCurrentUser();
    userResponse.subscribe({
      next: async (data: any) => {
        this.currentUser = data;
      },
      error: (error) => { },
    });
  }

  public async logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    this.router.navigate(['/']);
  }

  public async deleteAccount() {
    alert('Account deletion in progress');
  }
}
