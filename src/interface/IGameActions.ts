import { ICard } from "../models/Card";

export interface IGameAction {
    getCardValue(card: ICard): number;
}


// pick card
// deal cards to the players
// put card
// break-in => with 4 / complete to 4
// pick all cards
