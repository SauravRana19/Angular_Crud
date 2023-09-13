import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartsdetailsComponent } from './cartsdetails.component';

describe('CartsdetailsComponent', () => {
  let component: CartsdetailsComponent;
  let fixture: ComponentFixture<CartsdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartsdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
