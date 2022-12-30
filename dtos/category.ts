import { GoodsDto } from './goods';

export interface CategoryDto {
  id: number;
  name: string;
  order: number;
  desc?: string;
  active: boolean;
  parent_id?: number;

  sub_categories?: CategoryDto[];

  goods_list?: GoodsDto[];
}
