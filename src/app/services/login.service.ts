import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpService: HttpService,
    private router: Router,
    private storageService: StorageService
  ) { }

  adminLogin(postData: any): Observable<any>{
    return this.httpService.post('/auth/admin-login', postData);
  }

  studentLogin(postData: any): Observable<any>{
    return this.httpService.post('/auth/student-login', postData);
  }

  logout(){
    //this.storageService.clear();
    this.storageService.removeItem('userData').then(res =>{
      this.router.navigate(['']);
      localStorage.removeItem('token');
    });
  }
  
}
