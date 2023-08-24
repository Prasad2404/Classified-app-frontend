import { Component } from '@angular/core';
import { Advertisement } from '../../models/advertisement';
import { Router } from '@angular/router';
import { AdvertisementService } from 'src/app/services/advertisement.service';
import { UserService } from 'src/app/services/user.service';
import { Category } from '../../models/category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public myAdvertisements: Array<Advertisement> = [];

  public categories: Array<Category> = [
    {
      id: 1,
      name: 'Laptops',
    },
    {
      id: 2,
      name: 'Mobiles',
    },
    {
      id: 3,
      name: 'TVs',
    },
  ];

  constructor(private router: Router, private advertisementService: AdvertisementService) {}

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
  }

}
