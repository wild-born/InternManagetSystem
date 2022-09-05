import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplyLeaveService {

constructor(private http: HttpClient) { }
Alldetails(): Observable<any>{
  return this.http.get('https://localhost:44364/api/RequestLeaves');
}

}
