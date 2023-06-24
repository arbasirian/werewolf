export interface PlayerModel {
  uid: number;
  name: string;
}

export interface PlayersStoreModel {
  players: PlayerModel[];
}
