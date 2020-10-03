import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabgroupMainComponent } from './tabgroup-main.component';

describe('TabgroupMainComponent', () => {
  let component: TabgroupMainComponent;
  let fixture: ComponentFixture<TabgroupMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabgroupMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabgroupMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
