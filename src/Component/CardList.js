import React from 'react';
import Cards from './Cards'
import { CardGroup } from 'react-bootstrap'

class CardList extends React.Component {
  render(){
  return (
    <CardGroup>
    {this.props.routebrief.map(
      cardroutes => (
      <Cards key={cardroutes.RouteID}{...cardroutes}/>
    ))
    }
    </CardGroup>
  )
  }
}

export default CardList;