import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseURL = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  getList(){
    var uri = this.baseURL+'/getEmpList';
     return this.http.get(uri);

  }

}
