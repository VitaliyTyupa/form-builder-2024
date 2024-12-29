import {Component, inject, OnInit} from '@angular/core';
import {FormioModule} from "@formio/angular";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {FormBuilderService} from "../services/form-builder.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-form-manager-page',
  standalone: true,
  imports: [
    FormioModule,
    NgForOf,
    NgIf,
    AsyncPipe,
    RouterLink,
  ],
  templateUrl: './form-manager-page.component.html',
  styleUrl: './form-manager-page.component.scss'
})
export class FormManagerPageComponent implements OnInit {
  formBuilderService = inject(FormBuilderService);
  formList: any = [];
  formData: any = null;

  ngOnInit(): void {
    this.getForms();
  }

  getForms(): void {
    console.log('getForm');
    this.formBuilderService.getForms().subscribe((res: any) => {
      console.log('getForm', res);
      this.formList = res;
    });
  }

  setForm(form: any): void {
    console.log('setForm', form);
    this.formBuilderService.getForm(form.id).subscribe({
      next: (res: any) => {
        console.log('setForm', res);
        if(res.metadata) {
          this.formData = res.metadata;
        }
      },
      error: (error: any) => {
        console.error('Error getting form:', error);
      }
    });
    this.formData = form;

  }

  onSubmit(event: any) {
    console.log('Submit', event);
  }
}
