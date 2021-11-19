import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  url = "http://localhost:3000/client";
  constructor(private http:HttpClient) { }

  getClientData(){
    // console.warn("some data");
    return this.http.get(this.url);
  }
  postClient(data:any){

    console.warn(data);
    return this.http.post(this.url,data);

  }
  updateClient(id: any,data: any)
  {
    return this.http.put(`${this.url}/${id}`,data);
  }
}
