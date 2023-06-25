export interface PlayerModel {
  uid: string;
  name: string;
}

export interface PlayersStoreModel {
  players: PlayerModel[];
  selectedPlayers: string[];

  onAddPlayer: (player: PlayerModel) => void;
  onSelectPlayer: (uid: string) => void;
  onSelectAllPlayers: () => void;
}
