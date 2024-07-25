import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
@Injectable({
  providedIn: 'root'
})
export class ServicingService {
  private apiUrl = 'https://example.com/api/submit-form';
  constructor(private http: HttpClient) { }
  hereTheList(){
    return [
      { name:'saravanan',age:23},
      { name:'muthu',age:21},
      { name:'mohan',age:21},
      { name:'ragul',age:23},
      { name:'mohan',age:21}
    ]
  }

  submitForm(formData: any): Observable<any> {
    return this.http.post(`${environment.url}/audit/controlTestingPdfFile`,formData);
  }
}
