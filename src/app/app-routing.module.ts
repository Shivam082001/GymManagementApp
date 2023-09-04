import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DisplayComponent as Attendances } from './attendances/display/display.component';
import { DisplayComponent as Payment } from './payments/display/display.component';
import { DisplayComponent as Trainer } from './trainers/display/display.component'
import { Payments } from './shared/payments.model';
import { RegComponent as AttendanceReg } from './attendances/reg/reg.component';
import { RegComponent as TrainerReg } from './trainers/reg/reg.component';
import { RegComponent as MemberReg } from './members/reg/reg.component';
import { RegComponent as ClassesReg } from './classes/reg/reg.component';
import { PricingComponent } from './pricing/pricing.component';
import { RegisterComponent } from './register/register.component';
import { DisplayComponent as Members } from './members/display/display.component';
import { DisplayComponent as Classes } from './classes/display/display.component';
import { DetailsComponent } from './details/details.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Role } from './models/role';
import { AdminComponent } from './admin/admin/admin.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {path:'attendance', component:Attendances},
  {path:'payment', component:Payment},
  {path:'trainer', component:Trainer},
  {path:'pricing', component:PricingComponent},
  {path:'register', component:RegisterComponent},
  {path:'member', component:Members},
  {path:'classes', component:Classes},
  {path:'attendanceReg', component:AttendanceReg},
  {path:'trainerReg', component:TrainerReg},
  {path:'details', component:DetailsComponent},
  {path:'memberReg', component:MemberReg},
  {path:'adminDashboard', component:AdminDashboardComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin] }},
  {path:'userDashboard', component:UserDashboardComponent, canActivate: [AuthGuard]},
  {path:'paymentGateway', component:PaymentGatewayComponent},
  {path:'profile', component:ProfileComponent},
  { path:'details', component: DetailsComponent, canActivate: [AuthGuard] },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
},
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule, CommonModule],
  exports: [RouterModule, BrowserModule, CommonModule]
})
export class AppRoutingModule { }