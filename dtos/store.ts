import { ThumbnailDto } from './thumbnail';

export interface StoreDto {
  id: number;
  name: string;
  zipcode?: string;
  address?: string;
  address_detail?: string;
  contact?: string;
  runtime?: string;
  latitude?: string;
  longitude?: string;
  extra1?: string;
  extra2?: string;
  extra3?: string;
  created_at: Date;

  thumbnails?: ThumbnailDto[];
}
