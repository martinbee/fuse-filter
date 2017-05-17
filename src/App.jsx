import React, { Component } from 'react';
import classNames from 'classnames';

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
    stateKey: 'resultsLimit',
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
    debounce: '200',
    dataCount: '1000',
    resultsLimit: '12',
    componentType: 'Filter',
    renderItemFunction: 'PersonCard',
    optionsIsActive: true,
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
      resultsLimit,
      renderItemFunction,
    } = this.state;

    const filterProps = {
      data: people.slice(0, dataCount),
      debounce: Number(debounce),
      resultsLimit: Number(resultsLimit),
      showDefaultData: componentType === 'Filter',
      fuseConfig,
      inputPlaceholder: 'Enter keywords...',
    };

    // refactor for multiple example components
    if (renderItemFunction === 'PersonCard') filterProps.renderItem = PersonCard;

    return filterProps;
  }

  toggleOptions = () => this.setState({ optionsIsActive: !this.state.optionsIsActive });

  renderOptionsContainer() {
    const { optionsIsActive } = this.state;

    const containerClasses = classNames(
      'App-options',
      { 'options-is-active': optionsIsActive },
    );
    const buttonClasses = classNames(
      'options-toggle-btn',
      { 'btn-is-active': optionsIsActive },
    );

    const toggleOptionsButtonContent = optionsIsActive ? 'Hide Options' : 'Show Options';

    return (
      <div className={containerClasses}>
        {this.renderOptionsInputs()}
        <button
          className={buttonClasses}
          onClick={this.toggleOptions}
        >
          {toggleOptionsButtonContent}
        </button>
      </div>
    );
  }

  renderOptionsInputs() {
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
        {this.renderOptionsContainer()}
        <FilterContainer {...filterProps} />
      </div>
    );
  }
}
