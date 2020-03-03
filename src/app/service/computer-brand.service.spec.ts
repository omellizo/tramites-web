import { TestBed } from '@angular/core/testing';

import { ComputerBrandService } from './computer-brand.service';

describe('ComputerBrandService', () => {
  let service: ComputerBrandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComputerBrandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
