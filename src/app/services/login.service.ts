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

  adminLogout(){
    //this.storageService.clear();
    this.storageService.removeItem('adminData').then(res =>{
      this.router.navigate(['']);
    });
  }

  studentLogout(){
    //this.storageService.clear();
    this.storageService.removeItem('studentData').then(res =>{
      this.router.navigate(['']);
    });
  }

  
}
