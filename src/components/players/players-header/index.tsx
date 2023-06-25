import React from "react";
import { FormattedMessage } from "react-intl";
import { Checkbox } from "@mantine/core";

import { HeaderContainer } from "./players-header.styles";

const PlayersHeader: React.FC = () => {
  return (
    <HeaderContainer>
      <Checkbox />
      <div>
        <FormattedMessage id="players" defaultMessage="Players List" />
      </div>
    </HeaderContainer>
  );
};

export default PlayersHeader;
