import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatDialogConfig} from "@angular/material/dialog";
import { AssessmentCreateComponent } from 'src/app/admin-component/assessment-create/assessment-create.component';
import { HttpService } from 'src/app/services/http.service';
import { HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS } from '@angular/cdk/a11y/high-contrast-mode/high-contrast-mode-detector';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/toast.service';


@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.page.html',
  styleUrls: ['./assessment.page.scss'],
})
export class AssessmentPage implements OnInit {

  displayedColumns: string[] = ['assessmentId', 'assessmentTitle', 'assessmentMarks','assessmentAbout', 'assessmentUnit','actions'];

  listData: any;

  onCreate(){
    this.dialog.open(AssessmentCreateComponent);
  }

  constructor(
    private dialog: MatDialog,
    private httpService: HttpService,
    private storageService: StorageService,
    private toastService: ToastService) { }
  ngOnInit() {
    this.httpService.getWithToken('/admin/assessment/').subscribe((result:any) => {
      this.listData = result.data;
      console.log(result);
    });
  }

  onEdit(element){
    this.storageService.store("editAssessment", element).then(res=>{
      this.dialog.open(AssessmentCreateComponent);
    });
  }

  onDelete(id){
    this.httpService.postWithTokenEmpty(`/admin/assessment-delete/${id.id}`).subscribe(res=>{
      this.toastService.presentToast('Content Deleted');
      window.location.reload();
    },error=>{
      this.toastService.presentToast('Something went wrong. Check that field has no dependencies')
    });
    }

}
