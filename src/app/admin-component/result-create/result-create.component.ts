import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { StorageService } from 'src/app/services/storage.service';
import { AlertService } from 'src/app/services/alert.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-result-create',
  templateUrl: './result-create.component.html',
  styleUrls: ['./result-create.component.scss'],
})
export class ResultCreateComponent implements OnInit {
  numericOnly(event): boolean { // restrict e,+,-,E characters in  input type number
    debugger
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode == 101 || charCode == 69 || charCode == 45 || charCode == 43) {
      return false;
    }
    return true;
  }

  
  assessments:any;
  students:any;
  ngOnInit( ) {
    this.httpService.getWithToken('/admin/assessment/').subscribe((result:any)=>{
      this.assessments = result.data;
      this.httpService.getWithToken('/admin/student-profile-get/').subscribe((res:any)=>{
        this.students = res.data;
        this.storageService.get('editResult').then(r=>{
          this.editData=r;
          this.data.assessment_id=this.editData.assessment.id;
          this.data.student_id=this.editData.student.id;
          this.data.marks=this.editData.marks;
          this.data.comments=this.editData.comments;
        });
      });
    });
  }

  
  data = {
    assessment_id: '',
    student_id: '',
    marks: '',
    comments: ''
  }
  editData: any;
  message: string;

  constructor(private httpService:HttpService,
    private alertService: AlertService,
    private toastService: ToastService,
    private storageService: StorageService) { }


  onCreate(){
    this.httpService.postWithToken('/admin/result-add', this.data).subscribe((result:any)=>{
      if (result.message == "success"){
        this.alertService.presentAlert("Result inserted Successfully", "Result added", "Success");
        this.toastService.presentToast("Result Added");
        this.clear();
      }
    }, error => {
      console.log(error);
      this.toastService.presentToast("An error occured. Please try again")
    });
  }

  clear(){
    this.data.assessment_id='',
    this.data.comments='',
    this.data.marks='',
    this.data.student_id=''
  }

  ngOnDestroy(){
    this.storageService.removeItem('editResult').then(res=>console.log('removed'));
    window.location.reload();

  }

  onEdit(){
    this.httpService.postWithToken(`/admin/result-edit/${this.editData.id}`, this.data).subscribe((result:any)=>{
      this.alertService.presentAlert("Result edited Successfully", "Result edited", "Success");
        this.toastService.presentToast("Result Edited");
        this.clear();
    },
    error=>{
      this.toastService.presentToast("An error occured. Please try again");
    });
  }
}
