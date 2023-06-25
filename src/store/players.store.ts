import { create } from "zustand";

import { PlayerModel, PlayersStoreModel } from "models";

const usePlayersStore = create<PlayersStoreModel>(set => ({
  players: [],
  selectedPlayers: [],
  onAddPlayer: (info: PlayerModel) =>
    set(state => ({ ...state, players: [...state.players, info] })),
  onSelectPlayer: (uid: string) =>
    set(state => {
      const alreadySelected = state.selectedPlayers.find(i => i === uid);
      if (alreadySelected)
        return {
          ...state,
          selectedPlayers: [...state.selectedPlayers].filter(i => i !== uid)
        };
      return { ...state, selectedPlayers: [...state.selectedPlayers, uid] };
    }),
  onSelectAllPlayers: () =>
    set(state => {
      if (state.selectedPlayers.length < state.players.length)
        return {
          ...state,
          selectedPlayers: state.players.map(i => i.uid)
        };

      return {
        ...state,
        selectedPlayers: []
      };
    })
}));

export default usePlayersStore;
