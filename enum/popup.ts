import { ReadonlyRecord } from './index';

export type LinkTargetNames = 'self' | 'blank';
export const LinkTarget: ReadonlyRecord<LinkTargetNames, LinkTargetNames> = {
  self: 'self',
  blank: 'blank',
};

export type PopupOrderNames = 'name' | 'created_at';
export const PopupOrder: ReadonlyRecord<PopupOrderNames, PopupOrderNames> = {
  name: 'name',
  created_at: 'created_at',
};

export type PopupSearchNames = 'name';
export const PopupSearch: ReadonlyRecord<PopupSearchNames, PopupSearchNames> = {
  name: 'name',
};
