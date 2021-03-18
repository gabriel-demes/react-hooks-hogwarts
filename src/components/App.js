import React, {useState} from "react";
import Nav from "./Nav";
import HogList from "./HogList"

import hogs from "../porkers_data";

function App() {
  return (
    <div className="App">
      <Nav />
      <HogList /> 
    </div>
  );
}

export default App;
