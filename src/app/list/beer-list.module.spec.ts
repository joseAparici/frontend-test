import {BeerListModule} from './beer-list.module';

describe('BeerListModule', () => {
  let beerListModule: BeerListModule;

  beforeEach(() => {
    beerListModule = new BeerListModule();
  });

  it('should create an instance', () => {
    expect(beerListModule).toBeTruthy();
  });
});
