import { Injectable } from '@angular/core';
import {FormBuilderApiService} from "../../common-services/api-services/form-builder-api.service";

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {

  constructor(
    private formBuilderApi: FormBuilderApiService
  ) { }

  getForms() {
    return this.formBuilderApi.getForms();
  }

  getForm(id: string) {
    return this.formBuilderApi.getForm(id);
  }

  saveForm(data: any) {
    return this.formBuilderApi.saveForm(data);
  }

  updateForm(id: string, data: any) {
    return this.formBuilderApi.updateForm(id, data);
  }
}
