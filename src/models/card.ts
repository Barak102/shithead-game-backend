import { CardColorEnum } from "../enums/card-color.enum";
import { CardTypeEnum } from "../enums/card-type.enum";

export interface ICard {
  color: CardColorEnum;
  type: CardTypeEnum | null;
}
