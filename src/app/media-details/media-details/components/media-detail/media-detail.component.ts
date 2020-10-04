import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DatePickerComponent, DatePickerDirective } from 'ng2-date-picker';

@Component({
  selector: 'app-media-detail',
  templateUrl: './media-detail.component.html',
  styleUrls: ['./media-detail.component.css']
})
export class MediaDetailComponent implements OnInit, AfterViewInit {
  @ViewChild('formWrap') formWrap: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      const contentAreaHeight = document.querySelector('.mat-dialog-content').scrollHeight;
      this.formWrap.nativeElement.style = `height:${contentAreaHeight - 50}px;overflow:auto`;
      console.log(this.formWrap)
    });
  }
}
