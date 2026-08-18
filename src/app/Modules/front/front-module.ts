import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing-module';
import { Navbar } from './Components/navbar/navbar';
import { Footer } from './Components/footer/footer';
import { About } from './Components/about/about';
import { Service } from './Components/service/service';
import { Appointment } from './Components/appointment/appointment';
import { Package } from './Components/package/package';
import { Doctor } from './Components/doctor/doctor';
import { Search } from './Components/search/search';
import { Testimonial } from './Components/testimonial/testimonial';
import { HomePage } from './Pages/home-page/home-page';
import { AboutPage } from './Pages/about-page/about-page';
import { ServicePage } from './Pages/service-page/service-page';
import { PackagePage } from './Pages/package-page/package-page';
import { DoctorPage } from './Pages/doctor-page/doctor-page';
import { TestimonialPage } from './Pages/testimonial-page/testimonial-page';
import { AppointmentPage } from './Pages/appointment-page/appointment-page';
import { ContactUsPage } from './Pages/contact-us-page/contact-us-page';
import { ErorrPage } from './Pages/erorr-page/erorr-page';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { LoginPage } from './Pages/login-page/login-page';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    Navbar,
    Footer,
    About,
    Service,
    Appointment,
    Package,
    Doctor,
    Search,
    Testimonial,
    HomePage,
    AboutPage,
    ServicePage,
    PackagePage,
    DoctorPage,
    TestimonialPage,
    AppointmentPage,
    ContactUsPage,
    ErorrPage,
    LoginPage,
  ],
  imports: [CommonModule, FrontRoutingModule, RouterLink, RouterLinkActive, CarouselModule,ReactiveFormsModule],
  exports: [Navbar, Footer, ErorrPage],
})
export class FrontModule {}
