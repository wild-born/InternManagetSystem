import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

constructor(private http: HttpClient) { }
login(body: any): Observable<any>{
  return this.http.post('https://localhost:44364/api/InternDetails/'+body["mail"]+
  "/"+body["password"], body);
}

}
