import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateDepartmentPage } from './admin-update-department-page';

describe('AdminUpdateDepartmentPage', () => {
  let component: AdminUpdateDepartmentPage;
  let fixture: ComponentFixture<AdminUpdateDepartmentPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUpdateDepartmentPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminUpdateDepartmentPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
