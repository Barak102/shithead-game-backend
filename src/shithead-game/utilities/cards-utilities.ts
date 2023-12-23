import { CardColorEnum } from '../../shared/enums/card-color.enum';
import { CardTypeEnum } from '../../shared/enums/card-type.enum';
import { CardVisibilityTypeEnum } from '../../shared/enums/card-visibility-type.enum';
import { ShitheadCardBase } from '../../shared/models/shit-head-card-base';
import { ShitheadPlayer } from '../../shared/entities/shit-head-player';

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
  CardTypeEnum.Joker,
];
const seriesColorList = [
  CardColorEnum.Clubs,
  CardColorEnum.Diamonds,
  CardColorEnum.Hearts,
  CardColorEnum.Spades,
];

const getSeries = (type: any): ShitheadCardBase[] => {
  const series: ShitheadCardBase[] = [];
  if (type === CardTypeEnum.Joker) {
    for (let i = 0; i < 2; i++) {
      const jokerCard: ShitheadCardBase = {
        type,
        color: CardColorEnum.None,
        visibility: CardVisibilityTypeEnum.Hidden,
      };
      series.push(jokerCard);
    }
  } else {
    seriesColorList.forEach((color) => {
      if (CardColorEnum.hasOwnProperty(color)) {
        const newSeriesCard: ShitheadCardBase = {
          type,
          color: color as CardColorEnum,
          visibility: CardVisibilityTypeEnum.Hidden,
        };
        series.push(newSeriesCard);
      }
    });
  }
  return series;
};

export const getStandardDeck = (
  exclude: ShitheadCardBase[] = [],
): ShitheadCardBase[] => {
  let newDeck: ShitheadCardBase[] = [];
  cardTypes.forEach((cardType) => {
    const cardSeries = getSeries(cardType);
    newDeck = newDeck.concat(cardSeries);
  });
  return newDeck;
};

export const dealCardToPlayer = (
  deck: ShitheadCardBase[],
  player: ShitheadPlayer,
  amount: number,
): void => {
  for (let i = 0; i < amount; i++) {
    const cardFromDeck = deck.pop();
    if (cardFromDeck) {
      const firstThreeCards = i < 3;
      cardFromDeck.visibility = firstThreeCards
        ? CardVisibilityTypeEnum.Hidden
        : CardVisibilityTypeEnum.Hand;
      player.cards.push(cardFromDeck);
    }
  }
};
