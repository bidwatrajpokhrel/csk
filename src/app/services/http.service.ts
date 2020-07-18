import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { constants } from 'buffer';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  token = 'tZ_S1oAZykl3NtWcKSq_hw';

  constructor(private http: HttpClient, private storageService: StorageService) {
    this.init()
  }

  init(){
    this.storageService.get('token').then(res=>{
      this.token = res.access_token
    });
  }

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
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
    });
    const options = { headers: headers };
    const url = environment.apiUrl + serviceName; 
    return this.http.get(url, options);
  }



  postWithToken(serviceName: string, data: any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
  });    
    const options = { headers: headers};
    const url = environment.apiUrl + serviceName; 
    return this.http.post(url, data, options);
  }

  postWithTokenEmpty(serviceName: string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
  });    
    const options = { headers: headers};
    const url = environment.apiUrl + serviceName; 
    return this.http.post(url, {data: '1'}, options);
  }

  deleteWithToken(serviceName: string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
    });
    const options = { headers: headers, body:{}};
    const url = environment.apiUrl + serviceName; 
    return this.http.delete(url, options);
  }

  getToken(data:any) {
    const headers = new HttpHeaders(      
      {
        "Content-Type": "application/json",
    });
    let options = { headers: headers };
    return this.http.post('http://localhost:3000/api', data, options);
  }
  
}
