import {Action} from '@ngrx/store';

/**
 * Represents an implementation of an store action
 * @class
 * @property {string} type
 * @property {any} payload
 */

export class GenericAction implements Action {
  type: string;
  payload: any;

  constructor(type: string, payload?: any) {
    this.type = type;
    this.payload = payload;
  }
}
