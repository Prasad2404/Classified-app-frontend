import { Component } from '@angular/core';
import { Category } from '../models/category';
import { Advertisement } from '../models/advertisement';
import { AdvertisementService } from 'src/app/services/advertisement.service';
import { UserService } from 'src/app/services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css'],
})
export class AddListingComponent {
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

  public advertisement: Advertisement = {
    id: '',
    category: undefined,
    location: '',
    price: 0,
    description: '',
    title: '',
    status: true,
    postDateTime: '',
  };

  constructor(private service: AdvertisementService, private userService: UserService) {}

  public async onCreateListing(event: any) {
    const userResponse = await this.userService.getCurrentUser();
    userResponse.subscribe({
      next: async (data: any) => {
        this.advertisement.user = data;
        (await this.service.createListing(this.advertisement)).subscribe({
          next: (data: any) => {

          },
          error: (error) => {
          },
        });
      },
      error: (error) => {
      },
    });



  }
  public onCategoryChange(event: any) {
    const category = this.categories.find(c => c.id == event.target.value);
    this.advertisement.category = category;
  }
}
