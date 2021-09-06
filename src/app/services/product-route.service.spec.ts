import { TestBed } from '@angular/core/testing';

import { ProductRouteService } from './product-route.service';

describe('ProductRouteService', () => {
  let service: ProductRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
