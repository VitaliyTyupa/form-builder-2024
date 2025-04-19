import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

const API_URL = 'https://tekamolo.info/api/form-builder';
@Injectable({
  providedIn: 'root'
})
export class FormBuilderApiService {

  constructor(
    private http: HttpClient
  ) { }

  getForms() {
    return this.http.get(`${API_URL}/all-forms`);
  }

  getForm(id: string) {
    return this.http.get(`${API_URL}/form/${id}`);
  }

  saveForm(data: any) {
    return this.http.post(`${API_URL}/form`, data);
  }

  updateForm(id: string, data: any) {
    return this.http.put(`${API_URL}/form/${id}`, data);
  }
}
