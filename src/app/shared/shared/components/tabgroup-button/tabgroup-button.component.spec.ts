import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabgroupButtonComponent } from './tabgroup-button.component';

describe('TabgroupButtonComponent', () => {
  let component: TabgroupButtonComponent;
  let fixture: ComponentFixture<TabgroupButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabgroupButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabgroupButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
