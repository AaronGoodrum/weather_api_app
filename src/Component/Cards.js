import React from "react";
import { Card, Button } from 'react-bootstrap'

const TripDate = '2019-10-17'

class Cards extends React.Component {
  
  render(){
    const response = this.props
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>
            {response.Description}
            <Card.Text>Route ID: {response.RouteID}</Card.Text>
            <Card.Text>Route abbr: {response.RouteAbbrev}</Card.Text>
          </Card.Title>
          <Card.Text>
            {response.ServiceDisruptions}
          </Card.Text>
          <Card.Text>
          PublishDate : {TripDate}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
}
}

export default Cards;
