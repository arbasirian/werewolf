import { Checkbox, CloseButton } from "@mantine/core";
import { PlayerModel } from "models";
import React from "react";
import { PlayerContainer } from "./player.styles";
import usePlayersStore from "store/players.store";

interface Props {
  info: PlayerModel;
}
const Player: React.FC<Props> = ({ info }) => {
  const { selectedPlayers, onSelectPlayer } = usePlayersStore();
  const checked = selectedPlayers.includes(info.uid);
  return (
    <PlayerContainer>
      <Checkbox checked={checked} onClick={() => onSelectPlayer(info.uid)} />
      <div>{info.name}</div>
      <CloseButton title="Close popover" size="xl" iconSize={20} />
    </PlayerContainer>
  );
};

export default Player;
