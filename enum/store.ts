import { ReadonlyRecord } from './index';

export type StoreOrderNames = 'name' | 'created_at';
export const StoreOrder: ReadonlyRecord<StoreOrderNames, StoreOrderNames> = {
  name: 'name',
  created_at: 'created_at',
};

export type StoreSearchNames = 'name' | 'address' | 'contact';
export const StoreSearch: ReadonlyRecord<StoreSearchNames, StoreSearchNames> = {
  name: 'name',
  address: 'address',
  contact: 'contact',
};
