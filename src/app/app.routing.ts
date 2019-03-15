
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';
import { ComponentsComponent } from './components/components.component';

const AppRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: '',
        component: ComponentsComponent,
        children: [
            { path: 'home', component: HomeComponent },
        ],
    },
    { path: '**', component: NotFoundComponent },
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
