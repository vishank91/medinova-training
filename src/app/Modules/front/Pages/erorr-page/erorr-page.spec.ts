import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErorrPage } from './erorr-page';

describe('ErorrPage', () => {
  let component: ErorrPage;
  let fixture: ComponentFixture<ErorrPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErorrPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ErorrPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
