import {Routes} from '@angular/router';
import {FormBuilderPageComponent} from "./form-builder-page/form-builder-page.component";
import {FormManagerPageComponent} from "./form-manager-page/form-manager-page.component";

export const MainRoutes = [
  {path: 'form-builder', component: FormBuilderPageComponent},
  {path: 'form-manager', component: FormManagerPageComponent},
];
