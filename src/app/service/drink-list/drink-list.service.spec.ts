import { TestBed } from '@angular/core/testing';

import { DrinkListService } from './drink-list.service';

describe('DrinkListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DrinkListService = TestBed.get(DrinkListService);
    expect(service).toBeTruthy();
  });
});
