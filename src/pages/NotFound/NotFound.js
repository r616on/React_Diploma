import React from "react";
import IndexTemplate from "../../templates/IndexTemplate/IndexTemplate";
import "./desktop.scss";

function NotFound() {
  return (
    <IndexTemplate>
      <section className="top-sales">
        <h2 className="text-center">Страница не найдена</h2>
        <p>Извините, такая страница не найдена!</p>
      </section>
    </IndexTemplate>
  );
}

export default NotFound;
