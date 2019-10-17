import React from "react";
import Body from "./Component/Body";
import "./App.css";

const axios = require("axios");
const wsdot = "http://www.wsdot.wa.gov/Ferries/API/Schedule/rest/routes/";
const APIAccessCode = "?apiaccesscode=babfc5df-b6f1-42df-b555-c89d6d3f0cb4";
const TripDate = "2019-10-17";

class App extends React.Component {
  state = {
    routebriefresponse: [
      {
        RouteID: 272,
        RouteAbbrev: "ana-sj-sid",
        Description: "Anacortes / San Juan Islands / Sidney B.C.",
        RegionID: 1,
        ServiceDisruptions: []
    },
    {
        RouteID: 6,
        RouteAbbrev: "ed-king",
        Description: "Edmonds / Kingston",
        RegionID: 3,
        ServiceDisruptions: []
    },
    {
      RouteID: 273,
      RouteAbbrev: "ana-sj-sid",
      Description: "Anacortes / San Juan Islands / Sidney B.C.",
      RegionID: 13,
      ServiceDisruptions: []
  },
  {
      RouteID: 655,
      RouteAbbrev: "ed-king",
      Description: "Edmonds / Kingston",
      RegionID: 34,
      ServiceDisruptions: []
  }
    ]
  };

  newData = async (data) => {
    data.preventDefault()
    // Make a request for a user with a given ID
    console.log("test GET");
    try {
      const resp = await 
      axios
          .get(wsdot + TripDate + APIAccessCode)
          // handle success
            // this.props.onClick(resp);
            console.log("get", resp);
            }
    catch (error) {
            // handle error
            console.log(error);
          }
  };

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
