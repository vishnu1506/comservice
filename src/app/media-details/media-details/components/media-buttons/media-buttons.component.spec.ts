import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaButtonsComponent } from './media-buttons.component';

describe('MediaButtonsComponent', () => {
  let component: MediaButtonsComponent;
  let fixture: ComponentFixture<MediaButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
