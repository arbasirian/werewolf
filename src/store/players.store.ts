import {create} from 'zustand';

import {PlayersStoreModel} from 'models';

const usePlayersStore = create<PlayersStoreModel>(set => ({
  players: [],
  addNewPlayers: () => set(state => ({players: [...state.players]}))
}));

export default usePlayersStore;
