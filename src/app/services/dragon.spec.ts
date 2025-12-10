import { TestBed } from '@angular/core/testing';

import { DragonService } from './dragon';

describe('Dragon', () => {
  let service: DragonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DragonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});