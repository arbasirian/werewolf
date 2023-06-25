import React from "react";
import { FormattedMessage } from "react-intl";
import { Checkbox } from "@mantine/core";

import { HeaderContainer, HeaderTitle } from "./players-header.styles";

const PlayersHeader: React.FC = () => {
  return (
    <HeaderContainer>
      <Checkbox />
      <HeaderTitle>
        <FormattedMessage id="players" defaultMessage="Players List" />
      </HeaderTitle>
    </HeaderContainer>
  );
};

export default PlayersHeader;
