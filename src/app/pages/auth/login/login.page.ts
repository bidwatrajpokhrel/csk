import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { StorageService } from 'src/app/services/storage.service';
import { AlertService } from 'src/app/services/alert.service';
import { ToastService } from 'src/app/services/toast.service';

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

  constructor(
    private loginService: LoginService,
    private alertService: AlertService,
    private toastService: ToastService,
    private storageService: StorageService,
    private router: Router
    ){}

  ngOnInit() {}

  adminLogin(){
    this.loginService.adminLogin(this.postData).subscribe((res: any)=>{
      console.log(res); //TODO: delete this line 
      if (res.message == "success"){
        this.toastService.presentToast("Logged in as Admin");
        this.storageService.store("adminData", res);
        this.router.navigate(["/admin-menu"]);
      }
    }, error =>{
      console.log(error.error); //TODO: delete this line 
      this.alertService.presentInvalidInputsAlert(error.error.message);
    });
  }
  
  studentLogin(){
    this.loginService.studentLogin(this.postData).subscribe((res: any)=>{
      console.log(res); //TODO: delete this line 
      if (res.message == "success"){
        this.toastService.presentToast("Logged in as Student")
        this.storageService.store("studentData", res);
        this.router.navigate(["/student-menu"]);

      }
    }, error =>{
      console.log(error.error);      //TODO: delete this line
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
