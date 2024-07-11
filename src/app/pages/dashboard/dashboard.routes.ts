import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

export const dashboardRoutes: Routes = [
    {
        path: 'pages',
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                component: HomeComponent
            }
        ]
    }
]