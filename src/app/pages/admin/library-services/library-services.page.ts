import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatDialogConfig} from "@angular/material/dialog";
import {LibraryServicesCreateComponent} from 'src/app/admin-component/library-services-create/library-services-create.component';

@Component({
  selector: 'app-library-services',
  templateUrl: './library-services.page.html',
  styleUrls: ['./library-services.page.scss'],
})
export class LibraryServicesPage implements OnInit {
  onCreate(){
    this.dialog.open(LibraryServicesCreateComponent);
  }
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

}
