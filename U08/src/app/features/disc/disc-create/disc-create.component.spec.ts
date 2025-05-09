import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscCreateComponent } from './disc-create.component';

describe('DiscCreateComponent', () => {
  let component: DiscCreateComponent;
  let fixture: ComponentFixture<DiscCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscCreateComponent]
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
