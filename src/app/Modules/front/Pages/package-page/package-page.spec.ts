import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagePage } from './package-page';

describe('PackagePage', () => {
  let component: PackagePage;
  let fixture: ComponentFixture<PackagePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PackagePage],
    }).compileComponents();

    fixture = TestBed.createComponent(PackagePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
