import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DashboardComponent } from "./dashboard.component";

export const dashboardRoutes: Routes = [
    {
        path: 'pages',
        component: DashboardComponent,
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