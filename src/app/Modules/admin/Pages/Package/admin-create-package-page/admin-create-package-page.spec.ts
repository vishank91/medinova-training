import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreatePackagePage } from './admin-create-package-page';

describe('AdminCreatePackagePage', () => {
  let component: AdminCreatePackagePage;
  let fixture: ComponentFixture<AdminCreatePackagePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminCreatePackagePage],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminCreatePackagePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
