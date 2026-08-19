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
import { adminGuard } from '../../RouteGuards/admin-guard';
import { superAdminGuard } from '../../RouteGuards/super-admin-guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [adminGuard],
    component: AdminHomePage
  },
  {
    path: 'service',
    canActivate: [adminGuard],
    component: AdminServicePage
  },
  {
    path: 'service/create',
    canActivate: [adminGuard],
    component: AdminCreateServicePage
  },
  {
    path: 'service/update',
    canActivate: [adminGuard],
    component: AdminUpdateServicePage
  },
  {
    path: 'package',
    canActivate: [adminGuard],
    component: AdminPackagePage
  },
  {
    path: 'package/create',
    canActivate: [adminGuard],
    component: AdminCreatePackagePage
  },
  {
    path: 'package/update',
    canActivate: [adminGuard],
    component: AdminUpdatePackagePage
  },
  {
    path: 'doctor',
    canActivate: [adminGuard],
    component: AdminDoctorPage
  },
  {
    path: 'doctor/create',
    canActivate: [adminGuard],
    component: AdminCreateDoctorPage
  },
  {
    path: 'doctor/update',
    canActivate: [adminGuard],
    component: AdminUpdateDoctorPage
  },
  {
    path: 'department',
    canActivate: [adminGuard],
    component: AdminDepartmentPage
  },
  {
    path: 'department/create',
    canActivate: [adminGuard],
    component: AdminCreateDepartmentPage
  },
  {
    path: 'department/update',
    canActivate: [adminGuard],
    component: AdminUpdateDepartmentPage
  },
  {
    path: 'user',
    canActivate: [superAdminGuard],
    component: AdminUser
  },
  {
    path: 'user/create',
    canActivate: [superAdminGuard],
    component: AdminCreateUser
  },
  {
    path: 'user/update',
    canActivate: [superAdminGuard],
    component: AdminUpdateUser
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
