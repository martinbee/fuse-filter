import React from 'react';

const PersonCard = ({
  id,
  participantName,
  clientId,
  employeeId,
  accountNumber,
  planAdmin,
}) => (
  <div key={id} className="col-md-3 margin-bottom-1">
    <div className="card card-lg rounded-md text-center border zoom hover">
      <div className="card-block">
        <h5>{participantName}</h5>
        <p>{clientId}</p>
        <p>{employeeId}</p>
        <p>{accountNumber}</p>
        <p>{planAdmin}</p>
      </div>
    </div>
  </div>
);


export default PersonCard;
