import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateServicePage } from './admin-update-service-page';

describe('AdminUpdateServicePage', () => {
  let component: AdminUpdateServicePage;
  let fixture: ComponentFixture<AdminUpdateServicePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUpdateServicePage],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminUpdateServicePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
