import { ReadonlyRecord } from './index';

export type GoodsOrderNames = 'name' | 'active' | 'order' | 'created_at';
export const GoodsOrder: ReadonlyRecord<GoodsOrderNames, GoodsOrderNames> = {
  name: 'name',
  active: 'active',
  order: 'order',
  created_at: 'created_at',
};

export type GoodsSearchNames = 'name' | 'eng_name' | 'desc';
export const GoodsSearch: ReadonlyRecord<GoodsSearchNames, GoodsSearchNames> = {
  name: 'name',
  eng_name: 'eng_name',
  desc: 'desc',
};
