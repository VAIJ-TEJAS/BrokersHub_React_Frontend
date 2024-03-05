import { IonIcon } from "@ionic/react";
import './HomePage.css'

export default function HomePage() {
  return (
    <body id="top">
      {/* <!-- 
    - #HEADER
  --> */}

      <header className="header" data-header>
        <div className="overlay" data-overlay></div>

        <div className="header-top">
          <div className="container">
            <a href="tel:+01123456790" className="helpline-box">
              <div className="icon-box">
                <IonIcon name="call-outline" />
              </div>

              <div className="wrapper">
                <p className="helpline-title">For Further Inquires :</p>

                <p className="helpline-number">+91 9145338750</p>
              </div>
            </a>

            <a href="#" className="logo">
              {/* <!-- <img src="./assets/images/bluedivelogo.png" alt="Tourly logo" /> --> */}
              <h1>BluediveIn</h1>
            </a>

            <div className="nav-buttons">
              <button
                className="nav-open-btn"
                aria-label="Open Menu"
                data-nav-open-btn
              >
                <IonIcon name="menu-outline" />
              </button>
            </div>
          </div>
        </div>

        <div className="header-bottom">
          <div className="container">
            <ul className="social-list">
              <li>
                <a href="#" className="social-link">
                  <IonIcon name="logo-facebook" />
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <IonIcon name="logo-twitter" />
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <IonIcon name="logo-youtube" />
                </a>
              </li>
            </ul>

            <nav className="navbar" data-navbar>
              <div className="navbar-top">
                <a href="#" className="logo">
                  <img src="./assets/images/logo-blue.svg" alt="Tourly logo" />
                </a>

                <button
                  className="nav-close-btn"
                  aria-label="Close Menu"
                  data-nav-close-btn
                >
                  <IonIcon name="close-outline" />
                </button>
              </div>

              <ul className="navbar-list">
                <li>
                  <a href="#home" className="navbar-link" data-nav-link>
                    home
                  </a>
                </li>

                <li>
                  <a href="#destination" className="navbar-link" data-nav-link>
                    destination
                  </a>
                </li>

                <li>
                  <a href="#package" className="navbar-link" data-nav-link>
                    packages
                  </a>
                </li>

                <li>
                  <a href="#gallery" className="navbar-link" data-nav-link>
                    gallery
                  </a>
                </li>

                <li>
                  <a href="#contact" className="navbar-link" data-nav-link>
                    contact us
                  </a>
                </li>
              </ul>
            </nav>

            <button className="btn btn-primary">Inquire Now</button>
          </div>
        </div>
      </header>

      <main>
        <article>

          <section className="hero" id="home">
            <div className="container">
              <h2 className="h1 hero-title">Journey to explore world</h2>

              <p className="hero-text">
                Experience a top-notch Konkan tour with BlueDive! Enjoy
                hospitality, affordability, and 100% safety, including COVID-19
                precautions like pre-checkups and safety kits. Stay at our
                premium AC resort near Bhogve Beach, surrounded by lush
                greenery, just 2 minutes from the sea. Dive into crystal-clear
                waters, relax on golden sands, and savor delicious homemade
                seafood. Explore our gallery for more delights on your journey!
              </p>

              <div className="btn-group">
                <button className="btn btn-primary">Learn more</button>

                <button className="btn btn-secondary">Inquire now</button>
              </div>
            </div>
          </section>

          {/* <!-- 
        - #TOUR SEARCH
      --> */}

          <section className="tour-search">
            <div className="container">
              <form action="" className="tour-search-form">
                <div className="input-wrapper">
                  <label htmlFor="destination" className="input-label">
                    Search Destination
                  </label>

                  <input
                    type="text"
                    name="destination"
                    id="destination"
                    required
                    placeholder="Enter Destination"
                    className="input-field"
                  />
                </div>

                <div className="input-wrapper">
                  <label htmlFor="people" className="input-label">
                    Pax Number
                  </label>

                  <input
                    type="number"
                    name="people"
                    id="people"
                    required
                    placeholder="No.of People"
                    className="input-field"
                  />
                </div>

                <div className="input-wrapper">
                  <label htmlFor="people" className="input-label">
                    Phone Number*
                  </label>

                  <input
                    type="number"
                    name="contact"
                    id="number"
                    required
                    placeholder="Contact number"
                    className="input-field"
                  />
                </div>

                {/* <!-- <div className="input-wrapper">
                <label htmlFor="checkin" className="input-label">Checkin Date**</label>

                <input
                  type="date"
                  name="checkin"
                  id="checkin"
                  required
                  className="input-field"
                />
              </div> --> */}

                {/* <!-- <div className="input-wrapper">
                <label htmlFor="checkout" className="input-label">Checkout Date*</label>

                <input
                  type="date"
                  name="checkout"
                  id="checkout"
                  required
                  className="input-field"
                />
              </div> --> */}

                <button type="submit" className="btn btn-secondary">
                  Inquire now
                </button>
              </form>
            </div>
          </section>

          {/* <!-- 
        - #POPULAR
      --> */}

          <section className="popular" id="destination">
            <div className="container">
              <p className="section-subtitle">Uncover place</p>

              <h2 className="h2 section-title">Popular destination</h2>

              <p className="section-text">
                Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec
                nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia
                tenetur, aptent.
              </p>

              <ul className="popular-list">
                <li>
                  <div className="popular-card">
                    <figure className="card-img">
                      <img
                        src="https://images.pexels.com/photos/15400519/pexels-photo-15400519/free-photo-of-beach-in-bay-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt="San miguel, italy"
                        loading="lazy"
                      />
                    </figure>

                    <div className="card-content">
                      <div className="card-rating">
                        <IonIcon name="star" />
                        <IonIcon name="star" />
                        <IonIcon name="star" />
                        <IonIcon name="star" />
                        <IonIcon name="star" />
                      </div>

                      <p className="card-subtitle">
                        <a href="#">Konkan</a>
                      </p>

                      <h3 className="h3 card-title">
                        <a href="#">Devgad Beach</a>
                      </h3>

                      <p className="card-text">
                        Fusce hic augue velit wisi ips quibusdam pariatur,
                        iusto.
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="popular-card">
                    <figure className="card-img">
                      <img
                        src="https://images.pexels.com/photos/20230729/pexels-photo-20230729/free-photo-of-woman-walking-on-sunlit-beach.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt="Burj khalifa, dubai"
                        loading="lazy"
                      />
                    </figure>

                    <div className="card-content">
                      <div className="card-rating">
                        <IonIcon name="star" />
                        <IonIcon name="star" />
                        <IonIcon name="star" />
                        <IonIcon name="star" />
                        <IonIcon name="star" />
                      </div>

                      <p className="card-subtitle">
                        <a href="#">Konkan</a>
                      </p>

                      <h3 className="h3 card-title">
                        <a href="#">Tarkarli Beach</a>
                      </h3>

                      <p className="card-text">
                        Fusce hic augue velit wisi ips quibusdam pariatur,
                        iusto.
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="popular-card">
                    <figure className="card-img">
                      <img
                        src="https://images.pexels.com/photos/20282904/pexels-photo-20282904/free-photo-of-rock-formations-of-praia-da-marinha-on-ocean-shore-in-portugal.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt="Kyoto temple, japan"
                        loading="lazy"
                      />
                    </figure>

                    <div className="card-content">
                      <div className="card-rating">
                        <IonIcon name="star" />
                        <IonIcon name="star" />
                        <IonIcon name="star" />
                        <IonIcon name="star" />
                        <IonIcon name="star" />
                      </div>

                      <p className="card-subtitle">
                        <a href="#">Konkan</a>
                      </p>

                      <h3 className="h3 card-title">
                        <a href="#">Malvan Beach</a>
                      </h3>

                      <p className="card-text">
                        Fusce hic augue velit wisi ips quibusdam pariatur,
                        iusto.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>

              <button className="btn btn-primary">More destintion</button>
            </div>
          </section>

          {/* <!-- 
        - #PACKAGE
      --> */}

          <section className="package" id="package">
            <div className="container">
              <p className="section-subtitle" style={{ textAlign: "center" }}>
                Popular Packages
              </p>

              <h2 className="h2 section-title" style={{ textAlign: "center" }}>
                Checkout Our Packages
              </h2>

              <p className="section-text">
                Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec
                nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia
                tenetur, aptent.
              </p>

              <ul className="package-list">
                <li>
                  <div className="package-card">
                    <figure className="card-banner">
                      <img
                        src="./assets/images/packege-1.jpg"
                        alt="Experience The Great Holiday On Beach"
                        loading="lazy"
                      />
                    </figure>

                    <div className="card-content">
                      <h3
                        className="h3 card-title"
                        style={{
                          justifyContent: "center",
                          textAlign: "center",
                        }}
                      >
                        OUR STANDARD WEEKEND PACKAGE
                      </h3>

                      <p
                        className="card-text"
                        style={{
                          justifyContent: "center",
                          textAlign: "center",
                        }}
                      >
                        Experience an unforgettable weekend with our Standard
                        Weekend Package at just ₹5900 per person! Relax in clean
                        seaside accommodations, indulge in complimentary
                        breakfasts, and witness mesmerizing sunsets. Dive into
                        adventure with a sea safari, visit Rajkot Fort, and
                        explore Devgad Windmill Garden. Explore pristine beaches
                        and spiritual sites. Secure your spot now with a
                        non-refundable booking fee of just ₹3000. Reserve your
                        seat for an exhilarating getaway by calling or WhatsApp
                        us at 8668904446! 🌊🐬🏖️
                      </p>

                      <ul className="card-meta-list">
                        <li className="card-meta-item">
                          <div className="meta-box">
                            <IonIcon name="time" />

                            <p className="text">7D/6N</p>
                          </div>
                        </li>

                        <li className="card-meta-item">
                          <div className="meta-box">
                            <IonIcon name="people" />

                            <p className="text">pax: 10</p>
                          </div>
                        </li>

                        <li className="card-meta-item">
                          <div className="meta-box">
                            <IonIcon name="location" />

                            <p className="text">Konkan</p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="card-price">
                      <div className="wrapper">
                        <p className="reviews">(25 reviews)</p>

                        <div className="card-rating">
                          <IonIcon name="star" />
                          <IonIcon name="star" />
                          <IonIcon name="star" />
                          <IonIcon name="star" />
                          <IonIcon name="star" />
                        </div>
                      </div>

                      <p className="price">
                        ₹5900
                        <span>/ per person</span>
                      </p>

                      <button className="btn btn-secondary">Inquire Now</button>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="package-card">
                    <figure className="card-banner">
                      <img
                        src="./assets/images/packege-2.jpg"
                        alt="Summer Holiday To The Oxolotan River"
                        loading="lazy"
                      />
                    </figure>

                    <div className="card-content">
                      <h3
                        className="h3 card-title"
                        style={{
                          justifyContent: "center",
                          textAlign: "center",
                        }}
                      >
                        OUR CUSTOM WEEKEND PACKAGE
                      </h3>

                      <p
                        className="card-text"
                        style={{
                          justifyContent: "center",
                          textAlign: "center",
                        }}
                      >
                        Embark on a personalized Konkan adventure with our
                        customizable packages! Tailored to your preferences, our
                        offerings include perfectly crafted itineraries,
                        flexible transportation options, and a variety of stay
                        choices such as homestays, seaside resorts, and village
                        homes. Dive into thrilling sea safaris and watersports,
                        explore ancient temples, and immerse yourself in the
                        authentic Konkani way of life. Let us design your dream
                        trip to Konkan - contact us today to start planning your
                        unforgettable getaway! 🌊🏖️
                      </p>

                      <ul className="card-meta-list">
                        <li className="card-meta-item">
                          <div className="meta-box">
                            <IonIcon name="time" />

                            <p className="text">7D/6N</p>
                          </div>
                        </li>

                        <li className="card-meta-item">
                          <div className="meta-box">
                            <IonIcon name="people" />

                            <p className="text">pax: 10</p>
                          </div>
                        </li>

                        <li className="card-meta-item">
                          <div className="meta-box">
                            <IonIcon name="location" />

                            <p className="text">Konkan</p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="card-price">
                      <div className="wrapper">
                        <p className="reviews">(20 reviews)</p>

                        <div className="card-rating">
                          <IonIcon name="star" />
                          <IonIcon name="star" />
                          <IonIcon name="star" />
                          <IonIcon name="star" />
                          <IonIcon name="star" />
                        </div>
                      </div>

                      <p className="price">
                        ₹5900
                        <span>/ per person</span>
                      </p>

                      <button className="btn btn-secondary">Inquire Now</button>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="package-card">
                    <figure className="card-banner">
                      <img
                        src="./assets/images/packege-3.jpg"
                        alt="Santorini Island's Weekend Vacation"
                        loading="lazy"
                      />
                    </figure>

                    <div className="card-content">
                      <h3
                        className="h3 card-title"
                        style={{
                          justifyContent: "center",
                          textAlign: "center",
                        }}
                      >
                        Monsoon Weekend Vacation (RED SOIL STORY)
                      </h3>

                      <p
                        className="card-text"
                        style={{
                          justifyContent: "center",
                          textAlign: "center",
                        }}
                      >
                        Discover the allure of the monsoon season with our Red
                        Soil Story Package at ₹5900 per person! This 3-day,
                        2-night adventure departing every Friday from Pune
                        offers a cozy journey in an AC Ertiga, comfortable
                        accommodations in Ratnagiri, Malvan, Vengurla, and
                        Sawantwadi, and delicious meals featuring Malvani
                        delicacies. Experience village life, explore waterfalls,
                        and engage in monsoon farming. Book your spot with a
                        ₹3000 non-refundable fee. Call or WhatsApp 8668904446 to
                        reserve your seat now! 🌧️🌾
                      </p>

                      <ul className="card-meta-list">
                        <li className="card-meta-item">
                          <div className="meta-box">
                            <IonIcon name="time" />

                            <p className="text">7D/6N</p>
                          </div>
                        </li>

                        <li className="card-meta-item">
                          <div className="meta-box">
                            <IonIcon name="people" />

                            <p className="text">pax: 10</p>
                          </div>
                        </li>

                        <li className="card-meta-item">
                          <div className="meta-box">
                            <IonIcon name="location" />

                            <p className="text">Konkan</p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="card-price">
                      <div className="wrapper">
                        <p className="reviews">(40 reviews)</p>

                        <div className="card-rating">
                          <IonIcon name="star" />
                          <IonIcon name="star" />
                          <IonIcon name="star" />
                          <IonIcon name="star" />
                          <IonIcon name="star" />
                        </div>
                      </div>

                      <p className="price">
                        ₹5900
                        <span>/ per person</span>
                      </p>

                      <button className="btn btn-secondary">Book Now</button>
                    </div>
                  </div>
                </li>
              </ul>

              {/* <!-- <button className="btn btn-primary">View All Packages</button> --> */}
            </div>
          </section>

          {/* <!-- 
        - #GALLERY
      --> */}

          <section className="gallery" id="gallery">
            <div className="container">
              <p className="section-subtitle">Photo Gallery</p>

              <h2 className="h2 section-title">Photo's From Travellers</h2>

              <p className="section-text">
                Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec
                nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia
                tenetur, aptent.
              </p>

              <ul className="gallery-list">
                <li className="gallery-item">
                  <figure className="gallery-image">
                    <img
                      src="https://images.pexels.com/photos/5119601/pexels-photo-5119601.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Gallery image"
                    />
                  </figure>
                </li>

                <li className="gallery-item">
                  <figure className="gallery-image">
                    <img
                      src="https://images.pexels.com/photos/5119599/pexels-photo-5119599.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Gallery image"
                    />
                  </figure>
                </li>

                <li className="gallery-item">
                  <figure className="gallery-image">
                    <img
                      src="https://images.pexels.com/photos/8818739/pexels-photo-8818739.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Gallery image"
                    />
                  </figure>
                </li>

                <li className="gallery-item">
                  <figure className="gallery-image">
                    <img
                      src="./assets/images/gallery-4.jpg"
                      alt="Gallery image"
                    />
                  </figure>
                </li>

                <li className="gallery-item">
                  <figure className="gallery-image">
                    <img
                      src="https://images.pexels.com/photos/3968120/pexels-photo-3968120.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Gallery image"
                    />
                  </figure>
                </li>
              </ul>
              <ul className="gallery-list">
                <li className="gallery-item">
                  <figure className="gallery-image">
                    <img
                      src="https://media.istockphoto.com/id/183781606/photo/indian-mother-and-daughter-enjoying-vacations-at-konkan-beach-resort.jpg?s=1024x1024&w=is&k=20&c=z3cOanbBCNaI3IpUtBlXCXmcWmaHiHC4JpFRDoxXM8c="
                      alt="Gallery image"
                    />
                  </figure>
                </li>

                <li className="gallery-item">
                  <figure className="gallery-image">
                    <img
                      src="https://images.pexels.com/photos/1231365/pexels-photo-1231365.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Gallery image"
                    />
                  </figure>
                </li>

                <li className="gallery-item">
                  <figure className="gallery-image">
                    <img
                      src="https://images.pexels.com/photos/15496208/pexels-photo-15496208/free-photo-of-smiling-woman-with-surfboard-on-beach.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Gallery image"
                    />
                  </figure>
                </li>

                <li className="gallery-item">
                  <figure className="gallery-image">
                    <img
                      src="https://media.istockphoto.com/id/183759833/photo/indian-family-mother-daughter-enjoying-vacations-at-konkan-beach.jpg?b=1&s=612x612&w=0&k=20&c=USbcqSWBrdxNlHuaSCHxLXWnjS8HUi0XD6uz6bMYTN8="
                      alt="Gallery image"
                    />
                  </figure>
                </li>

                <li className="gallery-item">
                  <figure className="gallery-image">
                    <img
                      src="https://images.pexels.com/photos/3932830/pexels-photo-3932830.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Gallery image"
                    />
                  </figure>
                </li>
              </ul>
            </div>
          </section>

          {/* <!-- 
        - #CTA
      --> */}

          <section className="cta" id="contact">
            <div className="container">
              <div className="cta-content">
                <p className="section-subtitle">Call To Action</p>

                <h2 className="h2 section-title">
                  Ready For Unforgatable Travel. Remember Us!
                </h2>

                <p className="section-text">
                  Fusce hic augue velit wisi quibusdam pariatur, iusto primis,
                  nec nemo, rutrum. Vestibulum cumque laudantium. Sit ornare
                  mollitia tenetur, aptent.
                </p>
              </div>

              <button className="btn btn-secondary">Contact Us !</button>
            </div>
          </section>
        </article>
      </main>

      {/* <!-- 
    - #FOOTER
  --> */}

      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="footer-brand">
              {/* <!-- <a href="#" className="logo">
              <img src="./assets/images/logo.svg" alt="Tourly logo" />
            </a> --> */}
              <a
                href="#"
                className="logo"
                style={{
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: "70px",
                }}
              >
                <img src="./assets/images/bluedivelogo.png" alt="Tourly logo" />
              </a>

              <p className="footer-text">
                At BlueDive, we ensure your safety and comfort throughout your
                End to End Konkan Tour with our top-notch hospitality and
                affordable prices. Stay at our Premium AC Resort near Bhogve
                Beach and enjoy the stunning scenery of Devbaugh island, Tsunami
                island, the lighthouse, and the Arabian Sea. Indulge in
                delicious homemade seafood and explore nearby attractions. Our
                dedicated team is committed to making your journey safe,
                enjoyable, and memorable. Book your adventure with us today!
                🌊🏖️
              </p>
            </div>

            <div className="footer-contact">
              <h4 className="contact-title">Contact Us</h4>

              <p className="contact-text">
                Feel free to contact and reach us !!
              </p>

              <ul>
                <li className="contact-item">
                  <IonIcon name="call-outline" />

                  <a href="tel:+01123456790" className="contact-link">
                    +91 9145338750
                  </a>
                </li>

                <li className="contact-item">
                  <IonIcon name="mail-outline" />

                  <a href="mailto:info.tourly.com" className="contact-link">
                    Website.com
                  </a>
                </li>

                <li className="contact-item">
                  <IonIcon name="location-outline" />

                  <address> Konkan</address>
                </li>
              </ul>
            </div>

            <div className="footer-form">
              <p className="form-text"></p>

              <form action="" className="form-wrapper">
                <input
                  type="email"
                  name="email"
                  className="input-field"
                  placeholder="Enter Your Email"
                  required
                />

                <button type="submit" className="btn btn-secondary">
                  Inquire Now
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <p className="copyright">
              &copy; 2022 <a href="">Developed by TPR</a>. All rights reserved
            </p>

            <ul className="footer-bottom-list">
              <li>
                <a href="#" className="footer-bottom-link">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="footer-bottom-link">
                  Term & Condition
                </a>
              </li>

              <li>
                <a href="#" className="footer-bottom-link">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <a href="#top" className="go-top" data-go-top>
        <IonIcon name="chevron-up-outline" />
      </a>

      {/* <!-- 
    - custom js link
  --> */}
      <script src="./assets/js/script.js"></script>

      {/* <!-- 
    - ionicon link
  --> */}
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </body>
  );
}
