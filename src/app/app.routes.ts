import { Routes } from '@angular/router';
import { ErorrPage } from './Modules/front/Pages/erorr-page/erorr-page';

export const routes: Routes = [
    {
        path: "",
        loadChildren: () => import("./Modules/front/front-module").then(m => m.FrontModule)
    },
    {
        path: "admin",
        loadChildren: () => import("./Modules/admin/admin-module").then(m => m.AdminModule)
    },
    {
        path: "**",
        component: ErorrPage
    }
];
