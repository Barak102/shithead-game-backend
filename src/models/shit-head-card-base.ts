import { CardColorEnum } from "../enums/card-color.enum";
import { CardTypeEnum } from "../enums/card-type.enum";
import { CardVisibilityTypeEnum } from "../enums/card-visibility-type.enum";
import { ICard } from "./card";

export class ShitheadCardBase implements ICard {
  color: CardColorEnum = CardColorEnum.None;
  type: CardTypeEnum | null = null;
  visibility: CardVisibilityTypeEnum = CardVisibilityTypeEnum.Hidden;
  //abstract canPutCard(lastCard: ShitheadCardBase): boolean;
}
