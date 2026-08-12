import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDepartmentPage } from './admin-department-page';

describe('AdminDepartmentPage', () => {
  let component: AdminDepartmentPage;
  let fixture: ComponentFixture<AdminDepartmentPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminDepartmentPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminDepartmentPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
