import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TabGroupConfig } from 'src/app/core/core/interfaces/interface';

@Component({
  selector: 'app-tabgroup-button',
  templateUrl: './tabgroup-button.component.html',
  styleUrls: ['./tabgroup-button.component.css']
})
export class TabgroupButtonComponent implements OnInit {

  @Input() tabs!: TabGroupConfig;
  @Output() tabOnChange = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  getTabIndex(item: any): void {
    this.tabs.tabActive = item.index;
    this.tabOnChange.emit(item.index);
  }
}
