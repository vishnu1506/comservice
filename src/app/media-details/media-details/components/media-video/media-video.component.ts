import { ElementRef, ViewChild } from '@angular/core';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-video',
  templateUrl: './media-video.component.html',
  styleUrls: ['./media-video.component.css']
})
export class MediaVideoComponent implements OnInit,AfterViewInit {
  @ViewChild('videoWrap') videoWrap: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      const contentAreaHeight = document.querySelector('.mat-dialog-content').scrollHeight;
      // this.videoWrap.nativeElement.style = `height:${contentAreaHeight - 50}px;overflow:auto`;
      console.log(this.videoWrap)
    });
  }
}
