import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabgroupMainComponent } from './components/tabgroup-main/tabgroup-main.component';
import { TabgroupButtonComponent } from './components/tabgroup-button/tabgroup-button.component';



@NgModule({
  declarations: [TabgroupMainComponent, TabgroupButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [TabgroupMainComponent,TabgroupButtonComponent]
})
export class SharedModule { }
