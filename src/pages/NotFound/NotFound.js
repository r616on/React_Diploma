import React from "react";
import PageTemplate from "../../templates/PageTemplate/PageTemplate";
import "./desktop.scss";

function NotFound() {
  return (
    <PageTemplate>
      <section className="top-sales">
        <h2 className="text-center">Страница не найдена</h2>
        <p>Извините, такая страница не найдена!</p>
      </section>
    </PageTemplate>
  );
}

export default NotFound;
