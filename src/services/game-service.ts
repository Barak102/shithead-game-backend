import { CardVisibilityType } from "../enums/CardVisibilityType";
import { ShitheadGame } from "../models/Game";
import { ShitheadCardBase } from "../models/ShitheadCardBase";
import { ShitheadPlayer } from "../models/ShitheadPlayer";
import { GameMockProvider } from "../providers/GameMockProvider";
import { getStandardDeck } from "../utilities/cards-utilities";

export class GameService {

    private game = GameMockProvider.instance();


    private getGame(): ShitheadGame {
        return this.game;
    }

    createNewGame(): ShitheadGame {
        const game = this.getGame();
        const deck = getStandardDeck();
        const shuffledDeck = this.shuffleDeck(deck);
        game.deck = shuffledDeck;
        game.players = GameMockProvider.getPlayers();
        this.deal();
        console.log(JSON.stringify(game.players));
        
        return this.game;
    }

    private pickCard(): void {
        // check if there is a deck
        const player: ShitheadPlayer=  new ShitheadPlayer();
        const cardFromDeck = this.game.deck.pop() as ShitheadCardBase;
        player.cards.push(cardFromDeck)
    }

    deal(): void {
        const game = this.getGame();
        game.players.forEach(p => {
            for (let i = 0; i < 9; i++) {
                const cardFromDeck = game.deck.pop();
                if(cardFromDeck) {
                    const firstThreeCards = i < 3;
                        cardFromDeck.visibility = firstThreeCards ? CardVisibilityType.Hidden : CardVisibilityType.Hand;
                    p.cards.push(cardFromDeck);
                }
            }
        });
    }

    putCards(): void {
        // check what is the meaning of the last card on the middle cards
        // take one card from the player and set it on the middle card
        // if there is a cards in the deck, pick card from the deck.
    }

    breakIn(): void {
        // take a cards from the player which is not his turn,
        // check if the player can breakIn with his cards,
        // if so, the card will
    }

    pickAll(): void {
        // get all the middle cards and move it to the plyer deck
        // only if the user doesn't has any card to put.
    }

    private burn(): void {

    }

    private shuffleDeck(deck: any[]): ShitheadCardBase[] {
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
        return deck;
    }
}