import { LinkTargetNames } from '../enum/popup';

export interface ICreatePopup {
  name: string;
  startDate: Date;
  endDate: Date;
  positionLeft?: number;
  positionTop?: number;
  active?: boolean;
  target?: LinkTargetNames;
  link?: string;
  borderd?: boolean;
  shadow?: boolean;
  image?: File;
}
