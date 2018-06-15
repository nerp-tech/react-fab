import React from 'react';
import { storiesOf } from '@storybook/react';

import { Fab, FabButton, FabActions, FabAction } from './';

import '../dist/main.scss';

const noop = () => {};

storiesOf('FAB', module)
  .add('with auto close', () => (
    <div>
      <Fab style={{ right: '20px', bottom: '20px' }}>
        <FabButton>
          +
          </FabButton>
        <FabActions>
          <FabAction
            className="button button-royal"
            onClick={noop}
            tooltip="Create Group"
          >
            G
          </FabAction>
          <FabAction
            className="button button-balanced"
            onClick={noop}
            tooltip="Create Memo"
          >
            C
          </FabAction>
        </FabActions>
      </Fab>
    </div>
  ))
  .add('with auto close disabled', () => (
    <div>
      <Fab style={{ right: '20px', bottom: '20px' }}>
        <FabButton>
          +
        </FabButton>
        <FabActions>
          <FabAction
            closeOnClick={false}
            className="button button-royal"
            onClick={noop}
            tooltip="Create Group"
          >
            G
          </FabAction>
          <FabAction
            closeOnClick={false}
            className="button button-balanced"
            onClick={noop}
            tooltip="Create Memo"
          >
            C
          </FabAction>
        </FabActions>
      </Fab>
    </div>
  ));

