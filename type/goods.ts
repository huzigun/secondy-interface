export interface ISelectGoods {
  active?: boolean;
  categoryId?: number;
}

export interface ICreateGoodsBody {
  name: string;
  eng_name?: string;
  desc?: string;
  summery?: string;
  extra1?: string;
  extra2?: string;
  extra3?: string;
  active?: boolean;
  category_id?: number;
  images: Array<File>;
}

export interface IUpdateGoodsBody extends ICreateGoodsBody {
  deleteThumbnails?: Array<number>;
}
