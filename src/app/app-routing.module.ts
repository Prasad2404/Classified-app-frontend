import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/common/home/home.component';
import { UserloginComponent } from './components/user/userlogin/userlogin.component';
import { RegisterComponent } from './components/user/register/register.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AdvertisementsComponent } from './components/advertisements/advertisements.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';

const routes: Routes = [

  {'path':'', component:HomeComponent},
  {'path':'login', component:UserloginComponent},
  {'path':'register', component:RegisterComponent},
  {'path':'add-listing', component:AddListingComponent},
  {'path':'dashboard', component:DashboardComponent},
  {'path':'aboutus', component:AboutUsComponent},
  {'path':'advertisements', component:AdvertisementsComponent},
  {'path':'user-profile', component:UserProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
