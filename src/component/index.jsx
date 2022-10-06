import React from 'react';
import ClassComponen from './sub_componen/classCoponen';
import Fungsi from './sub_componen/functionalComponen';

export default class component extends React.Component {
  render() {
    const mern = ['mongodb', 'exspres', 'react', 'nodejs'];
    return (
      <>
        <ClassComponen nama="gumelar wicaksono this props in classcomponen" />
        <Fungsi nama={mern} />
      </>
    );
  }
}
