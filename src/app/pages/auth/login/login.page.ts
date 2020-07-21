import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { StorageService } from 'src/app/services/storage.service';
import { AlertService } from 'src/app/services/alert.service';
import { ToastService } from 'src/app/services/toast.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  postData = {
    identification: '', //username for admin, email for students (for now)
    password: ''
  }

  userType: String;

  client_cred = {
    client_id: '',
    client_secret: ''
  }

  constructor(
    private loginService: LoginService,
    private alertService: AlertService,
    private toastService: ToastService,
    private storageService: StorageService,
    private httpService: HttpService,
    private router: Router
    ){}

  ngOnInit(){
  }

  adminLogin(){
    this.loginService.adminLogin(this.postData).subscribe((res: any)=>{
      this.client_cred.client_id = res.client_id;
      this.client_cred.client_secret = res.client_secret;
      if (res.message == "success"){
        this.httpService.getToken(this.client_cred).subscribe((r:any)=>{
          this.toastService.presentToast("Logged in as Admin");
          this.storageService.store("userData", res);
          localStorage.setItem('token', r.access_token);
          this.router.navigate(["/admin-menu/admission-info-table"]);
        }, error=>this.alertService.presentInvalidInputsAlert(error.error.message));
      }
    }, error =>{
      this.alertService.presentInvalidInputsAlert(error.error.message);
    });
  }
  
  studentLogin(){
    this.loginService.studentLogin(this.postData).subscribe((res: any)=>{
      this.client_cred.client_id = res.client_id;
      this.client_cred.client_secret = res.client_secret;
      if (res.message == "success"){
        this.httpService.getToken(this.client_cred).subscribe((r:any)=>{
          this.toastService.presentToast("Logged in as Student")
          localStorage.setItem('token', r.access_token);
          this.storageService.store("userData", res);
          this.router.navigate(["/student-menu"]);
        }, error=>this.alertService.presentInvalidInputsAlert(error.error.message));
      }
    }, error =>{
      this.alertService.presentInvalidInputsAlert(error.error.message);
   });
  }

  login(){
    if (this.userType == 'student') {
      this.studentLogin();
    } else if (this.userType == 'admin') {
      this.adminLogin();
    } else {
      this.alertService.presentInvalidInputsAlert("Please Select a user type");
    }
  }
  
}
