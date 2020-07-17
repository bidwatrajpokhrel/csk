import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss'],
})
export class ImageGalleryComponent implements OnInit {

  imageList:any;

  constructor(private httpService: HttpService) { 
  }
  
  ngOnInit() {
    this.httpService.get('/public/gallery/').subscribe((result:any)=>{
      this.imageList=result.data;
    })
  }

}
