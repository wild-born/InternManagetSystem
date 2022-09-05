import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

constructor(private http: HttpClient) { }
SignUp(body: any): Observable<any>{
  return this.http.post('https://localhost:44364/api/InternDetails', body);
}
modify(body: any): Observable<any>{
  return this.http.post('https://localhost:44364/api/InternDetails', body);
}

}
