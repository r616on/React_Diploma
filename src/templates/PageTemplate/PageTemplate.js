import React, { Fragment } from "react";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./desktop.scss";

function PageTemplate(props) {
  return (
    <Fragment>
      <Header />
      <main className="container">
        <div className="row">
          <div className="col">
            <Banner />
            {props.children}
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}

export default PageTemplate;
