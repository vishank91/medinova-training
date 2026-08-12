import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateDepartmentPage } from './admin-create-department-page';

describe('AdminCreateDepartmentPage', () => {
  let component: AdminCreateDepartmentPage;
  let fixture: ComponentFixture<AdminCreateDepartmentPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminCreateDepartmentPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminCreateDepartmentPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
