import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateServicePage } from './admin-create-service-page';

describe('AdminCreateServicePage', () => {
  let component: AdminCreateServicePage;
  let fixture: ComponentFixture<AdminCreateServicePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminCreateServicePage],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminCreateServicePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
