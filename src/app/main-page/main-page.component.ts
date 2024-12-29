import { Component } from '@angular/core';
import {FormBuilderPageComponent} from "./form-builder-page/form-builder-page.component";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    FormBuilderPageComponent,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
