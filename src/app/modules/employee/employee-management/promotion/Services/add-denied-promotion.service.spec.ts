import { TestBed } from '@angular/core/testing';

import { AddDeniedPromotionService } from './add-denied-promotion.service';

describe('AddDeniedPromotionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddDeniedPromotionService = TestBed.get(AddDeniedPromotionService);
    expect(service).toBeTruthy();
  });
});
