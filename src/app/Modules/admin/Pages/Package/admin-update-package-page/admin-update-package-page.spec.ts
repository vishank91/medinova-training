import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdatePackagePage } from './admin-update-package-page';

describe('AdminUpdatePackagePage', () => {
  let component: AdminUpdatePackagePage;
  let fixture: ComponentFixture<AdminUpdatePackagePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUpdatePackagePage],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminUpdatePackagePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
