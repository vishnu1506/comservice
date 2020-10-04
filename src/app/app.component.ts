import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MediaDetailComponent } from './media-details/media-details/components/media-detail/media-detail.component';
import { MediaDetailsComponent } from './media-details/media-details/media-details.component';

export interface media {
  video: string;
  position: string;
  office: string;
  age: number;
  startDate: string;
  salary: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SalesMedia-child';
  constructor(public dialog: MatDialog) { }
  dataSource: media[] = [
    { video: '', position: 'System Architect', office: 'Edinburgh', age: 61, startDate: '2011/04/25', salary: 320800 },
    { video: '', position: 'Accountant', office: 'Tokyo', age: 63, startDate: '2011/07/25', salary: 170750 },
    { video: '', position: 'Accountant', office: 'Tokyo', age: 63, startDate: '2011/07/25', salary: 170750 },
    { video: '', position: 'Senior Javascript Developer', office: 'Edinburgh', age: 22, startDate: '2012/03/29', salary: 433060 },
    { video: '', position: 'System Architect', office: 'Edinburgh', age: 61, startDate: '2011/04/25', salary: 320800 },
    { video: '', position: 'Accountant', office: 'Tokyo', age: 63, startDate: '2011/07/25', salary: 170750 },
    { video: '', position: 'Accountant', office: 'Tokyo', age: 63, startDate: '2011/07/25', salary: 170750 },
    { video: '', position: 'Senior Javascript Developer', office: 'Edinburgh', age: 22, startDate: '2012/03/29', salary: 433060 },
    { video: '', position: 'System Architect', office: 'Edinburgh', age: 61, startDate: '2011/04/25', salary: 320800 },
    { video: '', position: 'Accountant', office: 'Tokyo', age: 63, startDate: '2011/07/25', salary: 170750 },
    { video: '', position: 'Accountant', office: 'Tokyo', age: 63, startDate: '2011/07/25', salary: 170750 },
    { video: '', position: 'Senior Javascript Developer', office: 'Edinburgh', age: 22, startDate: '2012/03/29', salary: 433060 },
  ];
  displayedColumns: string[] = ['video', 'position', 'office', 'age', 'startDate', 'salary'];
  openDialog(): void {
    const dialogRef = this.dialog.open(MediaDetailsComponent, { width: '80%', height: '80%',panelClass:'mediaPopup' });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
