function Footer() {
  return (
    <footer id="footer" className="footer position-relative">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <a href="/" className="logo d-flex align-items-center">
              <span className="sitename">QuickStart</span>
            </a>
            <div className="footer-contact pt-3">
              <p>A108 Adam Street</p>
              <p>New York, NY 535022</p>
              <p className="mt-3">
                <strong>Téléphone :</strong> <span>+1 5589 55488 55</span>
              </p>
              <p>
                <strong>Email :</strong> <span>info@example.com</span>
              </p>
            </div>
            <div className="social-links d-flex mt-4">
              <a href="#">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Liens Utiles</h4>
            <ul>
              <li>
                <a href="/#hero">Accueil</a>
              </li>
              <li>
                <a href="/#about">À propos</a>
              </li>
              <li>
                <a href="/#services">Services</a>
              </li>
              <li>
                <a href="#">Conditions d'utilisation</a>
              </li>
              <li>
                <a href="#">Politique de confidentialité</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Nos Services</h4>
            <ul>
              <li>
                <a href="#">Conception Web</a>
              </li>
              <li>
                <a href="#">Développement Web</a>
              </li>
              <li>
                <a href="#">Gestion de Produits</a>
              </li>
              <li>
                <a href="#">Marketing</a>
              </li>
              <li>
                <a href="#">Design Graphique</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-12 footer-newsletter">
            <h4>Notre Newsletter</h4>
            <p>
              Abonnez-vous à notre newsletter et recevez les dernières
              actualités concernant nos produits et services !
            </p>
            <form
              action="forms/newsletter.php"
              method="post"
              className="php-email-form"
            >
              <div className="newsletter-form">
                <input type="email" name="email" />
                <input type="submit" value="S'abonner" />
              </div>
              <div className="loading">Chargement</div>
              <div className="error-message"></div>
              <div className="sent-message">
                Votre demande d'abonnement a été envoyée. Merci !
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
