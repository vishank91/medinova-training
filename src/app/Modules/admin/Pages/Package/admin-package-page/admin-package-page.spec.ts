import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPackagePage } from './admin-package-page';

describe('AdminPackagePage', () => {
  let component: AdminPackagePage;
  let fixture: ComponentFixture<AdminPackagePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminPackagePage],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminPackagePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
