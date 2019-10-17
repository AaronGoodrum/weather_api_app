import React from 'react';
import CardList from './CardList'

class Body extends React.Component {
  render(){
  return (
    <div>
    <h1> Body </h1>
    <CardList routebrief={this.props.routebrief} />

    </div>
  );
  }
}

export default Body;