import React from "react";
import usePlayersStore from "store/players.store";
import Player from "../palyer";

const PlayersList: React.FC = () => {
  const { players } = usePlayersStore();

  if (players.length === 0) return <>There is no player yet</>;

  return (
    <div>
      {players.map(i => (
        <Player key={i.uid} info={i} />
      ))}
    </div>
  );
};

export default PlayersList;
