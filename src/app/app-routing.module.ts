import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdvertisementComponent } from "./modules/advertisement/advertisement.component";
import { HomeComponent } from "./modules/home/home.component";
import { ProductDetailComponent } from "./modules/product-detail/product-detail.component";
import { CartComponent } from './modules/cart/cart.component';

const routes: Routes = [
  { path: "ad", component: AdvertisementComponent },

  { path: "home", component: HomeComponent, },
  { path: "product", component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: "**", component: HomeComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
