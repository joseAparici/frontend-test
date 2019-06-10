import { BeersModule } from './beers.module';

describe('BeersModule', () => {
  let beersModule: BeersModule;

  beforeEach(() => {
    beersModule = new BeersModule();
  });

  it('should create an instance', () => {
    expect(beersModule).toBeTruthy();
  });
});
