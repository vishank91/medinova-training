import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './Pages/home-page/home-page';
import { AboutPage } from './Pages/about-page/about-page';
import { ServicePage } from './Pages/service-page/service-page';
import { AppointmentPage } from './Pages/appointment-page/appointment-page';
import { TestimonialPage } from './Pages/testimonial-page/testimonial-page';
import { PackagePage } from './Pages/package-page/package-page';
import { ContactUsPage } from './Pages/contact-us-page/contact-us-page';
import { DoctorPage } from './Pages/doctor-page/doctor-page';

const routes: Routes = [
  {
    path: "",
    component: HomePage
  },
  {
    path: "about",
    component: AboutPage
  },
  {
    path: "service",
    component: ServicePage
  },
  {
    path: "appointment",
    component: AppointmentPage
  },
  {
    path: "testimonial",
    component: TestimonialPage
  },
  {
    path: "package",
    component: PackagePage
  },
  {
    path: "contactus",
    component: ContactUsPage
  },
  {
    path: "doctor",
    component: DoctorPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrontRoutingModule { }
