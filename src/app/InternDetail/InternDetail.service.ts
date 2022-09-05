import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InternDetailService {

constructor(private http: HttpClient) { }


vdetails(): Observable<any>{
  return this.http.get('https://localhost:44364/api/InternDetails');
}
modifyall(id: number|string|undefined|null ,body:any):Observable<any>{
  return this.http.put(`https://localhost:44364/api/InternDetails/${id}`,body);
}
delete(id:number|string):Observable<any>
{
  return this.http.delete(`https://localhost:44364/api/InternDetails/${id}`);
}

}


