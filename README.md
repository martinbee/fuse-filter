# Wrapper for [fuse.js]*(http://fusejs.io/).

## Props:

         | PropName        | Type                                 | Default                              | Required |
         | --------------- | ------------------------------------ | ------------------------------------ | -------- |
         | debounce        | number                               | 400                                  | No       |
         | title           | string                               | "Fuse Filter"                        | No       |
         | data            | array                                |                                      | Yes      |
         | fuseConfig      | object                               |                                      | Yes      |
         | renderItem      | function                             | `() => <div>{fuseCOnfig.key1}</div>` | No       |
         | onChange        | function                             |                                      | No       |
         | displayOptions  | object                               | See below                            | No       |
         | - limit         | number                               | 9                                    | No       |
         | - initialData   | bool                                 | false                                | No       |


## Layout:

FuseFilter (Container)
- FuseDisplay (Display)
  - Header (Displays title)
  - Input  (Handles onChange and user input)
  - Results (Displays filtered data using renderItem())


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
