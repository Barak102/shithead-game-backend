import { CardColorEnum } from "../enums/CardColorEnum";
import { CardTypeEnum } from "../enums/CardTypeEnum";
import { CardVisibilityType } from "../enums/CardVisibilityType";
import { ShitheadCardBase } from "../models/ShitheadCardBase";

const cardTypes = [
    CardTypeEnum.Two,
    CardTypeEnum.Three,
    CardTypeEnum.Four,
    CardTypeEnum.Five,
    CardTypeEnum.Six,
    CardTypeEnum.Seven,
    CardTypeEnum.Eight,
    CardTypeEnum.Nine,
    CardTypeEnum.Ten,
    CardTypeEnum.Jack,
    CardTypeEnum.Queen,
    CardTypeEnum.King,
    CardTypeEnum.Ace,
    CardTypeEnum.Joker];
const seriesColorList = [CardColorEnum.Clubs, CardColorEnum.Diamonds, CardColorEnum.Hearts, CardColorEnum.Spades]

const getSeries = (type: any): ShitheadCardBase[] => {
    const series: ShitheadCardBase[] = [];
    if (type === CardTypeEnum.Joker) {
        for (let i = 0; i < 2; i++) {
            const jokerCard: ShitheadCardBase = {
                type,
                color: CardColorEnum.None,
                visibility: CardVisibilityType.Hidden
            };
            series.push(jokerCard)
        }
    } else {
        seriesColorList.forEach(color => {
            if (CardColorEnum.hasOwnProperty(color)) {
                const newSeriesCard: ShitheadCardBase = {
                    type,
                    color: color as CardColorEnum,
                    visibility: CardVisibilityType.Hidden
                }
                series.push(newSeriesCard)
            }
        });
    }
    return series;
}

export const getStandardDeck = (exclude: ShitheadCardBase[] = []): ShitheadCardBase[] => {
    let newDeck: ShitheadCardBase[] = [];
    let x = 0;
    cardTypes.forEach(cardType => {
        const cardSeries = getSeries(cardType);
        newDeck = newDeck.concat(cardSeries);
    });
    // console.log("Ordered card deck:");
    // console.log(newDeck);
    // console.log(`Deck count: ${newDeck.length}`);
    return newDeck;
}