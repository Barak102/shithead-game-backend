export class CreateRoomDto {
    name?: string;
    number_of_slots: number;
    private_room?: {
        owner_id?: string; // will be replaced with user_id
        slots: number; // number of players that can join the game
        password: string;
        joinOnlyWithInviteLink: boolean; // if true: no password needed
    }
}