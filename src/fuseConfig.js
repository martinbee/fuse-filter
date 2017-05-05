const fuseConfig = {
  shouldSort: true,
  threshold: 0.3,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 3,
  keys: [
    'participantName',
    'clientId',
    'employeeId',
    'accountNumber',
    'planAdmin',
  ],
};

export default fuseConfig;
