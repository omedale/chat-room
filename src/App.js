import React, { Component } from "react";
import "./App.css";
import { SideBar } from "./components/containers/SideBar"
import { MessagesList } from "./components/containers/MessagesList"
import { AddMessage } from "./components/containers/AddMessage"

class App extends Component {
  render() {
    return (
      <div id="container">
        <SideBar />
        <section id="main">
          <MessagesList />  
          <AddMessage />   
        </section>
      </div>
    );
  }
}

export default App;