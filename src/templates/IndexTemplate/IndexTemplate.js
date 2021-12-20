import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import banner from "../../img/banner.jpg";
import "./desktop.scss";

function IndexTemplate(props) {
  return (
    <div>
      <Header />
      <main className="container">
        <div className="row">
          <div className="col">
            <div className="banner">
              <img src={banner} className="img-fluid" alt="К весне готовы!" />
              <h2 className="banner-header">К весне готовы!</h2>
            </div>
            {props.children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default IndexTemplate;
