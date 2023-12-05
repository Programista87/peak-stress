// Contact.js
import React from 'react';
import './styles/kontakt.css';

function Contact() {
  return (
    <div className="container">
      <div className="contact-info">
        <h2>Dane kontaktowe</h2>
        <p>
          Biuro PEAK STRESS pracuje w godzinach 9:00 - 17:00. Jeżeli nie udało Ci się z nami skontaktować możesz wysłać nam wiadomość za pomocą poniższego formularza. Wrócimy do Ciebie z odpowiedzią w przeciągu 24 godzin.
        </p>

        <div className="billing-info">
          <h3>DANE DO FAKTUROWANIA</h3>
          <p>
            PEAK-STRESS SP. Z O. O. <br />
            AL. 29 LISTOPADA 85 <br />
            31-408 KRAKÓW <br />
            NIP: 9452254548
          </p>
        </div>

        <div className="contact-info-hours">
          <h3>DANE KONTAKTOWE W GODZINACH 9:00 - 17:00</h3>
          <p>
            E-MAIL: <br />
            <a href="mailto:office@peak-stress.com">office@peak-stress.com</a> <br />
            TEL: <br />
            +48 604 623 373
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
