import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaEncoderComponent } from './media-encoder.component';

describe('MediaEncoderComponent', () => {
  let component: MediaEncoderComponent;
  let fixture: ComponentFixture<MediaEncoderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaEncoderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaEncoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
