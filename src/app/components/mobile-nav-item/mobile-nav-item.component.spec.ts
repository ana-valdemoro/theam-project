import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MobileNavItemComponent } from './mobile-nav-item.component';

describe('MobileNavItemComponent', () => {
  let component: MobileNavItemComponent;
  let fixture: ComponentFixture<MobileNavItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileNavItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileNavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
