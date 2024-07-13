import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { RecoverComponent } from "./recover/recover.component";
import { AuthComponent } from "./auth.component";

export const authRoutes: Routes = [
    {
        path: 'auth',
        component: AuthComponent,
        pathMatch: 'full',
        children: [
            // {
            //     path: '',
            //     redirectTo: 'login',
            //     pathMatch: 'full'
            // },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            },
            {
                path: 'forgot-password',
                component: RecoverComponent
            },
            {
                path: '**',
                redirectTo: 'login'
            }
        ]
    }
];