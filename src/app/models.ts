import { Action } from '@ngrx/store';


export class GenericAction implements Action {
  type: string;
  payload: any;

  constructor(type: string, payload?: any) {
    this.type = type;
    this.payload = payload;
  }
}
