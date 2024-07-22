import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { StatsComponent } from './pages/stats/stats.component';
import { RelatoriosComponent } from './pages/relatorios/relatorios.component';
import { NotificationsPageComponent } from './pages/notifications-page/notifications-page.component';

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
        component: StatsComponent,
    },
    {
        path: 'relatorios',
        component: RelatoriosComponent,
    },
    {
        path: 'notifications',
        component: NotificationsPageComponent,
    }
];