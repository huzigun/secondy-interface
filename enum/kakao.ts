import { ReadonlyRecord } from './index';

export type AddressTypeNames = 'REGION' | 'ROAD' | 'REGION_ADDR' | 'ROAD_ADDR';
export const AddressType: ReadonlyRecord<AddressTypeNames, AddressTypeNames> = {
  REGION: 'REGION',
  ROAD: 'ROAD',
  REGION_ADDR: 'REGION_ADDR',
  ROAD_ADDR: 'ROAD_ADDR',
};
