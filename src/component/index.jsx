import React from 'react';
import FunctionalComponen from './sub_componen/FunctionalComponen';

export default class component extends React.Component {
  render() {
    const mern = ['mongodb', 'exspres', 'react', 'nodejs'];
    return (
      <>
        <FunctionalComponen nama={mern} />
      </>
    );
  }
}
