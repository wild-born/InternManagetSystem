import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddDesignationDetailService {
  url = 'https://localhost:44364/api/DesignationDetails';
constructor(private http:HttpClient) { }
savedetails(inputdata:any){
  return this.http.post(this.url,inputdata)
}
}
