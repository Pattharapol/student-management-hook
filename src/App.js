import React from "react";
import Navbar from "./components/Navbar";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import AddStudent from "./components/AddStudent";

function App() {
  return (
    <BrowserRouter>
      <div>
        {/*Navbar อยู่บนสุด ไม่ต้องไป Switch กับคนอื่น */}
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/new">
            <AddStudent />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
