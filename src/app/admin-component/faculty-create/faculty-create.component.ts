import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { AlertService } from 'src/app/services/alert.service';
import { ToastService } from 'src/app/services/toast.service';

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
  message: string;

  constructor(private httpService: HttpService, private alertService: AlertService, private toastService: ToastService) { }
  
  departments: any;
  ngOnInit() {
    this.httpService.get('/public/departments/').subscribe((result: any)=>{
      this.departments = result.data;
    });
  }

  onCreate(){
    this.httpService.postWithToken('/admin/faculty-add', this.data).subscribe((result:any)=>{
      if (result.message == "success"){
        this.departmentfaculty.faculty_id = result.id;
        this.httpService.postWithToken('/admin/department-faculty-add', this.departmentfaculty).subscribe((res:any)=>{
          this.message = "Name: " + result.name + "<br>" + "Title: " + result.Title + "<br>" + "Qualification: " + result.qualification + "<br>" + "Type: " + result.type;
          this.message = this.message + "<br><br>" + "Faculty added to department" + res.department;
          this.alertService.presentAlert("Data inserted Successfully", "Admission Info added",this.message);
          this.toastService.presentToast("Successfully created Admission Information <br>" + this.message);
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
   window.location.reload()
  }

}
