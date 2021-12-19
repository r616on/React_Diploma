import React from "react";
import "./App.css";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store-toolkit/store";
import ListService from "./components/ListService/ListService";
import EditService from "./components/EditService/EditService";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/services/:id" element={<EditService />} />
            <Route path="/services" element={<ListService />} />
            <Route path="/" element={<Navigate replace to="/services" />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
