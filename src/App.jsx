import React, { Component } from 'react';

import './App.css';
import fuseConfig from './fuseConfig';
import people from './data/10000.json';

import AppHeader from './components/AppHeader';
import FilterContainer from './components/FilterContainer';
import Card from './components/Card';


const demoOptions = [
  {
    title: 'Debounce',
    values: ['100', '350', '600', '1000', '2000'],
    stateKey: 'debounce',
  },
  {
    title: 'Data Item Count',
    values: [1000, 5000, 10000],
    stateKey: 'dataCount',
  },
  {
    title: 'Display Limit',
    values: [5, 10, 20, 50],
    stateKey: 'limit',
  },
  {
    title: 'Display Initial Data',
    values: ['Yes', 'No'],
    stateKey: 'initialData',
  },
  {
    title: 'RenderItem Function',
    values: ['Card', 'Default'],
    stateKey: 'renderItemFunction',
  },
];

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      debounce: '100',
      dataCount: 1000,
      limit: 5,
      initialData: 'Yes',
      renderItemFunction: 'Card',
    };
  }

  setDemoOption(evt, stateKey) {
    const newState = {};

    newState[stateKey] = evt.target.value;

    this.setState(newState);
  }

  getFilterProps() {
    const {
      debounce,
      dataCount,
      initialData,
      limit,
      renderItemFunction,
    } = this.state;

    const filterProps = {
      debounce,
      data: people.slice(0, dataCount),
      displayOptions: {
        limit,
        initialData: initialData === 'Yes',
      },
      fuseConfig,
    };

    if (renderItemFunction === 'Card') filterProps.renderItem = Card;

    return filterProps;
  }

  renderOptionInputs() {
    return demoOptions.map(({ title, values, stateKey }) => (
      <div key={stateKey}>
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
        {this.renderOptionInputs()}
        <br />
        <FilterContainer {...filterProps} />
      </div>
    );
  }
}

//| debounce        | number                               | 400                                  | No       |
//| title           | string                               | "Fuse Filter"                        | No       |
//| data            | array                                |                                      | Yes      |
//| fuseConfig      | object                               |                                      | Yes      |
//| renderItem      | function                             | `() => <div>{fuseCOnfig.key1}</div>` | No       |
//| displayOptions  | object                               | See below                            | No       |
//| - limit         | number                               | 9                                    | No       |
//| - initialData   | bool                                 | false                                | No       |
