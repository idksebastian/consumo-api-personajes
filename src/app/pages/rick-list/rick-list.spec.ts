import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickListComponent } from './rick-list';

describe('RickListComponent', () => {
  let component: RickListComponent;
  let fixture: ComponentFixture<RickListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RickListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RickListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});