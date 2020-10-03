import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MediaDetailsComponent } from './media-details/media-details/media-details.component';
import { SharedModule } from './shared/shared/shared.module';
import { ClassificationComponent } from './media-details/media-details/components/classification/classification.component';
import { MediaEncoderComponent } from './media-details/media-details/components/media-encoder/media-encoder.component';
import { MediaDetailComponent } from './media-details/media-details/components/media-detail/media-detail.component';
import {DpDatePickerModule} from 'ng2-date-picker';


@NgModule({
  declarations: [
    AppComponent,
    MediaDetailsComponent,
    ClassificationComponent,
    MediaEncoderComponent,
    MediaDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatTabsModule,
    SharedModule,
    DpDatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
