import { TestBed } from '@angular/core/testing';

import { AddPromotionService } from './add-promotion.service';

describe('AddPromotionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddPromotionService = TestBed.get(AddPromotionService);
    expect(service).toBeTruthy();
  });
});
