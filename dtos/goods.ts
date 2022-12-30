import { CategoryDto } from './category';
import { ThumbnailDto } from './thumbnail';

export interface GoodsDto {
  id: number;
  name: string;
  eng_name?: string;
  desc?: string;
  summery?: string;
  extra1?: string;
  extra2?: string;
  extra3?: string;
  active?: boolean;
  order: number;
  created_at: Date;

  category_id?: number;

  category?: CategoryDto;
  thumbnails?: ThumbnailDto[];
}
