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
import Index from "./pages/Index/Index";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";
import NotFound from "./pages/NotFound/NotFound";
import CartPage from "./pages/CartPage/CartPage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            {/* <Route path="/services/:id" element={<EditService />} /> */}
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Index />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate replace to="/404" />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
