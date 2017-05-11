# Fuse Filter Demo

Fuse Filter is a wrapper component for [fuse.js](http://fusejs.io/ "Fuse.js").
Fuse.js is a library that provides configurable and quick filtering of data.


## Props

| PropName               | Type                                 | Default                              | Required |
| ---------------------- | ------------------------------------ | ------------------------------------ | -------- |
| data                   | array                                |                                      | Yes      |
| fuseConfig             | object                               |                                      | Yes      |
| debounce               | number                               | 400                                  | No       |
| renderItem             | function                             | DefaultCard component                | No       |
| resultsLimit           | number                               | 12                                   | No       |
| showDefaultData        | bool                                 | true                                 | No       |
| inputPlaceholder       | string                               | ''                                   | No       |
| selectKeys             | bool                                 | false                                | No       |


### Props in Detail

#### data:
The data to be filtered. Should be an array of objects.

#### fuseConfig:
The fuse configuration object. See [fuse.js](http://fusejs.io/) for
examples and for a custom options creator. The keys array is a required
property,

#### debounce:
Sets the debounce rate on the fuse filter. This prevents unnecessary
filtering and allows users to customize how often filtering occurs.

#### renderItem:
A function that tells Fuse Filter how you want to render each
filtered data item. This function is mapped over and provided each dataItem, its
index, and the 'fuseConfig.keys' if 'selectKeys' is true.

##### renderItem Examples:
- Functional React component (see DefaultCard usage in demo)
- Function that takes dataItem and renders react.
  ```javascript
  (dataItem, index, fuseConfigKeys) => <div key={dataItem.uniqueKey}>{dataItem.value}</div>;
  ```
- Function that renders a React component using the given arguments
  ```javascript
  dataItem => <ExampleCard key={dataItem._id} dataItem={dataItem} />;
  ```

#### resultsLimit:
The number of results that should be shown on each filter.

#### showDefaultData:
A boolean that dictates whether or not unfiltered data is shown
when there is no filterTerm set (i.e. the filter input is empty).

#### inputPlaceholder:
The placeholder of the search/filter input, if any.

#### selectKeys:
A boolean that dictates whether or not a select fields dropdown is injected into
the form. This dropdown will allow users to select from the 'fuseConfig.keys' and
specify which keys they wish to filter by.


## Layout

FuseFilter (Container)
- FuseDisplay (Display)
  - Input  (Handles user input)
  - Results (Displays filtered data using renderItem())


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
