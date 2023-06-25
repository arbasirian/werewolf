import React from "react";
import usePlayersStore from "store/players.store";
import Player from "../player";
import { EmptyListWrapper } from "./players-list.styles";

const PlayersList: React.FC = () => {
  const { players } = usePlayersStore();

  if (players.length === 0)
    return <EmptyListWrapper>There is no player yet</EmptyListWrapper>;

  return (
    <div>
      {players.map(i => (
        <Player key={i.uid} info={i} />
      ))}
    </div>
  );
};

export default PlayersList;
