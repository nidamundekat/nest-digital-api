import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apiservice } from './apiservice';

describe('Apiservice', () => {
  let component: Apiservice;
  let fixture: ComponentFixture<Apiservice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Apiservice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Apiservice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
