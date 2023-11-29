import { CardColorEnum } from "../enums/CardColorEnum";
import { CardTypeEnum } from "../enums/CardTypeEnum";

export interface ICard {
    color: CardColorEnum;
    type: CardTypeEnum | null;
}