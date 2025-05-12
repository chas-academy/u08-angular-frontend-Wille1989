import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturerByIdComponent } from './manufacturer-by-id.component';

describe('ManufacturerByIdComponent', () => {
  let component: ManufacturerByIdComponent;
  let fixture: ComponentFixture<ManufacturerByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManufacturerByIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManufacturerByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
