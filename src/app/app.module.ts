import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { NgForm, FormsModule } from '@angular/forms';
import { DataTableModule } from 'angular-4-data-table';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductFormComponent } from './admin-product-form/admin-product-form.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';

import { environment } from '../environments/environment';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { UserService } from './services/user.service';
import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { CategoryService } from './services/category.service';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'login', component: LoginComponent},

  {path: 'products', component: ProductsComponent, canActivate: [AuthGuard] },
  {path: 'shopping-cart', component: ShoppingCartComponent, canActivate: [AuthGuard] },
  {path: 'checkout', component: CheckOutComponent, canActivate: [AuthGuard] },
  {path: 'my-orders', component: MyOrdersComponent, canActivate: [AuthGuard] },
  {path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuard] },

  {path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuard, AdminAuthGuard ]},
  {path: 'admin/products/new', component: AdminProductFormComponent, canActivate: [AuthGuard, AdminAuthGuard ]},
  {path: 'admin/products/:id', component: AdminProductFormComponent, canActivate: [AuthGuard, AdminAuthGuard ]},
  {path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuard, AdminAuthGuard ]}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShoppingCartComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    AdminProductFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    DataTableModule,
    MatCheckboxModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    NgbModule.forRoot()
  ],
  providers: [
    AuthService,
    AuthGuard,
    AdminAuthGuard,
    UserService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
