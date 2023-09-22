import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmodalComponent } from './adminmodal.component';

describe('AdminmodalComponent', () => {
  let component: AdminmodalComponent;
  let fixture: ComponentFixture<AdminmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminmodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
