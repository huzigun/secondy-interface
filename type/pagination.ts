import { ItemSortNames } from '../enum/pagination';

export interface ISearchOption<T> {
  pageNo: number;
  pageSize: number;
  orderBy: keyof T;
  sort: ItemSortNames;
  searchKey?: keyof T;
  keyword?: string;
  withDeleted?: boolean;
}

export type PageInfo = {
  itemsCount: number;
  totalItems: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
};
