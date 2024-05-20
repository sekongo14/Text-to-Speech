import "./../assets/css/acceuil.css"
function Acceuil() {
  return (

    <>




      {/* HEADER */}



      <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container-fluid container-xl position-relative d-flex align-items-center">

          <a href="index.html" className="logo d-flex align-items-center me-auto">
            <img src="assets/img/logo.png" alt="" />
            <h1 className="sitename">QuickStart</h1>
          </a>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li><a href="index.html#hero" className="">Home</a></li>
              <li><a href="index.html#about">About</a></li>
              <li><a href="index.html#features">Features</a></li>
              <li><a href="index.html#services">Services</a></li>
              <li><a href="index.html#pricing">Pricing</a></li>
              <li className="dropdown"><a href="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="#">Dropdown 1</a></li>
                  <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                    <ul>
                      <li><a href="#">Deep Dropdown 1</a></li>
                      <li><a href="#">Deep Dropdown 2</a></li>
                      <li><a href="#">Deep Dropdown 3</a></li>
                      <li><a href="#">Deep Dropdown 4</a></li>
                      <li><a href="#">Deep Dropdown 5</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Dropdown 2</a></li>
                  <li><a href="#">Dropdown 3</a></li>
                  <li><a href="#">Dropdown 4</a></li>
                </ul>
              </li>
              <li><a href="index.html#contact">Contact</a></li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>
          <a className="btn-getstarted" href="index.html#about">Get Started</a>

        </div>
      </header>
      {/* END HEADER */}

      {/* MAIN */}

      <main className="main">

        <section id="hero" className="hero section">
          <div className="hero-bg">
            <img src="src/assets/img/hero-bg-light.webp" alt="" />
          </div>
          <div className="container text-center">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h1 data-aos="fade-up" className="">Welcome to <span>QuickStart</span></h1>
              <p data-aos="fade-up" data-aos-delay="100" className="">Quickly start your project now and set the stage for success<br/></p>
              <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
                <a href="#about" className="btn-get-started">Get Started</a>
                <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
              </div>
              <img src="src/assets/img/hero-services-img.webp" className="img-fluid hero-img" alt="" data-aos="zoom-out" data-aos-delay="300" />
            </div>
          </div>

        </section>


      </main>
      {/* END MAIN */}

      {/* FOOTER */}
      <footer id="footer" className="footer position-relative">

        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6 footer-about">
              <a href="index.html" className="logo d-flex align-items-center">
                <span className="sitename">QuickStart</span>
              </a>
              <div className="footer-contact pt-3">
                <p>A108 Adam Street</p>
                <p>New York, NY 535022</p>
                <p className="mt-3"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
                <p><strong>Email:</strong> <span>info@example.com</span></p>
              </div>
              <div className="social-links d-flex mt-4">
                <a href=""><i className="bi bi-twitter"></i></a>
                <a href=""><i className="bi bi-facebook"></i></a>
                <a href=""><i className="bi bi-instagram"></i></a>
                <a href=""><i className="bi bi-linkedin"></i></a>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Terms of service</a></li>
                <li><a href="#">Privacy policy</a></li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><a href="#">Web Design</a></li>
                <li><a href="#">Web Development</a></li>
                <li><a href="#">Product Management</a></li>
                <li><a href="#">Marketing</a></li>
                <li><a href="#">Graphic Design</a></li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-12 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
              <form action="forms/newsletter.php" method="post" className="php-email-form">
                <div className="newsletter-form">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </div>
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your subscription request has been sent. Thank you!</div>
              </form>
            </div>

          </div>
        </div>

        <div className="container copyright text-center mt-4">
          <p>© <span>Copyright</span> <strong className="px-1 sitename">QuickStart</strong><span>All Rights Reserved</span></p>
          <div className="credits">
            {/* 
            // <!-- All the links in the footer should remain intact. --> */}
            {/* 
            // <!-- You can delete the links only if you've purchased the pro version. --> */}
            {/* 
            // <!-- Licensing information: https://bootstrapmade.com/license/ --> */}
            {/* 
            // <!-- Purchase the pro version with working PHP/AJAX contact form: [buy-url] --> */}
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>

      </footer>
      {/* END FOOTER */}
    </>)
}

export default Acceuil