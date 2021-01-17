import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AppComponent } from './app.component';
import { NavComponent } from './_nav/nav/nav.component';
import { FooterComponent } from './_footer/footer/footer.component';
import { HomeComponent } from './_home/home/home.component';
import { ContactUsComponent } from './_contact-us/contact-us/contact-us.component';
import { EventComponent } from './_event/event/event.component';
import { OurServicesComponent } from './_our-services/our-services/our-services.component';
import { VolunteerComponent } from './_volunteer/volunteer/volunteer.component';
import { AboutUsComponent } from './_about-us/about-us/about-us.component';
import { fas} from '@fortawesome/free-solid-svg-icons';
import { ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http';
import { WayToDonateComponent } from './_way-toDonate/way-to-donate/way-to-donate.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DonationComponent } from './_donation/donation/donation.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    ContactUsComponent,
    EventComponent,
    OurServicesComponent,
    VolunteerComponent,
    AboutUsComponent,
    WayToDonateComponent,
    DonationComponent,
    
  ],
  imports: [
    CarouselModule.forRoot(),
       BrowserAnimationsModule,
     AccordionModule.forRoot(),
     FontAwesomeModule ,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  } }
