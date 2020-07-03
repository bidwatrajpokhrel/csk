import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatDialogConfig} from "@angular/material/dialog";
import {RestaurantsNearbyCreateComponent} from 'src/app/admin-component/restaurants-nearby-create/restaurants-nearby-create.component';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-restaurants-nearby',
  templateUrl: './restaurants-nearby.page.html',
  styleUrls: ['./restaurants-nearby.page.scss'],
})
export class RestaurantsNearbyPage implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'offers', 'details','address','image', 'editImage', 'actions'];

  onCreate(){
    this.dialog.open(RestaurantsNearbyCreateComponent);
  }
  constructor(private dialog: MatDialog, private httpService:HttpService) { }

  selectedFile = null;
  onFileSelected(event, id){
    this.selectedFile = event.target.files[0];
    this.onUpload(id);
  }
  onUpload(id){
    this.httpService.post(`/image/nearby_restaurant/${id}`, this.selectedFile).subscribe((result:any)=>{
      window.location.reload();
    });
  }

  listData: any;
  ngOnInit() {
    this.httpService.getWithToken('/public/nearby-restaurants/').subscribe((result: any)=>{
      this.listData = result.data;
      console.log(result)
    })
  }

}
