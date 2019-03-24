import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { HeaderBarComponent } from './components/main-layout/header-bar/header-bar.component';
import { FooterBarComponent } from './components/main-layout/footer-bar/footer-bar.component';
import { ComponentsComponent } from './components/components.component';
import { ShopsComponent } from './components/shops/shops.component';
import { ShopCategoryComponent } from './components/shops/shop-category/shop-category.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { SignInComponent } from './components/authenticate/sign-in/sign-in.component';
import { SignUpComponent } from './components/authenticate/sign-up/sign-up.component';
import { ContactComponent } from './components/contact/contact.component';
import { ShoppingCartComponent } from './components/shops/shopping-cart/shopping-cart.component';
import { BannerAreaComponent } from './components/main-layout/banner-area/banner-area.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NotFoundComponent,
        MainLayoutComponent,
        HeaderBarComponent,
        FooterBarComponent,
        ComponentsComponent,
        ShopsComponent,
        ShopCategoryComponent,
        BlogsComponent,
        SignInComponent,
        SignUpComponent,
        ContactComponent,
        ShoppingCartComponent,
        BannerAreaComponent,
    ],
    imports: [
        BrowserModule,
        AppRouting
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
