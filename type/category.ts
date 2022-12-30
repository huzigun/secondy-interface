// 카테고리 등록 요청 인터페이스
export interface ICategoryCreateBody {
  name: string;
  order: number;
  desc?: string;
  active?: boolean;
  parent_id?: number;
}

// 카테고리 수정 요청 인터페이스
export interface ICategoryUpdateBody {
  name: string;
  order?: number;
  desc?: string;
  active?: boolean;
}

// 카테고리 정렬 요청 인터페이스
export interface ICategoryOrdersBody {
  orders: ICategoryOrder[];
}

export interface ICategoryOrder {
  id: number;
  order: number;
  parent_id?: number;
}
