import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { Carousel, Timeline } from "antd";
import sample1 from "../components/sample1.jpg";
import sample2 from "../components/sample2.jpg";
import sample3 from "../components/sample3.jpg";
import "./HomePage.css";
import ItemCard from "../components/ItemCard";
import testimonial1 from "../components/testimonial-01.png";
import testimonial2 from "../components/testimonial-02.png";
import testimonial3 from "../components/testimonial-03.png";
import StepsForPost from "../components/StepsForPost";

const HomePage: React.FC = () => {

  const [activeSlide, setActiveSlide] = useState<number>(0);

  const handleSlideChange = (index: number) => {
    setActiveSlide(index);
  };

  const contentStyle: React.CSSProperties = {
    height: "600px",
    color: "#fff",
    lineHeight: "60px",
    textAlign: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const items = [
    {
      title: 'Property 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      budget: 700000,
      image: 'https://cdn.britannica.com/05/157305-004-53D5D212.jpg',
      contact: '1234567890',
      transaction: 'Sell',
      postType: 'Requirement',
      location: 'Ranchi',
      state: 'Jharkhand',
      ratio: 0,
    }
  ]

  return (
    <div>
      <div className="">
        <Navbar />
      </div>
      <Carousel autoplay>
        <div>
          <h3 className="border-bottom" style={{ ...contentStyle, backgroundImage: `url(${sample1})` }}>
            <div className="homePage-intro h-100">
              <div className="homePage-info p-5 h-100 d-flex align-items-center">
                <div>
                  <h1 className="fs-1 fw-bold my-5 pt-5 " style={{fontFamily: 'Montserrat'}}>
                    Explore Our Offerings
                  </h1>
                  <p className="col-md-5 pb-5 fs-5" style={{ fontFamily: "poppins" }}>
                    Welcome to BrokerHub, your premier destination for all things
                    real estate. Whether you're buying, selling, or simply
                    exploring, we're here to guide you every step of the way.
                  </p>
                </div>
              </div>
            </div>
          </h3>
        </div>
        <div>
          <h3 style={{ ...contentStyle, backgroundImage: `url(${sample2})` }}>
            <div className="homePage-intro h-100">
              <div className="homePage-info p-5 h-100 d-flex align-items-center">
                <div>
                  <h1 className="fs-1 fw-bold my-5" style={{fontFamily: 'Montserrat'}}>
                    Redefining Excellence
                  </h1>
                  <p className="col-md-5  fs-5" style={{ fontFamily: "poppins" }}>
                  Embracing a relentless pursuit of perfection, we at BrokerHub are redefining excellence. With an unwavering commitment to quality, innovation, and customer satisfaction, every creation that bears our name is a testament to our dedication.
                  </p>
                </div>
              </div>
            </div>
          </h3>
        </div>
        <div>
          <h3 style={{ ...contentStyle, backgroundImage: `url(${sample3})` }}>
            <div className="homePage-intro h-100">
              <div className="homePage-info p-5 h-100 d-flex align-items-center">
                <div>

                  <h1 className="fs-1 fw-bold my-5 pt-5" style={{fontFamily: 'Montserrat'}}>
                  Join Our Growing Community
                  </h1>
                  <p className="col-md-5 pb-5 fs-5" style={{ fontFamily: "poppins" }}>
                  Join our growing community and become part of a vibrant network of individuals who share your interests and passions. Whether you're a seasoned expert or just starting out, our community welcomes everyone with open arms.
                  </p>
                </div>
              </div>
            </div>
          </h3>
        </div>
      </Carousel>

      {/* services section  */}
      <div className="services-section">
        <div className="inner-width">
          <h1 className="section-title">Our Services </h1>
          <div className="border" style={{width: '160px', height: '2px', background: '#82ccdd', margin: '40px auto'}}></div>
          <div className="services-container">
            <div className="service-box">
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="Consultation"><path d="M58.38603,50.01996c-1.24207-3.8667-4.25226-6.94104-8.07172-8.28381,6.65735-4.24341,3.70111-14.69562-4.2984-14.73615-7.99994,.04083-10.95532,10.49475-4.29773,14.73639-3.81281,1.34045-6.82068,4.40613-8.06213,8.26361h-.64001c.45093-6.04498-2.21167-11.32361-7.57996-13.82001,6.8089-5.12006,3.20935-16.15717-5.42017-16.17999-8.62952,.02307-12.22882,11.06158-5.41986,16.17999-5.37189,2.49994-8.02948,7.77386-7.58002,13.82001h-1c-2.20996,0-4,1.78998-4,4s1.79004,4,4,4H58.01603c5.04974-.11926,5.39539-7.40698,.37-7.98004ZM13.01603,29c0-3.85999,3.14001-7,7-7,7.50073,.0766,9.64545,10.1944,2.94989,13.33997-4.41595,2.20032-10.05194-1.28766-9.94989-6.33997Zm-4,19c0-4.98999,3.34003-9.22003,7.90002-10.56,.57001,.21997,1.16998,.37,1.77997,.46997l-2.63995,8.79999c-.09003,.31-.03003,.63,.15997,.89001,.19,.25,.47998,.40002,.79999,.40002h6c.32001,0,.60999-.15002,.79999-.40002,.19-.26001,.25-.58002,.16003-.89001l-2.64001-8.79999c.60999-.09998,1.21002-.25,1.78003-.46997,4.56,1.33997,7.89996,5.57001,7.89996,10.56v2H9.01603v-2Zm24,6v2H6.01603c-1.09998,0-2-.90002-2-2,0-1.10004,.90002-2,2-2h27.15002c-.10004,.65997-.15002,1.32001-.15002,2Zm13-13c-3.30859,0-6-2.69141-6-6,.28149-7.9411,11.71973-7.93909,12,.00006,0,3.30853-2.69141,5.99994-6,5.99994Zm13,14.72998c-.00696-1.04706,.04614-2.51288-.13-3.52997,1.4137,.60962,1.49786,2.82092,.13,3.52997Z" fill="#ffffff" className="color000000 svgShape"></path><path d="M55.01603 6h-18c-2.20557 0-4 1.79395-4 4v8c0 2.20605 1.79443 4 4 4h6.03369l2.10889 3.51465c.18066.30078.50635.48535.85742.48535s.67676-.18457.85742-.48535l2.10889-3.51465h6.03369c2.20557 0 4-1.79395 4-4V10c0-2.20605-1.79443-4-4-4zm-9 14c-1.31372-.02521-1.31348-1.97498 0-2 1.3136.02545 1.31342 1.97473 0 2zm1.99994-5c-.55121 0-.99994.44824-.99994 1-.02087 1.31268-1.97833 1.31561-2-.00006 0-1.65424 1.3457-2.99994 3-2.99994 1.31366-.02289 1.31433-1.97705 0-2h-2c-1.31323-.02063-1.31494-1.97876.00006-2-.00006 0 1.99994 0 1.99994 0 3.95599.10419 3.9552 5.89655-.00006 6zM19.01603 15v2c.02191 1.3139 1.97803 1.31482 2 0v-2c-.02197-1.31415-1.97803-1.3147-2 0zM14.28855 16.18652c-.00006 0 .68402 1.87891.68402 1.87891.47449 1.23352 2.30774.55066 1.87891-.68365 0 .00006-.68408-1.87885-.68408-1.87885-.46887-1.22766-2.30792-.55927-1.87885.68359zM23.86467 15.50293l-.68408 1.87891c-.42841 1.23395 1.40405 1.91766 1.87891.68353 0 .00006.68408-1.87885.68408-1.87885.42896-1.242-1.40979-1.91193-1.87891-.68359z" fill="#ffffff" className="color000000 svgShape"></path></svg>
                {/* <i className="fa fa-paint-brush"> </i> */}
              </div>
              <div className="service-title"> Consultation Services </div>
              <div className="service-desc">
              Providing personalized advice and expertise in various fields such as business, finance, health, or education.
              </div>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="Training"><path d="M57.975 7.5h-30c-2.206 0-4 1.794-4 4v18.24c-1.823-.677-3.22-2.508-5.306-2.24 6.542-5.23 2.835-15.992-5.644-16-8.48.009-12.186 10.772-5.644 16H6.025c-2.176-.009-4.02 1.817-4 4v8c0 1.103.897 2 2 2h2v2c0 .737.405 1.375 1 1.722V53.5c0 1.654 1.346 3 3 3h6c1.654 0 3-1.346 3-3v-8.278c.595-.347 1-.985 1-1.722v-9.044a24.3 24.3 0 0 0 3.95 1.743V41.5c0 2.206 1.794 4 4 4h14v3c0 .062.025.115.035.173-3.163 1.09-2.414 5.794.965 5.827 3.38-.033 4.128-4.737.965-5.827.01-.058.035-.111.035-.173v-3h14c2.206 0 4-1.794 4-4v-30c0-2.206-1.794-4-4-4Zm-51.95 13c0-3.86 3.14-7 7-7 9.274.352 9.271 13.65 0 14-3.86 0-7-3.14-7-7Zm11 33a1 1 0 0 1-1 1h-1v-5a1 1 0 1 0-2 0v5h-3a1 1 0 0 1-1-1v-8h8v8Zm8.003-19.053a22.557 22.557 0 0 1-5.458-2.595.998.998 0 0 0-1.545.838V43.5h-10v-9a1 1 0 1 0-2 0v5h-2v-8c-.02-1.068.913-2 2-2h13.3c.208 0 .413.065.58.185 3.464 2.45 7.657 3.83 11.92 3.815.613-.095.997.4 1.474.92.112.571-.45 1.068-1.044 1.08-2.45.036-4.889-.307-7.227-1.053ZM43.975 51.5c-.023 1.314-1.977 1.314-2 0 .023-1.314 1.977-1.314 2 0Zm16-10c0 1.103-.897 2-2 2h-30c-1.102 0-2-.897-2-2v-4.719c1.914.472 3.874.719 5.85.719 1.452.128 2.893-.707 3.335-2.034 1.341.266 2.556-.638 3.05-1.291.75-.915 1.438-.915 2.188 0 1.34 1.757 3.803 1.755 5.14 0 .751-.916 1.442-.914 2.193 0 1.332 1.751 3.81 1.757 5.145.002.442-.482.64-.677 1.1-.677 1.308-.02 1.318-1.978 0-2-1.358 0-2.06.766-2.574 1.324-.44.48-.638.676-1.098.676s-.657-.195-1.1-.677c-.512-.558-1.214-1.323-2.57-1.323s-2.06.766-2.57 1.324c-.441.48-.638.676-1.096.676s-.655-.195-1.095-.676c-.512-.558-1.214-1.324-2.57-1.324s-2.056.766-2.568 1.324c-.546.651-1.028.879-1.663.507-.492-1.298-1.878-1.95-3.247-1.83-2-.008-3.98-.305-5.85-.956V11.5c0-1.103.898-2 2-2h30c1.103 0 2 .897 2 2v30Z" fill="#ffffff" className="color000000 svgShape"></path><path d="M53.975 17.5c-1.357 0-2.06.765-2.573 1.324-.44.48-.638.676-1.098.676s-.657-.195-1.1-.676c-.512-.559-1.214-1.324-2.57-1.324s-2.06.766-2.57 1.325c-.752.915-1.44.915-2.191 0-1.331-1.754-3.806-1.756-5.138 0-.752.916-1.439.915-2.19 0-.512-.56-1.214-1.325-2.57-1.325-1.308.02-1.32 1.977 0 2 .458 0 .654.195 1.095.675.512.56 1.214 1.325 2.57 1.325s2.058-.766 2.57-1.325c.44-.48.636-.675 1.093-.675.458 0 .655.195 1.095.675.512.56 1.214 1.325 2.57 1.325 1.356 0 2.058-.765 2.57-1.324.751-.917 1.442-.915 2.193 0 1.327 1.749 3.812 1.757 5.145 0 .442-.48.64-.676 1.1-.676 1.306-.02 1.32-1.978 0-2zm0 7c-1.357 0-2.06.765-2.573 1.324-.44.48-.638.676-1.098.676s-.657-.195-1.1-.676c-.512-.559-1.214-1.324-2.57-1.324s-2.06.766-2.57 1.325c-.752.915-1.44.915-2.191 0-1.331-1.754-3.806-1.756-5.138 0-.752.916-1.439.915-2.19 0-.512-.56-1.214-1.325-2.57-1.325-1.308.02-1.32 1.977 0 2 .458 0 .654.195 1.095.675.512.56 1.214 1.325 2.57 1.325s2.058-.766 2.57-1.325c.44-.48.636-.675 1.093-.675.458 0 .655.195 1.095.675.512.56 1.214 1.325 2.57 1.325 1.356 0 2.058-.766 2.57-1.324.751-.917 1.442-.915 2.193 0 1.327 1.748 3.812 1.758 5.145 0 .442-.48.64-.676 1.1-.676 1.306-.02 1.32-1.978 0-2z" fill="#ffffff" className="color000000 svgShape"></path></svg>
                {/* <i className="fas fa-code"> </i> */}
              </div>
              <div className="service-title"> Training and Workshops </div>
              <div className="service-desc">
              Offering educational programs and hands-on workshops to develop skills, enhance knowledge, and stay updated with industry trends.
              </div>
            </div>

            <div className="service-box">
              <div className="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="Networking"><path d="M8.41 16.59a2.176 2.176 0 10-2.96 0A2.522 2.522 0 004.4 18.632H5.478a1.452 1.452 0 112.9 0H9.459A2.523 2.523 0 008.41 16.59zM5.832 15.005a1.1 1.1 0 111.1 1.1A1.1 1.1 0 015.832 15.005zM13.471 9.561h1.078a1.451 1.451 0 012.9 0h1.078A2.52 2.52 0 0017.48 7.52a2.175 2.175 0 10-2.96 0A2.52 2.52 0 0013.471 9.561zM14.9 5.934a1.1 1.1 0 111.1 1.1A1.1 1.1 0 0114.9 5.934zM26.55 16.59a2.175 2.175 0 10-2.96 0 2.521 2.521 0 00-1.049 2.042h1.078a1.451 1.451 0 112.9 0H27.6A2.522 2.522 0 0026.55 16.59zm-2.577-1.585a1.1 1.1 0 111.1 1.1A1.1 1.1 0 0123.973 15.005zM17.48 25.66a2.175 2.175 0 10-2.96 0A2.521 2.521 0 0013.471 27.7h1.078a1.451 1.451 0 112.9 0h1.078A2.521 2.521 0 0017.48 25.66zM14.9 24.075a1.1 1.1 0 111.1 1.1A1.1 1.1 0 0114.9 24.075z" fill="#ffffff" className="color000000 svgShape"></path><path d="M29.051,12.011a5.63,5.63,0,0,0-7.55-.34l-1.17-1.18a5.623,5.623,0,1,0-8.66,0l-1.18,1.18a5.63,5.63,0,1,0,0,8.66l1.18,1.17a5.62,5.62,0,1,0,8.66,0l1.17-1.17a5.624,5.624,0,0,0,7.55-8.32Zm-16.27-8.3a4.554,4.554,0,1,1,0,6.44A4.519,4.519,0,0,1,12.781,3.711Zm-2.63,15.51a4.56,4.56,0,1,1,0-6.44A4.551,4.551,0,0,1,10.151,19.221Zm9.07,9.07a4.56,4.56,0,1,1,0-6.441A4.551,4.551,0,0,1,19.221,28.291Zm.34-7.55a5.622,5.622,0,0,0-7.13,0l-1.17-1.18a5.622,5.622,0,0,0,0-7.13l1.17-1.17a5.538,5.538,0,0,0,7.13,0l1.18,1.17a5.622,5.622,0,0,0,0,7.13Zm8.73-1.52a4.56,4.56,0,1,1,0-6.44A4.551,4.551,0,0,1,28.291,19.221Z" fill="#fff" className="color000000 svgShape"></path></svg>
                {/* <i className="fas fa-brush"> </i> */}
              </div>
              <div className="service-title"> Networking Events </div>
              <div className="service-desc">
              Organizing gatherings, meetups, and conferences to facilitate networking opportunities, collaboration, and relationship-building among community members.
              </div>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="conversation"><path fill="#fff" fillRule="evenodd" d="M404 400.518c46.486 0 85.813 30.648 98.878 72.84 2.296 7.413 1.048 14.788-3.556 21.034-4.604 6.246-11.28 9.619-19.04 9.619H327.72c-7.76 0-14.436-3.373-19.04-9.619-4.605-6.246-5.852-13.622-3.557-21.034 13.065-42.192 52.393-72.84 98.877-72.84z" clipRule="evenodd"></path><path fill="#fff" fillRule="evenodd" d="M404.001 400.518c46.485 0 85.813 30.648 98.878 72.84 2.296 7.412 1.048 14.788-3.557 21.034-4.604 6.246-11.28 9.619-19.04 9.619h-27.953c7.76 0 14.436-3.373 19.04-9.619 4.605-6.246 5.852-13.622 3.557-21.034-11.733-37.888-44.646-66.463-84.901-71.898 4.57-.618 9.235-.942 13.976-.942z" clipRule="evenodd"></path><ellipse cx="404.001" cy="344.216" fill="#fff" fillRule="evenodd" clipRule="evenodd" rx="52.325" ry="52.326" transform="rotate(-7.765 403.873 344.122)"></ellipse><path fill="#fff" fillRule="evenodd" d="M404.001 291.89c28.899 0 52.326 23.427 52.326 52.325 0 28.899-23.427 52.326-52.326 52.326-2.37 0-4.702-.161-6.988-.466 25.594-3.416 45.337-25.332 45.337-51.86s-19.743-48.444-45.337-51.86a52.982 52.982 0 0 1 6.988-.465z" clipRule="evenodd"></path><g fillRule="evenodd" clipRule="evenodd"><path fill="#fff" d="M108 400.518c46.486 0 85.813 30.648 98.878 72.84 2.296 7.413 1.048 14.788-3.556 21.034-4.604 6.246-11.28 9.619-19.04 9.619H31.719c-7.76 0-14.436-3.373-19.04-9.619-4.605-6.246-5.852-13.622-3.557-21.034 13.066-42.192 52.394-72.84 98.878-72.84z"></path><path fill="#60b7ff" d="M108 400.518c46.485 0 85.813 30.648 98.878 72.84 2.296 7.412 1.048 14.788-3.557 21.034-4.604 6.246-11.28 9.619-19.04 9.619h-27.953c7.76 0 14.436-3.373 19.04-9.619 4.605-6.246 5.852-13.622 3.557-21.034-11.733-37.888-44.646-66.463-84.901-71.898 4.571-.618 9.236-.942 13.976-.942z"></path><circle cx="108.001" cy="344.216" r="52.326" fill="#f6dccd" transform="rotate(-61.844 108.003 344.207)"></circle><path fill="#f1cbbc" d="M108.001 291.89c28.899 0 52.326 23.427 52.326 52.325 0 28.899-23.427 52.326-52.326 52.326-2.37 0-4.702-.161-6.989-.466 25.594-3.416 45.337-25.332 45.337-51.86s-19.743-48.444-45.337-51.86a53.009 53.009 0 0 1 6.989-.465z"></path></g><g fillRule="evenodd" clipRule="evenodd"><path fill="#ffe177" d="M193.401 105.651H445.4c13.219 0 24 10.781 24 24V265.51c0 2.177-1.324 4.028-3.385 4.732-2.06.703-4.24.048-5.571-1.675l-34.859-45.111H193.401c-13.219 0-24-10.781-24-24v-69.805c0-13.219 10.781-24 24-24z"></path><path fill="#ffd064" d="M435.4 105.651h10c13.219 0 24 10.781 24 24V265.51c0 2.177-1.324 4.028-3.385 4.732-2.06.703-4.24.048-5.571-1.675l-1.248-1.615c.133-.457.204-.941.204-1.442V129.651c0-13.219-10.781-24-24-24z"></path></g><g fillRule="evenodd" clipRule="evenodd"><path fill="#8ac9fe" d="M336.6 8.01h-252c-13.219 0-24 10.781-24 24v135.859c0 2.177 1.324 4.028 3.385 4.732 2.06.703 4.24.048 5.571-1.675l34.859-45.111H336.6c13.219 0 24-10.781 24-24V32.01c0-13.219-10.781-24-24-24z"></path><path fill="#60b7ff" d="M336.6 8.01h-10c13.219 0 24 10.781 24 24v69.805c0 13.219-10.781 24-24 24h10c13.219 0 24-10.781 24-24V32.01c0-13.219-10.781-24-24-24zM60.804 169.311c.445 1.527 1.595 2.748 3.181 3.29 2.06.703 4.24.048 5.571-1.675l34.859-45.111h-10l-33.611 43.496z"></path></g><path fillRule="evenodd" d="M495.239 475.723c-12.45-40.191-49.107-67.2-91.233-67.2h-.019c-42.12 0-78.778 27.009-91.218 67.2-1.562 5.02-.769 9.7 2.349 13.917 3.109 4.232 7.35 6.369 12.601 6.369h152.559c5.251 0 9.492-2.137 12.601-6.369 3.12-4.218 3.913-8.898 2.36-13.917zm-91.251-83.204h.019c24.443-.009 44.324-19.89 44.324-44.328 0-24.443-19.89-44.319-44.328-44.319-24.443 0-44.324 19.876-44.324 44.319-.001 24.438 19.871 44.319 44.309 44.328zM505.76 499.141c-6.119 8.299-15.172 12.87-25.481 12.87H327.72c-10.308 0-19.362-4.571-25.481-12.87-6.119-8.298-7.808-18.3-4.76-28.151 6.893-22.259 21.013-42.238 39.752-56.279 9.988-7.482 20.966-13.129 32.576-16.861-15.767-10.889-26.127-29.08-26.127-49.659 0-33.261 27.061-60.322 60.322-60.322 33.265 0 60.326 27.061 60.326 60.322 0 20.579-10.36 38.771-26.127 49.659a110.964 110.964 0 0 1 32.567 16.861c18.744 14.04 32.864 34.02 39.752 56.279 3.048 9.851 1.359 19.853-4.76 28.151zm-306.519-23.418c-12.45-40.191-49.112-67.2-91.232-67.2h-.019c-42.12 0-78.778 27.009-91.228 67.2-1.552 5.02-.759 9.7 2.359 13.917 3.109 4.232 7.35 6.369 12.601 6.369h152.559c5.251 0 9.488-2.137 12.601-6.369 3.118-4.218 3.906-8.898 2.359-13.917zm-91.252-83.204h.019c24.443-.009 44.324-19.89 44.324-44.328 0-24.443-19.89-44.319-44.333-44.319-24.438 0-44.319 19.876-44.319 44.319 0 24.438 19.871 44.319 44.309 44.328zm106.533 78.472c3.048 9.851 1.359 19.852-4.76 28.151-6.124 8.299-15.173 12.87-25.481 12.87H31.721c-10.313 0-19.362-4.571-25.481-12.87-6.119-8.298-7.808-18.3-4.76-28.151 6.888-22.259 21.008-42.238 39.747-56.279 9.992-7.482 20.971-13.129 32.581-16.861-15.767-10.889-26.127-29.08-26.127-49.659 0-33.261 27.056-60.322 60.317-60.322 33.27 0 60.331 27.061 60.331 60.322 0 20.579-10.36 38.771-26.132 49.659a110.972 110.972 0 0 1 32.571 16.861c18.74 14.04 32.861 34.02 39.754 56.279zm5.099-396.078h84.529a8.002 8.002 0 0 0 0-16.002h-84.529a8.002 8.002 0 0 0 0 16.002zm-102.574 0h60.982a8.003 8.003 0 0 0 8.001-8.001 7.999 7.999 0 0 0-8.001-8.001h-60.982a7.999 7.999 0 0 0-7.997 8.001c.001 4.416 3.581 8.001 7.997 8.001zM68.6 159.078V32.009c0-8.822 7.18-15.998 15.998-15.998h252.001c8.822 0 16.003 7.176 16.003 15.998v69.805c0 8.822-7.18 16.003-16.003 16.003H104.408a8.034 8.034 0 0 0-6.332 3.104L68.6 159.078zm267.999-25.263H177.402v65.643c0 8.822 7.18 15.998 15.998 15.998h232.191a8.022 8.022 0 0 1 6.331 3.109l29.477 38.158V129.649c0-8.822-7.18-15.998-15.998-15.998h-79.08c-4.722 11.799-16.262 20.164-29.722 20.164zM52.602 182.516a8.009 8.009 0 0 0 5.416 7.572 8.01 8.01 0 0 0 2.581.425 8.003 8.003 0 0 0 6.331-3.104l41.408-53.594h53.061v65.643c0 17.645 14.361 32.001 32.001 32.001h228.261l41.408 53.589a7.994 7.994 0 0 0 6.332 3.114c.859 0 1.741-.142 2.581-.434a8.004 8.004 0 0 0 5.421-7.572V129.649c0-17.644-14.361-31.996-32.001-31.996H368.6V32.009c0-17.644-14.361-32.001-32.001-32.001H84.598c-17.64 0-31.996 14.356-31.996 32.001v150.507zm257.776-25.962h-84.529a7.996 7.996 0 0 0-7.997 8.001 7.995 7.995 0 0 0 7.997 7.997h84.529a7.999 7.999 0 1 0 0-15.998zm33.59 8.002a7.999 7.999 0 0 0 8.001 7.997h60.978a7.995 7.995 0 0 0 8.001-7.997 7.996 7.996 0 0 0-8.001-8.001H351.97a7.998 7.998 0 0 0-8.002 8.001z" clipRule="evenodd"></path></svg>
                {/* <i className="fas fa-object-ungroup"> </i> */}
              </div>
              <div className="service-title"> Mentorship Programs </div>
              <div className="service-desc">
              Pairing experienced professionals with mentees to provide guidance, support, and career development opportunities.
              </div>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" style={{width: '40px', margin:'19px'}} viewBox="0 0 510.66 490.63" id="InformationResources"><g data-name="Layer 2" fill="#000000" className="color000000 svgShape"><g data-name="5701 - Information Resources" fill="#000000" className="color000000 svgShape"><path fill="#ffffff" d="M460.66 380.48H50a50.05 50.05 0 01-50-50V50A50.06 50.06 0 0150 0H460.66a50.06 50.06 0 0150 50V330.48A50.05 50.05 0 01460.66 380.48zM50 20A30 30 0 0020 50V330.48a30 30 0 0030 30H460.66a30 30 0 0030-30V50a30 30 0 00-30-30zM375.49 490.63H135.17a10 10 0 01-10-10 60.07 60.07 0 0160-60.06H325.49a60.06 60.06 0 0160 60A10.06 10.06 0 01375.49 490.63zm-229.07-20H364.24a40.06 40.06 0 00-38.75-30.06H185.17A40.06 40.06 0 00146.42 470.63z" className="color1f140f svgShape"></path><path fill="#ffffff" d="M320.42 440.57H190.24a10 10 0 01-8.94-14.48l30-60.08a10 10 0 018.94-5.53h70.1a10 10 0 018.94 5.53l30 60.08a10 10 0 01-8.94 14.48zm-114-20h97.82l-20-40.09H226.46zM500.66 310.39H10a10 10 0 010-20H500.66a10 10 0 010 20zM355.47 270.34A115.15 115.15 0 11470.61 155.2 115.28 115.28 0 01355.47 270.34zm0-210.29a95.15 95.15 0 1095.14 95.15A95.25 95.25 0 00355.47 60.05z" className="color1f140f svgShape"></path><path fill="#ffffff" d="M355.47,165.2a10,10,0,0,1-10-10V50.05a10,10,0,0,1,20,0V155.2A10,10,0,0,1,355.47,165.2Z" className="color1f140f svgShape"></path><path fill="#ffffff" d="M460.61,165.2H355.47a10,10,0,0,1,0-20H460.61a10,10,0,0,1,0,20Z" className="color1f140f svgShape"></path><path fill="#ffffff" d="M281.11 239.55A10 10 0 01274 222.47l74.35-74.35a10 10 0 1114.15 14.15l-74.35 74.35A10 10 0 01281.11 239.55zM210.27 110.12H50.05a10 10 0 01-10-10V50.05a10 10 0 0110-10H210.27a10 10 0 0110 10v50.07A10 10 0 01210.27 110.12zm-150.22-20H200.27V60.05H60.05zM210.27 150.17H50.05a10 10 0 110-20H210.27a10 10 0 010 20zM210.27 190.23H50.05a10 10 0 110-20H210.27a10 10 0 010 20zM210.27 230.28H50.05a10 10 0 110-20H210.27a10 10 0 010 20zM210.27 270.34H50.05a10 10 0 010-20H210.27a10 10 0 110 20z" className="color1f140f svgShape"></path></g></g></svg>
                {/* <i className="fab fa-android"> </i> */}
              </div>
              <div className="service-title"> Resource Hub </div>
              <div className="service-desc">
              Curating a repository of resources including articles, guides, templates, and tools to assist members in their personal and professional endeavors.
              </div>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" id="Networks"><path fill="#ffffff" d="M3 3C3 1.89543 3.89543 1 5 1 6.10457 1 7 1.89543 7 3 7 3.64476 6.6949 4.21826 6.2212 4.584 6.20695 4.59451 6.19279 4.60515 6.17873 4.6159 5.84819 4.85743 5.44074 5 5 5 3.89543 5 3 4.10457 3 3zM9.7788 4.584C9.79305 4.59451 9.80721 4.60515 9.82127 4.61591 10.1518 4.85744 10.5593 5 11 5 12.1046 5 13 4.10457 13 3 13 1.89543 12.1046 1 11 1 9.89543 1 9 1.89543 9 3 9 3.64476 9.3051 4.21826 9.7788 4.584zM6.26756 6C6.61337 5.4022 7.25972 5 8 5 8.74028 5 9.38663 5.4022 9.73244 6 9.90261 6.29417 10 6.63571 10 7 10 8.10457 9.10457 9 8 9 6.89543 9 6 8.10457 6 7 6 6.63571 6.09739 6.29417 6.26756 6zM2.49998 6L5.17071 6C5.06015 6.31278 5 6.64936 5 7 5 7.76835 5.28885 8.46924 5.76389 9H5.49998C4.41484 9 3.4912 9.69139 3.14547 10.6576 2.80551 10.5193 2.49098 10.3386 2.21215 10.1148 1.45897 9.51027 1 8.61608 1 7.5 1 6.67161 1.67156 6 2.49998 6zM10.5 9C11.5851 9 12.5088 9.69137 12.8545 10.6576 13.1945 10.5193 13.509 10.3386 13.7879 10.1148 14.541 9.51027 15 8.61608 15 7.5 15 6.67157 14.3284 6 13.5 6L10.8293 6C10.9398 6.31278 11 6.64936 11 7 11 7.76835 10.7111 8.46924 10.2361 9H10.5zM11.8871 10.928C11.9598 11.1043 12 11.2975 12 11.5 12 12.6161 11.541 13.5103 10.7879 14.1148 10.0466 14.7098 9.05308 15 8 15 6.94692 15 5.95342 14.7098 5.21215 14.1148 4.45897 13.5103 4 12.6161 4 11.5 4 11.2975 4.04015 11.1043 4.11292 10.928 4.33778 10.3833 4.87411 10 5.49998 10L10.5 10C11.1259 10 11.6622 10.3833 11.8871 10.928z" className="color212121 svgShape"></path></svg>
                {/* <i className="fas fa-database"> </i> */}
              </div>
              <div className="service-title"> Community Support Groups </div>
              <div className="service-desc">
              Establishing support groups or forums where members can share experiences, seek advice, and receive encouragement from peers facing similar challenges.
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* about listing section */}
      <div className="about-listing p-5 bg-light w-100 d-flex justify-evenly align-items-center">
        <div className="d-flex justify-items-center align-items-center" style={{minWidth: '300px'}}>
          <ItemCard item={items[0]} />
        </div>
        <div className="my-5 col-md-8" >
          <h1 className="fs-1">About Listing</h1>
          <div className="mt-4">
            <Timeline
              items={[
                {
                  children: 'When the user clicks on the "View Details" button, a modal pops up showing expanded details of the item. This modal contains additional information about the item, such as its type and other properties.',
                },
                {
                  children: 'The card displays the title and description of the item. This information provides a brief overview of what the item is about, helping users understand its purpose or characteristics.',
                },
                {
                  children: 'Additionally, the card mentions the transaction type associated with the item. This could indicate whether the item is for sale, rent, lease, or any other type of transaction.',
                },
                {
                  children: 'The card has a "View Details" button that allows users to see more information about the item. Clicking this button opens the modal, providing a more comprehensive view of the items details.',
                },
              ]}
            />
          </div>
        </div>
      </div>

      <div className="m-5">
        <h1 className="fs-1 text-center mb-5">Steps For Creating a Post</h1>
        <StepsForPost />
      </div>

      {/* testimonial-content */}
      <section className="testimonials">
        <div className="container">
          <div className="title">
            <h1>Testimonials</h1>
          </div>

          <div className="slider-indicator d-flex flex-wrap justify-content-evenly">
            <div className="my-5" style={{minWidth: '250px'}}>
              <img
                src={testimonial1}
                className="active mb-4"
                alt="img"
                data-id="0"
              />
              <div className="slider">
                <div className="slide active">
                  <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti soluta asperiores magni 
                      voluptatem iste consequuntur reiciendis quas velit veritatis animi, ducimus iusto ad sint 
                      similique sapiente, suscipit ab, rerum voluptatum. Quaerat ad eveniet architecto, quidem 
                      tempora error magnam! At nisi qui ratione, tempora vel corporis sint exercitationem maxime 
                      minima velit!	
                    </p>
                </div>
              </div>
            </div>

            <div className="my-5" style={{minWidth: '250px'}}>
              <img
                src={testimonial2}
                className="active mb-4"
                alt="img"
                data-id="1"
              />
              <div className="slider">
                <div className="slide active">
                  <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti soluta asperiores magni 
                      voluptatem iste consequuntur reiciendis quas velit veritatis animi, ducimus iusto ad sint 
                      similique sapiente, suscipit ab, rerum voluptatum. Quaerat ad eveniet architecto, quidem 
                      tempora error magnam! At nisi qui ratione, tempora vel corporis sint exercitationem maxime 
                      minima velit!	
                    </p>
                </div>
              </div>
            </div>

            <div className="my-5" style={{minWidth: '250px'}}>
              <img
                src={testimonial3}
                className="active mb-4"
                alt="img"
                data-id="2"
              />
              <div className="slider">
                <div className="slide active">
                  <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti soluta asperiores magni 
                      voluptatem iste consequuntur reiciendis quas velit veritatis animi, ducimus iusto ad sint 
                      similique sapiente, suscipit ab, rerum voluptatum. Quaerat ad eveniet architecto, quidem 
                      tempora error magnam! At nisi qui ratione, tempora vel corporis sint exercitationem maxime 
                      minima velit!	
                    </p>
                    <div className="client-info">
                      <h3>Jack</h3>
                      <span>Founder at Zim</span>
                    </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
      
      
    </div>
  );
};

export default HomePage;
