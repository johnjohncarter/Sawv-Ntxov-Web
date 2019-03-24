
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';
import { ComponentsComponent } from './components/components.component';
import { SignInComponent } from './components/authenticate/sign-in/sign-in.component';
import { ShopCategoryComponent } from './components/shops/shop-category/shop-category.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ContactComponent } from './components/contact/contact.component';
import { ShoppingCartComponent } from './components/shops/shopping-cart/shopping-cart.component';

const AppRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: '',
        component: ComponentsComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'shops', component: ShopCategoryComponent },
            { path: 'shopping-cart', component: ShoppingCartComponent },
            { path: 'blog', component: BlogsComponent },
            { path: 'contact', component: ContactComponent },
            { path: 'sign-in', component: SignInComponent },
        ],
    },
    { path: '**', component: NotFoundComponent },
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
