import { TestBed } from '@angular/core/testing';

import { RequestPromotionService } from './request-promotion.service';

describe('RequestPromotionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestPromotionService = TestBed.get(RequestPromotionService);
    expect(service).toBeTruthy();
  });
});
