import React from 'react';
import ClassComponen from './sub_componen/ClassCoponen';
import FunctionalComponen from './sub_componen/FunctionalComponen';

export default class component extends React.Component {
  render() {
    const mern = ['mongodb', 'exspres', 'react', 'nodejs'];
    return (
      <>
        <ClassComponen nama="gumelar wicaksono this props in classcomponen" />
        <FunctionalComponen nama={mern} />
      </>
    );
  }
}
