/*
 * penis
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

export default class Penis extends React.PureComponent {
  render() {
    return (
      <h1>
         <p>Name: { this.props.name }</p>
         <p>Länge: { this.props.long } </p>
         <p>Beharung: { this.props.beharung } </p>
      </h1>
    );
  }
}
