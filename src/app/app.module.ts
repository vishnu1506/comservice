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
import { DpDatePickerModule } from 'ng2-date-picker';
import { MediaVideoComponent } from './media-details/media-details/components/media-video/media-video.component';
import { MediaButtonsComponent } from './media-details/media-details/components/media-buttons/media-buttons.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    AppComponent,
    MediaDetailsComponent,
    ClassificationComponent,
    MediaEncoderComponent,
    MediaDetailComponent,
    MediaVideoComponent,
    MediaButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatTabsModule,
    SharedModule,
    DpDatePickerModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatTooltipModule
  ],
  entryComponents: [MediaDetailsComponent],
  providers: [{ provide: MatDialogRef, useValue: {} },
  { provide: MAT_DIALOG_DATA, useValue: [] }],
  bootstrap: [AppComponent]
})
export class AppModule { }
