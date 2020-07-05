import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { constants } from 'buffer';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  token = 'z4RUn3fD_05hgZv1sr6siA';

  constructor(private http: HttpClient) {}

  post(serviceName: string, data: any){

    const headers = new HttpHeaders();  
    const options = { headers: headers , withCredentials: false};
    const url = environment.apiUrl + serviceName;
        return this.http.post(url, data, options);
  }

  get(serviceName: string){
    const headers = new HttpHeaders();
    
    const options = { headers: headers};
    
    const url = environment.apiUrl + serviceName;
    return this.http.get(url, options);
  }
  

  getWithToken(serviceName: string){
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token,
    });
    const options = { headers: headers };
    const url = environment.apiUrl + serviceName; 
    return this.http.get(url, options);
  }



  postWithToken(serviceName: string, data: any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token,
  });    
    const options = { headers: headers};
    const url = environment.apiUrl + serviceName; 
    return this.http.post(url, data, options);
  }

  postWithTokenEmpty(serviceName: string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token,
  });    
    const options = { headers: headers};
    const url = environment.apiUrl + serviceName; 
    return this.http.post(url, {data: '1'}, options);
  }

  deleteWithToken(serviceName: string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token,
    });
    const options = { headers: headers, body:{}};
    const url = environment.apiUrl + serviceName; 
    return this.http.delete(url, options);
  }
  
}
