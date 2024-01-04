export class JoinRoomDto {
  userId: string; // will get by token in the future
  roomId: string;
  password?: string;
}
