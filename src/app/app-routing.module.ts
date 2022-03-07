import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { CourseDecriptionComponent } from './course-decription/course-decription.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { WishlistComponent } from './wishlist/wishlist.component';


const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch:"full"},
  { path: 'courses', component: DashboardComponent, pathMatch:"full"},
  { path: 'courses/:id', component: CourseDecriptionComponent, pathMatch:"full"},
  { path: 'wishlist', component: WishlistComponent },
  { path: 'checkout', component: CheckoutComponent, pathMatch:"full"},
  { path: 'profile', component: ProfileComponent, pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
