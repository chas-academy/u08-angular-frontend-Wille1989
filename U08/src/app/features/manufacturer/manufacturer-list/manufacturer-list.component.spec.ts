import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { of } from 'rxjs';

import { ManufacturerListComponent } from './manufacturer-list.component';
import { ManufacturerService } from '../../../core/services/manufacturer.service';
import { Manufacturer } from '../../models/manufacturer.model';

import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';


describe('ManufacturerListComponent', () => {
  let component: ManufacturerListComponent;
  let fixture: ComponentFixture<ManufacturerListComponent>;
  let manufacturerServiceSpy: jasmine.SpyObj<ManufacturerService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('ManufacturerService', ['getAllManufacturers']);

    await TestBed.configureTestingModule({ 
      imports: [CommonModule, RouterModule],
      providers: [
        provideHttpClientTesting(),
        { provide: ManufacturerService, useValue: spy },
        { provide: ActivatedRoute, useValue: { params: of({}) } }
      ]
    }).compileComponents();

    manufacturerServiceSpy = TestBed.inject(ManufacturerService) as jasmine.SpyObj<ManufacturerService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturerListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch manufacturers on init', () => {
    const mockManufacturers: Manufacturer[] = [
      { _id: 'Id hämtades!',name: 'Discmania', country: 'Usa' }
    ];

    manufacturerServiceSpy.getAllManufacturers.and.returnValue(
      of({ 
      success: true,
      error: null,
      message: 'Success',
      data: mockManufacturers 
      }));

    fixture.detectChanges();

    expect(manufacturerServiceSpy.getAllManufacturers).toHaveBeenCalled();
    expect(component.manufacturers).toEqual(mockManufacturers);
  });
});
