# react-fab

[![CircleCI](https://circleci.com/gh/nerp-tech/react-fab/tree/master.svg?style=svg)](https://circleci.com/gh/nerp-tech/react-fab/tree/master) [![npm version](https://badge.fury.io/js/react-fab.svg)](https://badge.fury.io/js/react-fab)

Floating Action Buttons for React

- [Example usage repo](https://github.com/nerp-tech/react-fab-example)

## Installing

```
yarn add react-fab

# Dependencies:
yarn add prop-types classnames react react-dom
```

## Usage

```js
<Fab style={{ right: '20px', bottom: '20px' }}>
  <FabButton>
    +
  </FabButton>
  <FabActions>
    <FabAction
      className="button button-royal"
      onClick={this.handleCreateGroup}
      tooltip="Create Group"
    >
      G
    </FabAction>
    <FabAction
      className="button button-balanced"
      onClick={this.handleCreateMemo}
      tooltip="Create Memo"
    >
      C
    </FabAction>
  </FabActions>
</Fab>
```

This package also come with a scss file that you can use:

```
# JavaScript import:
import 'react-fab/dist/main.scss';

# - OR -

# Scss import:
import '{}/node_modules/react-fab/dist/main.scss';
```

The following variables are overrideable:

```
$fab-button: #FFDD6B !default;
$fab-dark: #111 !default;
$fab-light: #fff !default;
$fab-text: #4a4943 !default;
$fab-z-index: 998 !default;
$fab-transition-speed: 0.2s !default;
$fab-transition-speed-delayed: 0.3s !default;
```
