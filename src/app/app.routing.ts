import {Routes} from '@angular/router';
import {APP_CONSTANTS} from './app.config';

/**
 * The main route
 * @constant
 * @type {Route[]}
 */
export const AppRoutes: Routes = [
  {path: '', redirectTo: APP_CONSTANTS.PATH.DEFAULT, pathMatch: 'full'},
  {path: '**', redirectTo: APP_CONSTANTS.PATH.DEFAULT, pathMatch: 'full'}
];
