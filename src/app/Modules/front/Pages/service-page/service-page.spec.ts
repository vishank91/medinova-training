import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePage } from './service-page';

describe('ServicePage', () => {
  let component: ServicePage;
  let fixture: ComponentFixture<ServicePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServicePage],
    }).compileComponents();

    fixture = TestBed.createComponent(ServicePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
