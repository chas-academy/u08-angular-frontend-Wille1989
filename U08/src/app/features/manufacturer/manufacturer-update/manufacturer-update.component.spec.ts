import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { ManufacturerUpdateComponent } from './manufacturer-update.component';
import { ManufacturerService } from '../../../core/services/manufacturer.service';

describe('ManufacturerUpdateComponent', () => {
  let component: ManufacturerUpdateComponent;
  let fixture: ComponentFixture<ManufacturerUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManufacturerUpdateComponent],
      providers: [
        {
          provide: ManufacturerService,
          useValue: {
            getManufacturerById: () => of({ data: { _id: '666', name: 'Test', country: 'SE' } }),
            updateManufacturerPartial: () => of({})
          }
        },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: { get: () => '1' } }
          }
        },
        {
          provide: Router,
          useValue: { navigate: jasmine.createSpy('navigate') }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ManufacturerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
