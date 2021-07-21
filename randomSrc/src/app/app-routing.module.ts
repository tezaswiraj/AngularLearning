import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { CheckoutComponent } from './checkout/checkout.component';
import { RandomComponent } from './random/random.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {path: 'random', component:RandomComponent},
  {path: 'checkout', component:CheckoutComponent},
  {path: 'signin', component:SigninComponent},
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
