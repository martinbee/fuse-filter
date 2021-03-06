import React from 'react';

// I hate this custom key business but I'm not sure how else to do it right now
const DefaultCard = (dataItem, index, keys) => {
  const dataValues = keys.map(key => dataItem[key]);
  const customKey = `${dataValues[0]}${index}`;

  const renderDataValues = () => (
    dataValues.map(dataValue => <p key={dataValue}>{dataValue}</p>)
  );

  return (
    <div key={customKey} className="col-lg-3 col-md-4 col-sm-6 margin-bottom-1">
      <div className="card card-lg rounded-md text-center border zoom hover">
        <div className="card-block">
          {renderDataValues()}
        </div>
      </div>
    </div>
  );
};


export default DefaultCard;
