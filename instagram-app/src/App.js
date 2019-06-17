import React, { Component } from "react";
import "./App.css";
import dummyData from "./components/dummy-data";
import Container from "./components/PostContainer/container";
import Searchbar from "./components/SearchBar/Searchbar";

 class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    };
  }

   render() {
    return (
      <div>
        <Searchbar />
        <Container
          data={this.state.data.map(obj => {
            return obj;
          })}
        />
      </div>
    );
  }
}

 export default App;