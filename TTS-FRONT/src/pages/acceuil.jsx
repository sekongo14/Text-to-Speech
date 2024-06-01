import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import "./../assets/css/acceuil.css";
import {
  handlePreloader,
  handleScroll,
  initializeAOS,
  initializeFAQToggle,
  initializeGLightbox,
  initializeScrollTopButton,
} from "./../assets/js/main.js";

function Acceuil() {
  useEffect(() => {
    // Initialize external scripts
    initializeAOS();
    initializeGLightbox();
    handlePreloader();
    initializeScrollTopButton();
    initializeFAQToggle();

    const handleScrollEvent = () => {
      handleScroll();
    };

    document.addEventListener("scroll", handleScrollEvent);
    window.addEventListener("load", handleScrollEvent);

    // Cleanup on unmount
    return () => {
      document.removeEventListener("scroll", handleScrollEvent);
      window.removeEventListener("load", handleScrollEvent);
    };
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        {/* Hero Section */}
        <section id="hero" className="hero section">
          <div className="hero-bg">
            <img src="/src/assets/img/hero-bg-light.webp" alt="" />
          </div>
          <div className="container text-center">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h1 data-aos="fade-up">
                Bienvenue sur <span>SpeechSync</span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="100">
                <strong>
                  Convertissez du texte en discours facilement avec notre outil
                  alimenté par l'IA.
                </strong>
                <br />
                Améliorez vos projets avec des options de discours avancées.
              </p>
              <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
                <Link to={"/inscription"} className="btn-get-started">
                  Commencer
                </Link>
                <Link
                  to={"/demo"} // Remplacez par l'URL de votre démo
                  className="glightbox btn-watch-video d-flex align-items-center"
                >
                  <i className="bi bi-play-circle"></i>
                  <span>Voir la démo</span>
                </Link>
              </div>

              <img
                src="/src/assets/img/Speech_to_sppech.png" // Utilisez une image représentative
                className="img-fluid hero-img"
                alt="Service de conversion de texte en discours"
                data-aos="zoom-out"
                data-aos-delay="300"
              />
            </div>
          </div>
        </section>
        {/* /Hero Section */}
        {/* Featured Services Section */}
        <section id="featured-services" className="featured-services section">
          <div className="container">
            <div className="row gy-4">
              <div
                className="col-xl-6 col-lg-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="service-item d-flex">
                  <div className="icon flex-shrink-0">
                    <i className="bi bi-briefcase"></i>
                  </div>
                  <div>
                    <h4 className="title">
                      <a href="#" className="stretched-link">
                        <strong>Marketing Numérique</strong>
                      </a>
                    </h4>
                    <p className="description">
                      Augmentez votre visibilité en ligne et attirez davantage
                      de clients grâce à nos stratégies de marketing numérique
                      ciblées.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Service Item */}
              <div
                className="col-xl-6 col-lg-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="service-item d-flex">
                  <div className="icon flex-shrink-0">
                    <i className="bi bi-card-checklist"></i>
                  </div>
                  <div>
                    <h4 className="title">
                      <a href="#" className="stretched-link">
                        <strong>Éducation en Ligne</strong>
                      </a>
                    </h4>
                    <p className="description">
                      Offrez des cours en ligne de haute qualité à vos étudiants
                      et améliorez leur expérience d'apprentissage grâce à notre
                      plateforme d'éducation virtuelle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* /Featured Services Section */}
        {/* About Section */}
        <section id="about" className="about section">
          <div className="container">
            <div className="row gy-4">
              <div
                className="col-lg-6 content"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <p className="who-we-are">Qui Sommes-Nous</p>
                <h3>Libérer le Potentiel avec une Stratégie Créative</h3>
                <p className="fst-italic">
                  Chez SpeechSync, nous sommes passionnés par la transformation
                  de texte en discours de qualité supérieure grâce à notre
                  technologie d'intelligence artificielle avancée.
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    <span>
                      Nous nous engageons à fournir des solutions de conversion
                      de texte en discours rapides et efficaces.
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    <span>
                      Notre approche créative et innovante nous permet d'offrir
                      des services hautement personnalisés à nos clients.
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    <span>
                      Nous sommes déterminés à améliorer continuellement notre
                      technologie pour répondre aux besoins changeants du
                      marché.
                    </span>
                  </li>
                </ul>
              </div>

              <div
                className="col-lg-6 about-images"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="row gy-4">
                  <div className="col-lg-6">
                    <img
                      src="/src/assets/img/about-company-1.jpg"
                      className="img-fluid"
                      alt="À propos de notre entreprise 1"
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="row gy-4">
                      <div className="col-lg-12">
                        <img
                          src="/src/assets/img/about-company-2.jpg"
                          className="img-fluid"
                          alt="À propos de notre entreprise 2"
                        />
                      </div>
                      <div className="col-lg-12">
                        <img
                          src="/src/assets/img/about-company-3.jpg"
                          className="img-fluid"
                          alt="À propos de notre entreprise 3"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* /About Section */}

        <section id="services" className="services section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Services</h2>
            <p>
              Découvrez les fonctionnalités avancées de notre application de
              conversion de texte en discours, propulsée par l'Intelligence
              Artificielle.
            </p>
          </div>
          {/* End Section Title */}

          <div className="container">
            <div className="row g-5">
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <div className="service-item item-cyan position-relative">
                  <i className="bi bi-activity icon"></i>
                  <div>
                    <h3>Marketing Digital</h3>
                    <p>
                      Transformez vos campagnes marketing avec notre solution de
                      texte en discours. Créez des annonces vocales accrocheuses
                      et des contenus audio engageants pour captiver votre
                      audience.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Service Item */}

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                <div className="service-item item-orange position-relative">
                  <i className="bi bi-broadcast icon"></i>
                  <div>
                    <h3>Éducation et Formation</h3>
                    <p>
                      Enrichissez l'expérience d'apprentissage avec des contenus
                      audio de haute qualité. Idéal pour les cours en ligne, les
                      podcasts éducatifs, et les supports de formation.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Service Item */}
            </div>
          </div>
        </section>
        {/* Clients Section */}

        {/* /Clients Section */}
        {/* Features Details Section */}
        <section id="features-details" className="features-details section">
          <div className="container">
            {/* Features Item - Marketing Digital */}
            <div className="row gy-4 justify-content-between features-item">
              <div
                className="col-lg-6 mt-5"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img
                  src="https://img.freepik.com/free-photo/marketing-ideas-share-research-planning-concept_53876-127431.jpg?t=st=1717279022~exp=1717282622~hmac=3fe36028229174f4db4d56a3c684d627442522de3ae31c016df40fb4531d3e22&w=740"
                  className="img-fluid"
                  alt="Marketing Digital"
                />
              </div>

              <div
                className="col-lg-5 d-flex align-items-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="content">
                  <h3>Marketing Digital</h3>
                  <p>
                    Améliorez vos campagnes marketing avec notre solution de
                    conversion de texte en discours. Créez des annonces vocales
                    captivantes et des contenus audio engageants pour attirer et
                    retenir votre audience.
                  </p>
                  <ul>
                    <li>
                      <i className="bi bi-megaphone flex-shrink-0"></i>{" "}
                      Génération de voix off pour les vidéos publicitaires.
                    </li>
                    <li>
                      <i className="bi bi-headphones flex-shrink-0"></i>{" "}
                      Création de podcasts et de contenus audio marketing.
                    </li>
                    <li>
                      <i className="bi bi-graph-up flex-shrink-0"></i> Analyse
                      de l'engagement et optimisation des campagnes.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* End Features Item */}

            {/* Features Item - Éducation et Formation */}
            <div className="row gy-4 justify-content-between features-item">
              <div
                className="col-lg-5 d-flex align-items-center order-2 order-lg-1"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="content">
                  <h3>Éducation et Formation</h3>
                  <p>
                    Enrichissez l'expérience d'apprentissage avec notre
                    technologie de conversion de texte en discours. Parfait pour
                    les cours en ligne, les podcasts éducatifs et les supports
                    de formation audio.
                  </p>
                  <ul>
                    <li>
                      <i className="bi bi-book flex-shrink-0"></i> Création de
                      cours en ligne audio.
                    </li>
                    <li>
                      <i className="bi bi-mic flex-shrink-0"></i> Développement
                      de podcasts éducatifs.
                    </li>
                    <li>
                      <i className="bi bi-mortarboard flex-shrink-0"></i>{" "}
                      Formation et tutoriels vocaux.
                    </li>
                  </ul>
                </div>
              </div>

              <div
                className="col-lg-6 order-1 order-lg-2"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <img
                  src="https://img.freepik.com/free-photo/front-view-stacked-books-graduation-cap-open-book-education-day_23-2149241017.jpg?t=st=1717279269~exp=1717282869~hmac=fe1a7eed0cee2c090c12a3fd1520f357086b9e895004c3e4d48dc5544b3e20fb&w=1060"
                  className="img-fluid"
                  alt="Éducation et Formation"
                />
              </div>
            </div>
            {/* End Features Item */}
          </div>
        </section>

        {/* /Features Details Section */}
        {/* Team Section --> */}
        <section id="team" className="team section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Équipe</h2>
            <p>
              Notre équipe de développeurs full-stack passionnés travaille sans
              relâche pour créer les meilleures solutions de conversion de texte
              en discours utilisant des techniques d'IA avancées.
            </p>
          </div>
          {/* End Section Title */}

          <div className="container">
            <div className="row gy-5">
              <div
                className="col-lg-4 col-md-6 member"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="member-img">
                  <img
                    src="/src/assets/img/team/team-1.jpg"
                    className="img-fluid"
                    alt="Walter White"
                  />
                  <div className="social">
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
                <div className="member-info text-center">
                  <h4>Walter White</h4>
                  <span>Full-Stack Developer</span>
                  <p>
                    Walter est notre développeur principal, dirigeant les
                    efforts de développement avec une expertise inégalée et une
                    passion pour l'innovation.
                  </p>
                </div>
              </div>
              {/* End Team Member */}

              <div
                className="col-lg-4 col-md-6 member"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="member-img">
                  <img
                    src="/src/assets/img/team/team-2.jpg"
                    className="img-fluid"
                    alt="Sarah Johnson"
                  />
                  <div className="social">
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
                <div className="member-info text-center">
                  <h4>Yéo Maïmouna</h4>
                  <span>Full-Stack Developer</span>
                  <p>
                    Sarah crée des solutions complètes en combinant ses
                    compétences en développement front-end et back-end.
                  </p>
                </div>
              </div>
              {/* End Team Member */}

              <div
                className="col-lg-4 col-md-6 member"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="member-img">
                  <img
                    src="/src/assets/img/team/team-3.jpg"
                    className="img-fluid"
                    alt="William Anderson"
                  />
                  <div className="social">
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
                <div className="member-info text-center">
                  <h4>William Anderson</h4>
                  <span>Full-Stack Developer</span>
                  <p>
                    William est responsable de développer et maintenir notre
                    infrastructure, garantissant des performances optimales.
                  </p>
                </div>
              </div>
              {/* End Team Member */}

              <div
                className="col-lg-4 col-md-6 member"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="member-img">
                  <img
                    src="/src/assets/img/team/team-4.jpg"
                    className="img-fluid"
                    alt="Amanda Jepson"
                  />
                  <div className="social">
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
                <div className="member-info text-center">
                  <h4>Amanda Jepson</h4>
                  <span>Full-Stack Developer</span>
                  <p>
                    Amanda combine ses compétences en front-end et back-end pour
                    développer des solutions complètes et efficaces.
                  </p>
                </div>
              </div>
              {/* End Team Member */}

              <div
                className="col-lg-4 col-md-6 member"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="member-img">
                  <img
                    src="/src/assets/img/team/team-5.jpg"
                    className="img-fluid"
                    alt="Brian Doe"
                  />
                  <div className="social">
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
                <div className="member-info text-center">
                  <h4>Brian Doe</h4>
                  <span>Full-Stack Developer</span>
                  <p>
                    Brian assure le déploiement et la maintenance de notre
                    infrastructure, garantissant une continuité de service sans
                    faille.
                  </p>
                </div>
              </div>
              {/* End Team Member */}
            </div>
          </div>
        </section>

        {/* /Team Section --> */}
      </main>
      <Footer />
    </>
  );
}

export default Acceuil;
