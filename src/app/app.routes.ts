import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'Characters',
        pathMatch: 'full',
        loadComponent: () => import('./app.component').then(m => m.AppComponent)

    },

    {
        path: "**",
        pathMatch: 'full',
        redirectTo: 'Characters'
    }
];
