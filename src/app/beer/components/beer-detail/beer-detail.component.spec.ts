import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BeerDetailComponent} from './beer-detail.component';
import {BEER_MODULE_CONFIG, BEER_MODULE_CONSTANTS} from '../../beer.module.config';
import {APP_CONSTANTS, APP_MODULE_CONFIG} from '../../../app.config';
import {RouterTestingModule} from '@angular/router/testing';
import {StoreModule} from '@ngrx/store';

xdescribe('BeerDetailComponent', () => {
  let component: BeerDetailComponent;
  let fixture: ComponentFixture<BeerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.forRoot({})
      ],
      declarations: [ BeerDetailComponent ],
      providers: [
        {provide: APP_MODULE_CONFIG, useValue: APP_CONSTANTS},
        {provide: BEER_MODULE_CONFIG, useValue: BEER_MODULE_CONSTANTS}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
