import React, { Component } from 'react';

import './App.css';
import fuseConfig from './fuseConfig';
import people from './data/10000.json';

import AppHeader from './components/AppHeader';
import FilterContainer from './components/FilterContainer';
import PersonCard from './components/cards/PersonCard';

const demoOptions = [
  {
    title: 'Debounce',
    values: ['200', '250', '300'],
    stateKey: 'debounce',
  },
  {
    title: 'Data Item Count',
    values: ['1000', '5000', '10000'],
    stateKey: 'dataCount',
  },
  {
    title: 'Display Limit',
    values: ['12', '24', '50', '100'],
    stateKey: 'limit',
  },
  {
    title: 'Component Type',
    values: ['Filter', 'Search'],
    stateKey: 'componentType',
  },
  {
    title: 'RenderItem Function',
    values: ['PersonCard', 'Default'],
    stateKey: 'renderItemFunction',
  },
];

export default class App extends Component {
  state = {
    debounce: '250',
    dataCount: '1000',
    limit: '12',
    componentType: 'Filter',
    renderItemFunction: 'PersonCard',
  };

  setDemoOption(evt, stateKey) {
    const newState = {};

    newState[stateKey] = evt.target.value;

    this.setState(newState);
  }

  getFilterProps() {
    const {
      debounce,
      dataCount,
      componentType,
      limit,
      renderItemFunction,
    } = this.state;

    const filterProps = {
      data: people.slice(0, dataCount),
      debounce: Number(debounce),
      displayOptions: {
        limit: Number(limit),
        showBlankStateData: componentType === 'Filter',
      },
      fuseConfig,
    };

    if (renderItemFunction === 'PersonCard') filterProps.renderItem = PersonCard;

    return filterProps;
  }

  renderOptionInputs() {
    return demoOptions.map(({ title, values, stateKey }) => (
      <div key={stateKey} className="filter">
        <div>
          {title}
        </div>
        <select onChange={evt => this.setDemoOption(evt, stateKey)}>
          {values.map(value => <option key={value} value={value}>{value}</option>)}
        </select>
      </div>
    ));
  }

  render() {
    const filterProps = this.getFilterProps();

    return (
      <div className="App">
        <AppHeader />
        <div className="App-filter">
          {this.renderOptionInputs()}
        </div>
        <FilterContainer {...filterProps} />
      </div>
    );
  }
}
