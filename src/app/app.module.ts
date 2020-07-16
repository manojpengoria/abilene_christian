import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./core/header/header.component";
import { FooterComponent } from "./core/footer/footer.component";
import { HomeComponent } from "./modules/home/home.component";
import { BannerComponent } from "./modules/banner/banner.component";
import { AdvertisementComponent } from "./modules/advertisement/advertisement.component";

import { CarouselModule } from "ngx-owl-carousel-o";
import { ImgSliderComponent } from "./modules/img-slider/img-slider.component";
import { ProductDetailComponent } from './modules/product-detail/product-detail.component';
import { CartListComponent } from './modules/cart/cart-list/cart-list.component';
import { CartOrderSummeryComponent } from './modules/cart/cart-order-summery/cart-order-summery.component';
import { CartComponent } from './modules/cart/cart.component';
import { ProductSuggestionComponent } from './modules/product-suggestion/product-suggestion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BannerComponent,
    AdvertisementComponent,
    ImgSliderComponent,
    ProductDetailComponent,
    CartListComponent,
    CartOrderSummeryComponent,
    CartComponent,
    ProductSuggestionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
