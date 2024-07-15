import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ViewComponent } from './view/view.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  // http://localhost:4200/
  { path:"",component:HomeComponent},
  // http://localhost:4200/register
  { path:'register',component:RegisterComponent},
  // http://localhost:4200/login
  { path:'login',component:LoginComponent},
  // http://localhost:4200/10/view
  { path:':id/view',component:ViewComponent},
  // http://localhost:4200/wishlist
  { path:'wishlist',component:WishlistComponent},
  // http://localhost:4200/cart
  { path:'cart',component:CartComponent},
  // http://localhost:4200/checkout
  { path:'checkout',component:CheckoutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
