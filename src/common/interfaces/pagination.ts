export interface IPagingObject<T> {
  items: { [pageNumber: number]: T[] };
  total: number;
}

export interface IPaginationOptions {
  limit: number;
  offset: number;
}