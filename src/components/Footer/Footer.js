import React from "react";
import { Link } from "react-router-dom";
import "./desktop.scss";
import topMenuItems from "../Header/data.json";

function Footer() {
  return (
    <footer className="container bg-light footer">
      <div className="row footer__row">
        <section className="col footer__info">
          <h5>Информация</h5>
          <ul className="nav flex-column">
            {topMenuItems.map((item) => {
              return (
                <li key={item.title} className="nav-item">
                  <Link to={item.route} className="nav-link">
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        <div className="col payment">
          <section className="col">
            <h5>Принимаем к оплате:</h5>
            <div className="footer-pay">
              <div className="footer-pay-systems footer-pay-systems-paypal"></div>
              <div className="footer-pay-systems footer-pay-systems-master-card"></div>
              <div className="footer-pay-systems footer-pay-systems-visa"></div>
              <div className="footer-pay-systems footer-pay-systems-yandex"></div>
              <div className="footer-pay-systems footer-pay-systems-webmoney"></div>
              <div className="footer-pay-systems footer-pay-systems-qiwi"></div>
            </div>
          </section>
          <section className="footer-copyright col">
            <div className="footer-copyright__row">
              2009-2019 © BosaNoga.ru — модный интернет-магазин обуви и
              аксессуаров. Все права защищены.
              <br />
              Доставка по всей России!
            </div>
          </section>
        </div>

        <section className="col text-right footer-contacts">
          <h5>Контакты:</h5>
          <div className="footer-contacts__row">
            <a className="footer-contacts-phone" href="tel:+7-495-790-35-03">
              +7 495 79 03 5 03
            </a>
            <span className="footer-contacts-working-hours">
              Ежедневно: с 09-00 до 21-00
            </span>
            <a
              className="footer-contacts-email"
              href="mailto:office@bosanoga.ru"
            >
              office@bosanoga.ru
            </a>
          </div>
          <div className="footer-social-links">
            <div className="footer-social-link footer-social-link-twitter"></div>
            <div className="footer-social-link footer-social-link-vk"></div>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
