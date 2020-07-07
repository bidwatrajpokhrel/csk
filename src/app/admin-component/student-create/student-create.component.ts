import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { AlertService } from 'src/app/services/alert.service';
import { ToastService } from 'src/app/services/toast.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.scss'],
})
export class StudentCreateComponent implements OnInit {

  majorStudent = {
    student_id: '',
    major_id: ''
  };
  data = {
    name: '',
    student_level: '',
    email: '',
    password: '',
    description: ''
  };
  editData: any;
  message: string;

  constructor(private httpService: HttpService, private alertService: AlertService, private toastService: ToastService, private storageService: StorageService) { }
  
  majors: any;
  ngOnInit() {
    this.httpService.get('/public/major/').subscribe((result: any)=>{
      this.majors = result.data;
      this.storageService.get('editStudent').then(res=>{
        this.editData=res;
        this.data.name=this.editData.name;
        this.data.student_level=this.editData.level;
        this.data.password=this.editData.password;
        this.data.description=this.editData.description;
      });
    });
  }

  onCreate(){
    this.httpService.post('/auth/student-register', this.data).subscribe((result:any)=>{
      if (result.message == "success"){
        this.majorStudent.student_id = result.id;
        this.httpService.postWithToken('/admin/major-student-add', this.majorStudent).subscribe((res:any)=>{
          this.message = "Name: " + result.name + "<br>" + "Email: " + result.email + "<br>" + "Description: " + result.description + "<br>" + "Level: " + result.level;
          this.message = this.message + "<br><br>" + "Student Major added successfully: " + res.major;
          this.alertService.presentAlert("Data inserted Successfully", "Student added",this.message);
          this.toastService.presentToast("Successfully created Student with Major <br>" + this.message);
          this.clear();
        }, error => {
          this.toastService.presentToast("Error occured while adding major");
        });
      }
    }, error => {
      this.toastService.presentToast("Some error occured. Please try again");
    });
  }

  clear(){
    this.data.name = ''; 
    this.data.email = '';
    this.data.student_level = '';
    this.data.password='';
    this.data.description='';
    this.majorStudent.major_id='';
    this.majorStudent.student_id='';
  }

  ngOnDestroy(){
    this.storageService.removeItem('editStudent').then(res=>console.log('removed'));
    window.location.reload();
  }

  onEdit(){
    this.httpService.postWithToken(`/admin/student-edit/${this.editData.id}`, this.data).subscribe((result:any)=>{
      this.message = "Name: " + result.name + "<br>" + "Description: " + result.description + "<br>" + "Level: " + result.level;
      this.alertService.presentAlert("Data inserted Successfully", "Student edited",this.message);
      this.toastService.presentToast("Successfully edited Student<br>" + this.message);
      this.clear();
    },
    error=>{
      this.toastService.presentToast("An error occured. Please try again")
    });
  }


}
