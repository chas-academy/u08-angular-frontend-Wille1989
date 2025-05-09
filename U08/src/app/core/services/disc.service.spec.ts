import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { DiscService } from './disc.service';

describe('DiscService', () => {
  let service: DiscService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        DiscService
      ]
    });
    service = TestBed.inject(DiscService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
