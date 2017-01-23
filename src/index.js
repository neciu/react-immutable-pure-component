/*
  Copyright (C) 2017 Piotr Tomasz Monarski.
  Licensed under the MIT License (MIT), see
  https://github.com/Monar/bem-names
*/

import React from 'react';
import { is } from 'immutable';


export class ImmutablePureComponent extends React.PureComponent {

  shouldComponentUpdate(nextProps, nextState) {
    const checkStates = this.updateOnStates || Object.keys(nextState || {});
    const checkProps = this.updateOnProps || Object.keys(nextProps);
    const state = this.state || {};

    return !checkStates.every((s) => is(nextState[s], state[s]))
      || !checkProps.every((p) => is(nextProps[p], this.props[p]));
  }
}
export default ImmutablePureComponent;