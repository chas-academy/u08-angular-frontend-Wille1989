import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { ManufacturerService } from './manufacturer.service';

describe('ManufacturerService', () => {
  let service: ManufacturerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        ManufacturerService
      ]
    });
    service = TestBed.inject(ManufacturerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
