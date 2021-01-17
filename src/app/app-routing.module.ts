import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutUsComponent } from './_about-us/about-us/about-us.component';
import { ContactUsComponent } from './_contact-us/contact-us/contact-us.component';
import { DonationComponent } from './_donation/donation/donation.component';
import { EventComponent } from './_event/event/event.component';
import { HomeComponent } from './_home/home/home.component';
import { OurServicesComponent } from './_our-services/our-services/our-services.component';
import { VolunteerComponent } from './_volunteer/volunteer/volunteer.component';
import { WayToDonateComponent } from './_way-toDonate/way-to-donate/way-to-donate.component';

const routes: Routes = [{path: '', component: HomeComponent},{path: 'home', component: HomeComponent},{path: 'contact-us', component:ContactUsComponent},{path: 'event', component: EventComponent},{path: 'our-services', component: OurServicesComponent},{path: 'volunteer', component: VolunteerComponent},{path: 'about-us', component: AboutUsComponent},{path:'to-give',component: WayToDonateComponent},{path:'donate',component:DonationComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
