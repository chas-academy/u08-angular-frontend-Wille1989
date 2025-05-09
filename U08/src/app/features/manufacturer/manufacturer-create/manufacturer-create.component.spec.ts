import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';

import { ManufacturerCreateComponent } from './manufacturer-create.component';
import { ManufacturerService } from '../../../core/services/manufacturer.service';

describe('ManufacturerCreateComponent', () => {
  let component: ManufacturerCreateComponent;
  let fixture: ComponentFixture<ManufacturerCreateComponent>;
  let manufacturerServiceSpy: jasmine.SpyObj<ManufacturerService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('ManufacturerService', ['createManufacturer']);

    await TestBed.configureTestingModule({
      imports: [ManufacturerCreateComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: ManufacturerService, useValue: spy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ManufacturerCreateComponent);
    component = fixture.componentInstance;
    manufacturerServiceSpy = TestBed.inject(ManufacturerService) as jasmine.SpyObj<ManufacturerService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call service and reset form on successful creation', () => {
    const mockResponse = { 
      success: true, 
      error: null, 
      message: 'Success', 
      data: [{ _id: '123', name: 'Test', country: 'Sweden' }] };

    manufacturerServiceSpy.createManufacturer.and.returnValue(of(mockResponse));

    component.newManufacturer = { name: 'Test', country: 'Sweden' };
    component.createManufacturer();

    expect(manufacturerServiceSpy.createManufacturer).toHaveBeenCalledWith({ name: 'Test', country: 'Sweden' });
    expect(component.newManufacturer).toEqual({ name: '', country: '' });
    expect(component.formSubmitted).toBeFalse();
  });

  it('should not call service if form is incomplete', () => {
    component.newManufacturer = { name: '', country: '' };
    component.createManufacturer();

    expect(manufacturerServiceSpy.createManufacturer).not.toHaveBeenCalled();
  });

  it('should handle service error', () => {
    spyOn(window, 'alert');
    manufacturerServiceSpy.createManufacturer.and.returnValue(throwError(() => ({ message: 'Server error' })));

    component.newManufacturer = { name: 'Test', country: 'Sweden' };
    component.createManufacturer();

    expect(manufacturerServiceSpy.createManufacturer).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalled();
  });
});
