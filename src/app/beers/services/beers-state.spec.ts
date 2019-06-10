import { TestBed, inject } from '@angular/core/testing';

import { BeersState } from './beers-state';

describe('BeersState', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeersState]
    });
  });

  it('should be created', inject([BeersState], (service: BeersState) => {
    expect(service).toBeTruthy();
  }));
});
