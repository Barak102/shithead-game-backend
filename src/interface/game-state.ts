export interface IGameState {
    subscribe(method: any): void;
    sendEvent(eventType: any): void;
}