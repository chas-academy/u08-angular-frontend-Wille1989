import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { DiscCreateComponent } from './disc-create.component';
import { DiscService } from '../../../core/services/disc.service';
import { ManufacturerService } from '../../../core/services/manufacturer.service';


describe('DiscCreateComponent', () => {
  let component: DiscCreateComponent;
  let fixture: ComponentFixture<DiscCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscCreateComponent],
      providers: [
        {
          provide: DiscService,
          useValue: { createDisc: () => of({}) }
        },
        {
          provide: ManufacturerService,
          useValue: { getAllManufacturers: () => of({ data: [] }) }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
