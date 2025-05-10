import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscUpdateComponent } from './disc-update.component';

describe('DiscUpdateComponent', () => {
  let component: DiscUpdateComponent;
  let fixture: ComponentFixture<DiscUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
