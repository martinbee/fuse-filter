import React, { Component } from 'react';

import './App.css';
import AppHeader from './AppHeader';
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
    values: ['1000', '5000', '10000'],
    stateKey: 'dataCount',
  },
  {
    title: 'Display Limit',
    values: ['5', '10', '20', '50'],
    stateKey: 'displayLimit',
  },
  {
    title: 'Display Initial Data',
    values: ['Yes', 'No'],
    stateKey: 'initialDisplay',
  },
  {
    title: 'RenderItem Function',
    values: ['Card', 'Default'],
    stateKey: 'renderItemFunction',
  },
];

class App extends Component {
  state = {
    debounce: '100',
    dataCount: '1000',
    displayLimit: '5',
    initialDisplay: 'Yes',
    renderItemFunction: 'Card',
  }

  //constructor() {
    //super();
    //this.state = {
      //debounce: '100',
      //dataCount: '1000',
      //displayLimit: '5',
      //initialDisplay: true,
      //renderItemFunction: 'Card',
    //};
  //}

  //setDemoOption(evt, stateKey) {
    //console.log(evt, stateKey);
    //const newState = this.state;

    //newState[stateKey] = evt.target.value;

    //this.setState(newState);
  //};

  setDemoOption = (evt, stateKey) => {
    const newState = this.state;

    newState[stateKey] = evt.target.value;

    this.setState(newState);
  };

  //renderOptionInputs() {
    //return demoOptions.map(({ title, values, stateKey }) => (
      //<div>
        //<div>
          //{title}
        //</div>
        //<select onChange={evt => this.setDemoOption(evt, stateKey)}>
          //{values.map(value => <option value={value}>value</option>)}
        //</select>
      //</div>
    //));
  //};

  renderOptionInputs = () => {
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
  };

  render() {
    const {
      debounce,
      dataCount,
      displayLimit,
      initialDisplay,
      renderItemFunction
    } = this.state;
    console.log(this.state);

    return (
      <div className="App">
        <AppHeader />
        {this.renderOptionInputs()}
        <br />
        <FilterContainer
          debounce={}
          data={[]}
          fuseConfig={{}}
          renderItem={Card}
          onChange={() => {}}
          displayOptions={{
            limit: displayLimit,
            initialData,
          }}
        />
      </div>
    );
  }
}


export default App;


//| debounce        | number                               | 400                                  | No       |
//| title           | string                               | "Fuse Filter"                        | No       |
//| data            | array                                |                                      | Yes      |
//| fuseConfig      | object                               |                                      | Yes      |
//| renderItem      | function                             | `() => <div>{fuseCOnfig.key1}</div>` | No       |
//| onChange        | function                             |                                      | No       |
//| displayOptions  | object                               | See below                            | No       |
//| - limit         | number                               | 9                                    | No       |
//| - initialData   | bool                                 | false                                | No       |
