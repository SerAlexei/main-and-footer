import { Component } from "react";
import './Footer.css'

export class Footer extends Component {
  render() {
    return (
      <footer>
        <address>Movie studio address: Zaporizhzhia, Main St. 1</address>
        <p>
          Email:{" "}
          <a href="mailto:director@example.com">director@example.com</a>
        </p>
        <p>
          Author phone: <a href="tel:+380000000000">+38 000 000 00 00</a>
        </p>
      </footer>
    );
  }
}

export default Footer;
