/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Penis from 'components/penis';
import annyang from 'annyang';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super();
    this.state = {
      nachrichtOpen: true,
      receipient: '',
    };

    var commands = {
      'hello *receipient':  (receipient) => this.sendMessage(receipient),
    };

    // Add our commands to annyang 
    annyang.addCommands(commands);

    // Start listening. 
    annyang.start();
  }

  berechneLaenge = (v) => {

    const value = v + 5;

    return `${value}cm`;
  }

  sendMessage = (receipient) => {
    this.setState({ receipient });
  }

  componentDidMount() {

  }

  render() {
    return (
      <main>
        {this.state.nachrichtOpen &&
          <h1>Nachricht an: {this.state.receipient}</h1>
        }
        <Penis name='Ständer' beharung='braun' long={this.berechneLaenge(15)} />
      </main>
    );
  }
}
