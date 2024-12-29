import { Routes } from '@angular/router';
import {MainPageComponent} from "./main-page/main-page.component";
import {MainRoutes} from "./main-page/main.routes";

export const routes: Routes = [
  {path: 'main', component: MainPageComponent, children: MainRoutes},
  {path: '', redirectTo: '/main', pathMatch: 'full'}
];
