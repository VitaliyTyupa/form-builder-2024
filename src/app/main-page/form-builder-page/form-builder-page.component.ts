import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {FormioModule} from "@formio/angular";
import {Formio} from "formiojs";
import {NgClass} from "@angular/common";
import {FormBuilderService} from "../services/form-builder.service";

@Component({
  selector: 'app-form-builder-page',
  standalone: true,
  imports: [
    FormsModule,
    FormioModule,
    ReactiveFormsModule,
    NgClass,
  ],
  templateUrl: './form-builder-page.component.html',
  styleUrl: './form-builder-page.component.scss'
})
export class FormBuilderPageComponent implements OnInit {

  @ViewChild('json') jsonElement?: ElementRef;
  public form = {
    id: null,
    metadata: { components: []},
    name: '',
  };
  newFormName = new FormControl('', Validators.required);

  constructor(
    private formBuilderService: FormBuilderService
  ) { }

  ngOnInit(): void {
    Formio.setBaseUrl(location.origin);

  }

  onChangeForm(event: any): void {
    if (this.jsonElement) {
      this.jsonElement.nativeElement.innerHTML = '';
      this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(event.form, null, 4)));
    }
  }

  saveForm(form: any): void {
    this.newFormName.markAsTouched();
    if (this.newFormName.invalid || !form?.metadata) return;
    form.name = this.newFormName.value;
    if (form.id) {
      this.formBuilderService.updateForm(form.id, form).subscribe((res) => {
        console.log(res);
      });
    } else {
      this.formBuilderService.saveForm(form).subscribe((res) => {
        console.log(res);
      });
    }
  }

  clearForm(): void {
    this.form = {
      id: null,
      metadata: { components: []},
      name: '',
    };
    if(this.jsonElement) {
      this.jsonElement.nativeElement.innerHTML = '';
    }
  }


  deleteForm(): void {
    console.log('delete form');
  }

  selectForm(form: any): void {
    this.form = form;
    this.onChangeForm(form.metadata);
  }
}
