import React from 'react';
import {
  string,
} from 'prop-types';

const PersonCard = ({
  _id,
  accountNumber,
  name,
  email,
  socialSecurity,
}) => (
  <div key={_id} className="col-md-3 margin-bottom-1">
    <div className="card card-lg rounded-md text-center border zoom hover">
      <div className="card-block">
        <h5>{name}</h5>
        <p>{email}</p>
        <p>{socialSecurity}</p>
        <p>{accountNumber}</p>
      </div>
    </div>
  </div>
);

PersonCard.propTypes = {
  _id: string.isRequired,
  accountNumber: string,
  name: string,
  email: string,
  socialSecurity: string,
};

export default PersonCard;
