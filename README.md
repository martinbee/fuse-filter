# Fuse Filter Demo

Fuse Filter is a wrapper component for [fuse.js](http://fusejs.io/ "Fuse.js").
Fuse.js is a library that provides configurable and quick filtering of data.


## Props

| PropName               | Type                                 | Default                              | Required |
| ---------------------- | ------------------------------------ | ------------------------------------ | -------- |
| debounce               | number                               | 400                                  | No       |
| title                  | string                               | "Fuse Filter"                        | No       |
| data                   | array                                |                                      | Yes      |
| fuseConfig             | object                               |                                      | Yes      |
| renderItem             | function                             | DefaultCard component                | No       |
| displayOptions         | object                               | See below                            | No       |
| - limit                | number                               | 12                                   | No       |
| - showBlankStateData   | bool                                 | true                                 | No       |


### Props in Detail

#### debounce: Sets the debounce rate on the fuse filter. This prevents unnecessary
filtering and allows users to customize how often filtering occurs.

#### title: The title that displays in the Fuse Filter headers (may be removed).

#### data: The data to be filtered. Should be an array of objects.

#### fuseConfig: The fuse configuration object. See [fuse.js](http://fusejs.io/) for
examples and for a custom options creator.

#### renderItem: A function that tells Fuse Filter how you want to render each
filtered data item. This function is mapped over and provided each dataItem.

##### renderItem Examples:
- React component (see DefaultCard usage in demo)
- Function that takes dataItem and renders react. `dataItem =>
  <div key={dataItem.uniqueKey}>{dataItem.value}</div>`

#### displayOptions: An object that contains limit and showBlankStateData.

#### limit: The number of results that should be shown on each filter.

#### showBlankStateData: A boolean that dictates whether or not unfiltered data is shown
when there is no filterTerm set (i.e. the filter input is empty).


## Layout

FuseFilter (Container)
- FuseDisplay (Display)
  - Header (Displays title)
  - Input  (Handles user input)
  - Results (Displays filtered data using renderItem())


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
