import { Component, OnInit } from '@angular/core';
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
      name: 'Media Details',
      index: 0
    }, {
      name: 'Classification',
      index: 1
    }, {
      name: 'Media Encoder',
      index: 2
    }],
    tabActive: this.tabIndexMain
  };
  constructor() { }

  ngOnInit(): void {
  }
  getTabIndexMain(index: number): void {
    this.tabIndexMain = index;
  }
}
