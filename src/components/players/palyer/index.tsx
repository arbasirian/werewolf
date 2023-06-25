import { PlayerModel } from "models";
import React from "react";

interface Props {
  info: PlayerModel;
}
const Player: React.FC<Props> = ({ info }) => {
  return <div>{info.name}</div>;
};

export default Player;
