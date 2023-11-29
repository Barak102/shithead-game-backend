import { ShitheadGame } from "../models/Game";
import { ShitheadPlayer } from "../models/ShitheadPlayer";
import { User } from "../models/User";

export class GameMockProvider {
    private static game: ShitheadGame;


    public static instance = (): ShitheadGame => {
        if (!GameMockProvider.game) {
            GameMockProvider.game = new ShitheadGame();
        }
        return GameMockProvider.game;
    }

    private constructor() {

    }




    public static getPlayers = (): ShitheadPlayer[] => {
        const players: ShitheadPlayer[] = [];
        const randomNames: User[] = [
            {
                firstName: "Barak",
                lastName: "Josef",
                age: 32,
                loses: 0
            },
            {
                firstName: "Aviram",
                lastName: "Asraf",
                age: 23,
                loses: 0
            }]
        randomNames.forEach(userProfile => {
            const newPlayer: ShitheadPlayer = {
                userProfile,
                cards: []
            };
            players.push(newPlayer);
        })
        return players;
    }
}