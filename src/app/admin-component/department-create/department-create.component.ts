import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { AlertService } from 'src/app/services/alert.service';
import { ToastService } from 'src/app/services/toast.service';
import { StorageService } from 'src/app/services/storage.service';

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
  editData: any;

  constructor(private httpService: HttpService, private alertService: AlertService, private toastService: ToastService, private storageService: StorageService) { }

  ngOnInit() {
    this.storageService.get('editDepartment').then(res=>{
      this.editData = res;
      this.data.name=this.editData.name;
      this.data.description=this.editData.about;
    });
  }

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
    this.storageService.removeItem('editDepartment').then(res=>console.log('result'));
    window.location.reload();
  }

  onEdit(){
    this.httpService.postWithToken(`/admin/department-edit/${this.editData.id}`, this.data).subscribe((result:any)=>{
      this.message = "name: " + result.name + "<br>" + "description: " + result.description;
      this.alertService.presentAlert("Data inserted Successfully", "Department edited",this.message);
      this.toastService.presentToast("Successfully edited Department <br>" + this.message)
      this.data.name = ''; 
      this.data.description = '';
    },
    error=>{
      this.toastService.presentToast("An error occured. Please try again")
    });
  }

}
