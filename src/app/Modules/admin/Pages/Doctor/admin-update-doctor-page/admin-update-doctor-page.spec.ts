import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateDoctorPage } from './admin-update-doctor-page';

describe('AdminUpdateDoctorPage', () => {
  let component: AdminUpdateDoctorPage;
  let fixture: ComponentFixture<AdminUpdateDoctorPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUpdateDoctorPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminUpdateDoctorPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
