import React from 'react';
import {Checkbox} from '@mantine/core';
import {FormattedMessage} from 'react-intl';

const PlayersHeader: React.FC = () => {
  return (
    <div>
      <Checkbox />
      <div>
        <FormattedMessage id="players" defaultMessage="Players List" />
      </div>
    </div>
  );
};

export default PlayersHeader;
