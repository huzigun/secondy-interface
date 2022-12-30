import { ReadonlyRecord } from './index';

export type ItemSortNames = 'asc' | 'desc';
export const ItemSort: ReadonlyRecord<ItemSortNames, ItemSortNames> = {
  asc: 'asc',
  desc: 'desc',
};
