import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomePage } from './Pages/admin-home-page/admin-home-page';
import { AdminServicePage } from './Pages/Service/admin-service-page/admin-service-page';
import { AdminCreateServicePage } from './Pages/Service/admin-create-service-page/admin-create-service-page';
import { AdminUpdateServicePage } from './Pages/Service/admin-update-service-page/admin-update-service-page';
import { AdminPackagePage } from './Pages/Package/admin-package-page/admin-package-page';
import { AdminCreatePackagePage } from './Pages/Package/admin-create-package-page/admin-create-package-page';
import { AdminUpdatePackagePage } from './Pages/Package/admin-update-package-page/admin-update-package-page';
import { AdminDoctorPage } from './Pages/Doctor/admin-doctor-page/admin-doctor-page';
import { AdminCreateDoctorPage } from './Pages/Doctor/admin-create-doctor-page/admin-create-doctor-page';
import { AdminUpdateDoctorPage } from './Pages/Doctor/admin-update-doctor-page/admin-update-doctor-page';
import { AdminDepartmentPage } from './Pages/Department/admin-department-page/admin-department-page';
import { AdminCreateDepartmentPage } from './Pages/Department/admin-create-department-page/admin-create-department-page';
import { AdminUpdateDepartmentPage } from './Pages/Department/admin-update-department-page/admin-update-department-page';
import { AdminUser } from './Pages/User/admin-user/admin-user';
import { AdminCreateUser } from './Pages/User/admin-create-user/admin-create-user';
import { AdminUpdateUser } from './Pages/User/admin-update-user/admin-update-user';

const routes: Routes = [
  {
    path: '',
    component: AdminHomePage
  },
  {
    path: 'service',
    component: AdminServicePage
  },
  {
    path: 'service/create',
    component: AdminCreateServicePage
  },
  {
    path: 'service/update',
    component: AdminUpdateServicePage
  },
  {
    path: 'package',
    component: AdminPackagePage
  },
  {
    path: 'package/create',
    component: AdminCreatePackagePage
  },
  {
    path: 'package/update',
    component: AdminUpdatePackagePage
  },
  {
    path: 'doctor',
    component: AdminDoctorPage
  },
  {
    path: 'doctor/create',
    component: AdminCreateDoctorPage
  },
  {
    path: 'doctor/update',
    component: AdminUpdateDoctorPage
  },
  {
    path: 'department',
    component: AdminDepartmentPage
  },
  {
    path: 'department/create',
    component: AdminCreateDepartmentPage
  },
  {
    path: 'department/update',
    component: AdminUpdateDepartmentPage
  },
  {
    path: 'user',
    component: AdminUser
  },
  {
    path: 'user/create',
    component: AdminCreateUser
  },
  {
    path: 'user/update',
    component: AdminUpdateUser
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
