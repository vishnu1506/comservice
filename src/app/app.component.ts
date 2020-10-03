import { Component } from '@angular/core';

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
}
