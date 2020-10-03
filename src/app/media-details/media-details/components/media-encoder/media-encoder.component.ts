import { Component, OnInit } from '@angular/core';
import { TabGroupConfig } from 'src/app/core/core/interfaces/interface';

@Component({
  selector: 'app-media-encoder',
  templateUrl: './media-encoder.component.html',
  styleUrls: ['./media-encoder.component.css']
})
export class MediaEncoderComponent implements OnInit {
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
  constructor() { this.list.length = 50;}

  ngOnInit(): void {
  }
  getTabIndexMain(index: number): void {
    this.tabIndexMain = index;
  }
}
