import {BeerDetailModule} from './beer-detail.module';

describe('BeerDetailModule', () => {
  let beerDetailModule: BeerDetailModule;

  beforeEach(() => {
    beerDetailModule = new BeerDetailModule();
  });

  it('should create an instance', () => {
    expect(beerDetailModule).toBeTruthy();
  });
});
