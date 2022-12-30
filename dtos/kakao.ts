import { AddressTypeNames } from '../enum/kakao';

export interface IKakaoAddressDto {
  meta: IKakaoAddressMeta;
  documents: IKakaoAddressDocuments[];
}

export interface IKakaoAddressMeta {
  total_count: number;
  pageable_count: number;
  is_end: number;
}

export interface IKakaoAddressDocuments {
  address_name: string;
  address_type: AddressTypeNames;
  x: string;
  y: string;
  address: IKakaoAddress;
  road_address: IKakaoRoadAddress;
}

export interface IKakaoAddress {
  address_name: string;
  region_1depth_name: string;
  region_2depth_name: string;
  region_3depth_name: string;
  region_3depth_h_name: string;
  h_code: string;
  b_code: string;
  mountain_yn: string;
  main_address_no: string;
  sub_address_no: string;
  x: string;
  y: string;
}

export interface IKakaoRoadAddress {
  address_name: string;
  region_1depth_name: string;
  region_2depth_name: string;
  region_3depth_name: string;
  road_name: string;
  underground_yn: string;
  main_building_no: string;
  sub_building_no: string;
  building_name: string;
  zone_no: string;
  x: string;
  y: string;
}
