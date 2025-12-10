import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpsonsListComponent } from './simpsons-list';

describe('SimpsonsListComponent', () => {
  let component: SimpsonsListComponent;
  let fixture: ComponentFixture<SimpsonsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpsonsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpsonsListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});