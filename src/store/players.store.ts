import { create } from "zustand";

import { PlayerModel, PlayersStoreModel } from "models";

const usePlayersStore = create<PlayersStoreModel>(set => ({
  players: [],
  addNewPlayers: (info: PlayerModel) =>
    set(state => ({ players: [...state.players, info] }))
}));

export default usePlayersStore;
