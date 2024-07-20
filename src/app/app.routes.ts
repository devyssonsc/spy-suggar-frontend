import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { StatsComponent } from './pages/stats/stats.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'stats',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: 'profile',
        component: ProfilePageComponent,
    },
    {
        path: 'stats',
        component: StatsComponent
    }
];