export interface Pagination {
  pageNum: number;
  pageSize: number;
  currentItems: number;
  hasMoreItems: boolean;
}

export interface BeersState {
  beers: Array<any>;
  pagination: Pagination;
}
