import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TabGroupConfig } from 'src/app/core/core/interfaces/interface';

@Component({
  selector: 'app-media-encoder',
  templateUrl: './media-encoder.component.html',
  styleUrls: ['./media-encoder.component.css']
})
export class MediaEncoderComponent implements OnInit, AfterViewInit {
  tabIndexMain = 0;
  list = [];
  tabList: TabGroupConfig = {
    list: [{
      name: 'MEDIA ENCORDER',
      index: 0
    }, {
      name: 'AD COPY',
      index: 1
    }, {
      name: 'AD COPY MEDIA',
      index: 2
    }, {
      name: 'AUDIT LOG',
      index: 3
    }, {
      name: 'BATCHWORK',
      index: 4
    }, {
      name: 'ALERTS',
      index: 5
    }, {
      name: 'NOTIFICATIONS',
      index: 6
    }],
    tabActive: this.tabIndexMain
  };
  displayedColumns: string[] = ['Logged', 'User Name', 'From Status', 'To Status', 'Qced', 'Resolution'];
  dataSource = [];
  constructor() { this.list.length = 50; }
  @ViewChild('table') tableHeight: ElementRef;

  ngOnInit(): void {
    for (let index = 0; index < 20; index++) {
      const obj = {
        logged: new Date(),
        name: 'NBEN2323',
        from: 'NBC',
        to: 'Broklyn 99 Another Day',
        qced: '',
        resolution: 'HD8'
      };

      this.dataSource.push(obj);
    }
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      const contentAreaHeight = document.querySelector('.mat-dialog-content').scrollHeight;
      this.tableHeight.nativeElement.style = `height:${contentAreaHeight - 150}px;overflow:auto`;
      console.log(this.tableHeight)
    });
  }
  getTabIndexMain(index: number): void {
    this.tabIndexMain = index;
  }
}
