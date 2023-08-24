import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APP_URLS } from './appUrls';
import { Advertisement } from '../components/models/advertisement';

@Injectable()
export class AdvertisementService {
  constructor(private http: HttpClient) {}

  constructHttpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }

  async createListing(advertisement: Advertisement) {
    const createdAdvert = await this.http.post(
      APP_URLS.ADVERTISEMENT.CREATE,
      advertisement,
      this.constructHttpOptions()
    );
    return createdAdvert;
  }

  async fetchAll() {
    return this.http.get(APP_URLS.ADVERTISEMENT.CREATE, this.constructHttpOptions());;
  }
}
