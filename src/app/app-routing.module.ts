import { SignupComponent } from './signup/signup.component';
import { ReservationComponent } from './reservation/reservation.component';
import { GoodsComponent } from './goods/goods.component';
import { NewsComponent } from './news/news.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { MenuFoodComponent } from './menu-food/menu-food.component';
import { MenuSweetsComponent } from './menu-sweets/menu-sweets.component';
import { MenuDrinksComponent } from './menu-drinks/menu-drinks.component';
import { MenuLatteComponent } from './menu-latte/menu-latte.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SpgoodsComponent } from './spgoods/spgoods.component';
import { FaqComponent } from './faq/faq.component';
import { StartComponent } from './start/start.component';
import { DashDrinksComponent } from './dash-drinks/dash-drinks.component';
import { DashFaqComponent } from './dash-faq/dash-faq.component';
import { DashFoodComponent } from './dash-food/dash-food.component';
import { DashGoodsComponent } from './dash-goods/dash-goods.component';
import { DashLatteComponent } from './dash-latte/dash-latte.component';
import { DashSpgoodsComponent } from './dash-spgoods/dash-spgoods.component';
import { DashSweetsComponent } from './dash-sweets/dash-sweets.component';
import { LoginComponent } from './login/login.component';
import { DashNewsComponent } from './dash-news/dash-news.component';


const routes: Routes = [
  { path: '', component: StartComponent, pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'menu-food', component: MenuFoodComponent },
  { path: 'menu-sweets', component: MenuSweetsComponent },
  { path: 'menu-drinks', component: MenuDrinksComponent },
  { path: 'menu-latte', component: MenuLatteComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dash-drinks', component: DashDrinksComponent },
  { path: 'dash-faq', component: DashFaqComponent },
  { path: 'dash-food', component: DashFoodComponent },
  { path: 'dash-goods', component: DashGoodsComponent },
  { path: 'dash-latte', component: DashLatteComponent },
  { path: 'dash-spgoods', component: DashSpgoodsComponent },
  { path: 'dash-sweets', component: DashSweetsComponent },
  { path: 'dash-news', component: DashNewsComponent },
  { path: 'news', component: NewsComponent},
  { path: 'goods', component: GoodsComponent},
  { path: 'spgoods', component: SpgoodsComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'start', component: StartComponent},
  { path: 'login', component: LoginComponent},
  { path: 'start', component: StartComponent},
  { path: 'reservation', component: LoginComponent},
  { path: 'reservation-', component: ReservationComponent},
  { path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MenuComponent, MenuFoodComponent, MenuSweetsComponent, MenuDrinksComponent, MenuLatteComponent
, DashboardComponent, NewsComponent, GoodsComponent, SpgoodsComponent, FaqComponent, NewsComponent, StartComponent, DashNewsComponent,
SignupComponent];

