import { LoginComponent } from './login/login.component';
import { DashSweetsComponent } from './dash-sweets/dash-sweets.component';
import { DashSpgoodsComponent } from './dash-spgoods/dash-spgoods.component';
import { DashNewsComponent } from './dash-news/dash-news.component';
import { DashLatteComponent } from './dash-latte/dash-latte.component';
import { DashGoodsComponent } from './dash-goods/dash-goods.component';
import { DashFoodComponent } from './dash-food/dash-food.component';
import { DashFaqComponent } from './dash-faq/dash-faq.component';
import { DashDrinksComponent } from './dash-drinks/dash-drinks.component';
import { MatExpansionModule, MatMenuModule, MatIconModule, MatToolbarModule, MatSidenavModule } from '@angular/material';
import { ItemService } from './item.service';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbComponent } from './navb/navb.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import { MatSelectModule, MatButtonModule } from '@angular/material';
import { GoodsComponent } from './goods/goods.component';
import { NewsComponent } from './news/news.component';
import { AccessComponent } from './access/access.component';
import { FooterComponent } from './footer/footer.component';
import { ReservationComponent } from './reservation/reservation.component';
import { StartComponent } from './start/start.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FileSelectDirective } from 'ng2-file-upload';
import { MenuFoodComponent } from './menu-food/menu-food.component';
import { MenuSweetsComponent } from './menu-sweets/menu-sweets.component';
import { MenuDrinksComponent } from './menu-drinks/menu-drinks.component';
import { MenuLatteComponent } from './menu-latte/menu-latte.component';
import { FaqComponent } from './faq/faq.component';
import { SpgoodsComponent } from './spgoods/spgoods.component';
import { SignupComponent } from './signup/signup.component';
import { SubnavComponent } from './subnav/subnav.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbComponent,
    MenuComponent,
    GoodsComponent,
    NewsComponent,
    AccessComponent,
    FooterComponent,
    ReservationComponent,
    StartComponent,
    DashboardComponent,
    FileSelectDirective,
    MenuFoodComponent,
    MenuSweetsComponent,
    MenuDrinksComponent,
    MenuLatteComponent,
    FaqComponent,
    SpgoodsComponent,
    DashDrinksComponent,
    DashFaqComponent,
    DashFoodComponent,
    DashGoodsComponent,
    DashLatteComponent,
    DashNewsComponent,
    DashSpgoodsComponent,
    DashSweetsComponent,
    LoginComponent,
    SignupComponent,
    SubnavComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatExpansionModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  providers: [ ItemService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
