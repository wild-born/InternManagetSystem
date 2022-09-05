import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditDesignationService {

constructor(private http: HttpClient) { }
UpdateData(id:any,body:any):Observable<any>{
  return this.http.put(`https://localhost:44364/api/designationDetails/${id}`,body);
}

getDataById(id:number):Observable<any>{
  return this.http.get(`https://localhost:44364/api/designationDetails/${id}`);
}
}

