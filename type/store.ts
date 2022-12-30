export interface ICreateStoreBody {
  name: string;
  zipcode?: string;
  address?: string;
  address_detail?: string;
  contact?: string;
  runtime?: string;
  longitude?: string; // x 좌표 경도
  latitude?: string; // y 좌표 위도
  extra1?: string;
  extra2?: string;
  extra3?: string;

  images: Array<File>;
}

export interface IUpdateStoreBody extends ICreateStoreBody {
  deleteThumbnails?: number | number[];
}
