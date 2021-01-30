import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
   
  baseURL = 'http://localhost:3000';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  constructor(private http: HttpClient) { }

  getList(){
    var uri = this.baseURL+'/getEmpList';
     return this.http.get(uri);
  }

  createNewEmp(req:any){
    var uri = this.baseURL+'/create';
    return this.http.post(uri, req, this.httpOptions)
  }

  updateEmp(req:any){
    var uri = this.baseURL+'/update';
    return this.http.post(uri, req, this.httpOptions)
  }

  deleteEmp(req:any){
    var uri = this.baseURL+'/delete';
    return this.http.post(uri, req, this.httpOptions)
  }

}
