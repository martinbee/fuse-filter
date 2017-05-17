const fuseConfig = {
  shouldSort: true,
  threshold: 0.3,
  location: 0,
  distance: 80,
  maxPatternLength: 32,
  minMatchCharLength: 3,
  keys: [
    'accountNumber',
    'name',
    'socialSecurity',
  ],
};

export default fuseConfig;
