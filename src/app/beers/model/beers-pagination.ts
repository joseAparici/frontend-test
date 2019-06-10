export class BeersPagination {
  private _num: number;
  private _size: number;

  constructor(num: number, size: number) {
    this._num = num;
    this._size = size;
  }

  get num(): number {
    return this._num;
  }

  set num(value: number) {
    this._num = value;
  }

  get size(): number {
    return this._size;
  }

  set size(value: number) {
    this._size = value;
  }
}
