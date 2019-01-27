import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {UploadService} from '../../services/upload.service';
import {DialogComponent} from '../dialog/dialog.component';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {
  constructor(public dialog: MatDialog, public uploadService: UploadService) {
  }

  public openUploadDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {width: '50%', height: '50%'});
  }
}
