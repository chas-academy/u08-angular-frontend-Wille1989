import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscByIdComponent } from './disc-by-id.component';

describe('DiscByIdComponent', () => {
  let component: DiscByIdComponent;
  let fixture: ComponentFixture<DiscByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscByIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
