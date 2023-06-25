export interface PlayerModel {
  uid: string;
  name: string;
}

export interface PlayersStoreModel {
  players: PlayerModel[];
  addNewPlayers: (player: PlayerModel) => void;
}
