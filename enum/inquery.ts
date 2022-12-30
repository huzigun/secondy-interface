import { ReadonlyRecord } from './index';

export type InqueryOrderNames = 'name' | 'call' | 'created_at';
export const InqueryOrder: ReadonlyRecord<
  InqueryOrderNames,
  InqueryOrderNames
> = {
  name: 'name',
  call: 'call',
  created_at: 'created_at',
};

export type InquerySearchNames =
  | 'name'
  | 'call'
  | 'extra1'
  | 'extra2'
  | 'extra3'
  | 'extra4'
  | 'extra5'
  | 'extra6'
  | 'extra7'
  | 'extra8'
  | 'extra9'
  | 'extra10';
export const InquerySearch: ReadonlyRecord<
  InquerySearchNames,
  InquerySearchNames
> = {
  name: 'name',
  call: 'call',
  extra1: 'extra1',
  extra2: 'extra2',
  extra3: 'extra3',
  extra4: 'extra4',
  extra5: 'extra5',
  extra6: 'extra6',
  extra7: 'extra7',
  extra8: 'extra8',
  extra9: 'extra9',
  extra10: 'extra10',
};
