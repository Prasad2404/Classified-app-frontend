import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { HeaderComponent } from './components/common/header/header.component';
import { HomeComponent } from './components/common/home/home.component';
import { RegisterComponent } from './components/user/register/register.component';
import { UserloginComponent } from './components/user/userlogin/userlogin.component';
import { UserService } from './services/user.service';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { AdvertisementService } from './services/advertisement.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AdvertisementsComponent } from './components/advertisements/advertisements.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    UserloginComponent,
    RegisterComponent,
    AddListingComponent,
    DashboardComponent,
    AboutUsComponent,
    AdvertisementsComponent,
    UserProfileComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [UserService, AdvertisementService],
  bootstrap: [AppComponent],
})
export class AppModule {}
