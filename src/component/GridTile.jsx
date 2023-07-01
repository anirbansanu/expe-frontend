import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GridTile = ({ text, icon, bg }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-8 px-2 py-2 mx-2 my-2 px-md-2 py-md-2 mx-md-2 my-md-2 px-lg-3 py-lg-3 mx-lg-4 my-lg-4 rounded-11" style={{background:bg}}>
      <Card style={{background:bg}}>
        <Card.Body className="text-center">
          <FontAwesomeIcon icon={icon} size="2x" className="mb-3" />
          <Card.Title>{text}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default GridTile;