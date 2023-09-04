import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegComponent as Attendance } from './attendances/reg/reg.component';
import { RegComponent as TrainerReg } from './trainers/reg/reg.component';
import { RegComponent as MemberReg } from './members/reg/reg.component';
import { RegComponent as PaymentReg } from './payments/reg/reg.component';
import { RegComponent as ClassesReg } from './classes/reg/reg.component';
import { DisplayComponent as Attendances } from './attendances/display/display.component';
import { DisplayComponent as Payment } from './payments/display/display.component';
import { DisplayComponent as Trainer } from './trainers/display/display.component';
import { DisplayComponent as Members } from './members/display/display.component';
import { DisplayComponent as Classes } from './classes/display/display.component';
import { DisplayComponent as Subscriptions } from './subscriptions/display/display.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { RegisterComponent } from './register/register.component';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DetailsComponent } from './details/details.component';
import { AdminComponent } from './admin/admin/admin.component';
import { JwtInterceptor } from './guards/jwt.interceptor';
import { ErrorInterceptor } from './guards/error.interceptor';
import { fakeBackendProvider } from './guards/fake-backend';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

import { RegComponent as SubscriptionReg } from './subscriptions/reg/reg.component';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    Attendance,
    Attendances,
    Payment,
    PaymentReg,
    Trainer,
    TrainerReg,
    Members,
    MemberReg,
    Classes,
    ClassesReg,
    Subscriptions,
    SubscriptionReg,
    LoginComponent,
    HomeComponent,
    PricingComponent,
    RegisterComponent,
    DetailsComponent,
    AdminComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    PaymentGatewayComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
