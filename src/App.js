import React from "react";
import Body from "./Component/Body";
import "./App.css";

const axios = require("axios");

class App extends React.Component {
    
  state = {
    APIAccessCode:"?apiaccesscode=babfc5df-b6f1-42df-b555-c89d6d3f0cb4",
    TripDate:'2019-10-17',
    Routes:'routes',
    routebriefresponse:[]
  };

  addNewData = (newDATA) => {
    this.setState(prevState =>({
      routebriefresponse: [...prevState.routebriefresponse, newDATA]
    }))
  }

  newData = async (data) => {
    data.preventDefault()
    // Make a request for a user with a given ID
    console.log("test GET");
    try {
      const resp = await 
      axios.create({
        baseURL:'https://www.wsdot.wa.gov/Ferries/API/Schedule/rest'
      })
          .get(`/${this.state.Routes}/${this.state.TripDate}${this.state.APIAccessCode}`)
          // handle success
            this.addNewData(resp)
            console.log("get", resp.data);
            }
    catch (error) {
            // handle error
            console.log(error);
          }
  }

  render() {
    return (
      <div className="App">
        <header onClick={this.newData} className="App-header">
          <h1> Weather API App </h1>
          <p>Test</p>
        </header>
        <Body routebrief={this.state.routebriefresponse} />
      </div>
    );
  }
}

export default App;
