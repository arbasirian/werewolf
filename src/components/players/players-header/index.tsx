import React from "react";
import { FormattedMessage } from "react-intl";
import { Checkbox } from "@mantine/core";

import { HeaderContainer, HeaderTitle } from "./players-header.styles";
import usePlayersStore from "store/players.store";

const PlayersHeader: React.FC = () => {
  const { selectedPlayers, players, onSelectAllPlayers } = usePlayersStore();
  const checked =
    players.length === selectedPlayers.length && selectedPlayers.length > 0;
  const indeterminate =
    selectedPlayers.length > 0 && selectedPlayers.length < players.length;

  return (
    <HeaderContainer>
      <Checkbox
        checked={checked}
        indeterminate={indeterminate}
        onClick={onSelectAllPlayers}
      />
      <HeaderTitle>
        <FormattedMessage id="players" defaultMessage="Players List" />
      </HeaderTitle>
    </HeaderContainer>
  );
};

export default PlayersHeader;
