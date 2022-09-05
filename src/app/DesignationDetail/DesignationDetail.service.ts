import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignationDetailService {


constructor(private http: HttpClient) { }
details(): Observable<any>{
  return this.http.get('https://localhost:44364/api/designationDetails');
}
editdata(id:number,itme:any):Observable<any>{
  return this.http.put(`https://localhost:44364/api/designationDetails/${id}`,itme);
}

deleteData(id:number|string):Observable<any>
{
  return this.http.delete(`https://localhost:44364/api/designationDetails/${id}`);
}


}
