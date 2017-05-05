const fuseConfig = {
  shouldSort: true,
  threshold: 0.3,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 3,
  keys: [
    'accountNumber',
    'name',
    'socialSecurity',
  ],
};

export default fuseConfig;

// data shape
  //{
    //_id: '{{objectId()}}',
    //accountNumber: '{{integer(0,9)}}{{firstName().slice(0,1)}}{{integer(0,9)}}{{firstName().slice(0,1)}}{{integer(0,9)}}',
    //avatar: 'http://placekitten.com/80/80',
    //name: '{{firstName()}} {{surname()}}',
    //email: '{{email()}}',
    //phone: '+1 {{phone()}}',
    //address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}',
    //socialSecurity: '{{integer(100,999)}}-{{integer(10,99)}}-{{integer(1000,9999)}}'
  //}
