import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddApplyLeaveService {
  url = 'https://localhost:44364/api/RequestLeaves';

constructor(private http:HttpClient) { }
savealldetails(inputdata:any){
  return this.http.post(this.url,inputdata)
}
}
