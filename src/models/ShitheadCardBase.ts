import { CardColorEnum } from "../enums/CardColorEnum";
import { CardTypeEnum } from "../enums/CardTypeEnum";
import { CardVisibilityType } from "../enums/CardVisibilityType";
import { ICard } from "./Card";

export class ShitheadCardBase implements ICard {
    color: CardColorEnum = CardColorEnum.None;
    type: CardTypeEnum | null = null;
    visibility: CardVisibilityType = CardVisibilityType.Hidden;
}