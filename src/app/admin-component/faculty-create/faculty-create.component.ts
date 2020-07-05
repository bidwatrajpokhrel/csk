import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { AlertService } from 'src/app/services/alert.service';
import { ToastService } from 'src/app/services/toast.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-faculty-create',
  templateUrl: './faculty-create.component.html',
  styleUrls: ['./faculty-create.component.scss'],
})
export class FacultyCreateComponent implements OnInit {

  departmentfaculty = {
    department_id: '',
    faculty_id: ''
  }

  data = {
    name: '',
    qualification: '',
    title: '',
    type_:''
  }
  editData:any;
  message: string;

  constructor(private httpService: HttpService, private alertService: AlertService, private toastService: ToastService, private storageService: StorageService) { }
  
  departments: any;
  ngOnInit() {
    this.httpService.get('/public/departments/').subscribe((result: any)=>{
      this.departments = result.data;
      this.storageService.get('editFaculty').then(res=>{
        this.editData=res;
        this.data.name=this.editData.name;
        this.data.qualification=this.editData.qualification;
        this.data.title=this.editData.title;
        this.data.type_=this.editData.type;

        this.departmentfaculty.department_id=this.editData.departments.info.id;
        this.departmentfaculty.faculty_id=this.editData.id;
      });
    });
  }

  onCreate(){
    this.httpService.postWithToken('/admin/faculty-add', this.data).subscribe((result:any)=>{
      if (result.message == "success"){
        this.departmentfaculty.faculty_id = result.id;
        this.httpService.postWithToken('/admin/department-faculty-add', this.departmentfaculty).subscribe((res:any)=>{
          this.message = "Name: " + result.name + "<br>" + "Title: " + result.title + "<br>" + "Qualification: " + result.qualification + "<br>" + "Type: " + result.type;
          this.message = this.message + "<br><br>" + "Faculty added to department" + res.department;
          this.alertService.presentAlert("Data inserted Successfully", "Faculty added",this.message);
          this.toastService.presentToast("Successfully created Faculty <br>" + this.message);
          this.clear();
        }, error => {
          this.toastService.presentToast("Error occured while adding department");
        });
      }
    }, error => {
      this.toastService.presentToast("Some error occured. Please try again");
    });
  }

  clear(){
    this.data.name = ''; 
    this.data.title = '';
    this.data.qualification = '';
    this.data.type_='';
    this.departmentfaculty.department_id='';
    this.departmentfaculty.faculty_id='';
  }

  ngOnDestroy(){
    this.storageService.removeItem('editFaculty');
   window.location.reload();
  }

  onEdit(){
    this.httpService.postWithToken(`/admin/faculty-edit/${this.editData.id}`, this.data).subscribe((result:any)=>{
      this.httpService.postWithToken(`/admin/department-faculty-edit/${this.editData.departments.id}`, this.departmentfaculty).subscribe((res:any)=>{
        this.message = "Name: " + result.name + "<br>" + "Title: " + result.title + "<br>" + "Qualification: " + result.qualification + "<br>" + "Type: " + result.type;
        this.message = this.message + "<br><br>" + "Faculty added to department" + res.department;
        this.alertService.presentAlert("Data edited Successfully", "Faculty Info edited",this.message);
        this.toastService.presentToast("Successfully created Faculty <br>" + this.message);
        this.clear();
      });        
    },
    error=>{
      this.toastService.presentToast("An error occured. Please try again")
    });
  }
}
