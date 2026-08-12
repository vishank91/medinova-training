import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDoctorPage } from './admin-doctor-page';

describe('AdminDoctorPage', () => {
  let component: AdminDoctorPage;
  let fixture: ComponentFixture<AdminDoctorPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminDoctorPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminDoctorPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
