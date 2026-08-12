import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing-module';
import { AdminSidebar } from './Componants/admin-sidebar/admin-sidebar';
import { AdminHomePage } from './Pages/admin-home-page/admin-home-page';
import { AdminServicePage } from './Pages/Service/admin-service-page/admin-service-page';
import { AdminCreateServicePage } from './Pages/Service/admin-create-service-page/admin-create-service-page';
import { AdminUpdateServicePage } from './Pages/Service/admin-update-service-page/admin-update-service-page';
import { AdminDoctorPage } from './Pages/Doctor/admin-doctor-page/admin-doctor-page';
import { AdminCreateDoctorPage } from './Pages/Doctor/admin-create-doctor-page/admin-create-doctor-page';
import { AdminUpdateDoctorPage } from './Pages/Doctor/admin-update-doctor-page/admin-update-doctor-page';
import { AdminPackagePage } from './Pages/Package/admin-package-page/admin-package-page';
import { AdminCreatePackagePage } from './Pages/Package/admin-create-package-page/admin-create-package-page';
import { AdminUpdatePackagePage } from './Pages/Package/admin-update-package-page/admin-update-package-page';
import { AdminDepartmentPage } from './Pages/Department/admin-department-page/admin-department-page';
import { AdminCreateDepartmentPage } from './Pages/Department/admin-create-department-page/admin-create-department-page';
import { AdminUpdateDepartmentPage } from './Pages/Department/admin-update-department-page/admin-update-department-page';
import { FrontModule } from '../front/front-module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminSidebar,
    AdminHomePage,
    AdminServicePage,
    AdminCreateServicePage,
    AdminUpdateServicePage,
    AdminDoctorPage,
    AdminCreateDoctorPage,
    AdminUpdateDoctorPage,
    AdminPackagePage,
    AdminCreatePackagePage,
    AdminUpdatePackagePage,
    AdminDepartmentPage,
    AdminCreateDepartmentPage,
    AdminUpdateDepartmentPage,
  ],
  imports: [CommonModule, AdminRoutingModule, FrontModule, ReactiveFormsModule],
})
export class AdminModule { }
