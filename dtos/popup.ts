import { LinkTargetNames } from '../enum/popup';

export interface PopupDto {
  id: number;
  name: string;
  start_date: Date;
  end_date: Date;
  originalname: string;
  url: string;
  position_left: number;
  position_top: number;
  active: boolean;
  target: LinkTargetNames;
  link?: string;
  borderd: boolean;
  shadow: boolean;
  created_at: Date;
}
