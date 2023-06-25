import React from "react";

import { PlayersList, NewPlayer } from "components";

const PlayersPage: React.FC = () => {
  return (
    <div>
      <PlayersList />
      <NewPlayer />
    </div>
  );
};

export default PlayersPage;
