import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { AlertService } from 'src/app/services/alert.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-department-create',
  templateUrl: './department-create.component.html',
  styleUrls: ['./department-create.component.scss'],
})
export class DepartmentCreateComponent implements OnInit {

  data = {
    name: '',
    description: ''
  }
  message: string;

  constructor(private httpService: HttpService, private alertService: AlertService, private toastService: ToastService) { }

  ngOnInit() {}

  onCreate(){
    this.httpService.postWithToken('/admin/department-add', this.data).subscribe((result:any)=>{
      if (result.message == "success"){
        this.message = "name: " + result.name + "<br>" + "description: " + result.description;
        this.alertService.presentAlert("Data inserted Successfully", "Departmentcreated",this.message);
        this.toastService.presentToast("Successfully created Department <br>" + this.message)
        this.data.name = ''; 
        this.data.description = '';
      }
    }, error => {
      this.toastService.presentToast("An error occured. Please try again")
    });
  }

  ngOnDestroy(){
    window.location.reload()
  }

}
