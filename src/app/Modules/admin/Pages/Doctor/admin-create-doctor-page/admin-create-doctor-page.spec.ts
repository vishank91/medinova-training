import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateDoctorPage } from './admin-create-doctor-page';

describe('AdminCreateDoctorPage', () => {
  let component: AdminCreateDoctorPage;
  let fixture: ComponentFixture<AdminCreateDoctorPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminCreateDoctorPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminCreateDoctorPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
