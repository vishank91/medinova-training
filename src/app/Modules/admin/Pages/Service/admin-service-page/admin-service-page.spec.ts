import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminServicePage } from './admin-service-page';

describe('AdminServicePage', () => {
  let component: AdminServicePage;
  let fixture: ComponentFixture<AdminServicePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminServicePage],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminServicePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
