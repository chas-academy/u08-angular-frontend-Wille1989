import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { DiscService } from '../../../core/services/disc.service';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { DiscListComponent } from './disc-list.component';

describe('DiscListComponent', () => {
  let component: DiscListComponent;
  let fixture: ComponentFixture<DiscListComponent>;
  let discServiceSpy: jasmine.SpyObj<DiscService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('DiscService', ['getAllDiscs', 'searchDiscs']);

    await TestBed.configureTestingModule({
      imports: [DiscListComponent],
      providers: [
        provideHttpClientTesting(), 
        { provide: DiscService, useValue: spy },
        { provide: ActivatedRoute,
          useValue: { 
            paramMap: of(new Map([['Tillverkarens ID', '123']]))
          }
         }
        ]
    }).compileComponents();

    discServiceSpy = TestBed.inject(DiscService) as jasmine.SpyObj<DiscService>;
    fixture = TestBed.createComponent(DiscListComponent);
    component = fixture.componentInstance;
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load disc on init', () => {
    const mockDiscs = [
      {
      id: '666',
      title: 'testDisc',
      type: 'Driver',
      speed: 12,
      glide: 4,
      turn: 2,
      fade: -1,
      manufacturer: { 
        _id: 'objectID från Mongo', 
        name: 'test namn för tillverkare', 
        country: 'test land' }
      }
    ];

    discServiceSpy.getAllDiscs.and.returnValue(of({ 
      success: true,
      error: null,
      message: 'Success',
      data: mockDiscs }));
    
      fixture.detectChanges();

      expect(discServiceSpy.getAllDiscs).toHaveBeenCalled();
      expect(component.discs.length).toBe(1);
      expect(component.discs[0].title).toBe('TESTDISC');
      expect(component.discs[0].manufacturer.name).toBe('TEST NAMN FÖR TILLVERKARE');
  });

  it('should call searchDisc when searchTerm is provided', () => {
    const mockSearchResults = [
      { 
        id: '1', 
        title: 'gamma',
        type: 'Driver',
        fade: 12,
        glide: 7,
        turn: 4,
        speed: 15,
        manufacturer: {
           _id: '123', 
           name: 'innova',
           country: 'Sverige' 
          }
        }
    ];

    component.searchTerm = 'gamma';

    discServiceSpy.searchDiscs.and.returnValue(of({ 
      success: true,
      error: null,
      message: 'Success',
      data: mockSearchResults
     }));

     component.onSearchChange();

     expect(discServiceSpy.searchDiscs).toHaveBeenCalledOnceWith('gamma');
     expect(component.discs.length).toBe(1);
  });
});
