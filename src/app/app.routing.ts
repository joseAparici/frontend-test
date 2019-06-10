import {Routes} from '@angular/router';
import {APP_CONSTANTS} from './app.config';

export const AppRoutes: Routes = [
  {path: '', redirectTo: APP_CONSTANTS.PATH.DEFAULT, pathMatch: 'full'},
  {path: '**', redirectTo: APP_CONSTANTS.PATH.DEFAULT, pathMatch: 'full'}
];
