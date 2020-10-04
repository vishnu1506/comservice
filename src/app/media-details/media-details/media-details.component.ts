import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TabGroupConfig } from 'src/app/core/core/interfaces/interface';

@Component({
  selector: 'app-media-details',
  templateUrl: './media-details.component.html',
  styleUrls: ['./media-details.component.css']
})
export class MediaDetailsComponent implements OnInit {
  tabIndexMain = 0;
  tabList: TabGroupConfig = {
    list: [{
      name: 'Media',
      index: 0
    }, {
      name: 'Media Details',
      index: 1
    }, {
      name: 'Classification',
      index: 2
    }, {
      name: 'Media Encoder',
      index: 3
    }],
    tabActive: this.tabIndexMain
  };
  constructor(public dialogRef: MatDialogRef<any>) {

  }

  ngOnInit(): void {
  }

  getTabIndexMain(index: number): void {
    this.tabIndexMain = index;
  }
}
