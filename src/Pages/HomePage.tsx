import React from "react";
import Navbar from "../components/Navbar";
import { Carousel, Timeline } from "antd";
import sample1 from "../components/Images/sample1.jpg";
import sample2 from "../components/Images/sample2.jpg";
import sample3 from "../components/Images/sample3.jpg";
import "./HomePage.css";
import ItemCard from "../components/ItemCard";
import testimonial1 from "../components/Images/testimonial-01.png";
import testimonial2 from "../components/Images/testimonial-02.png";
import testimonial3 from "../components/Images/testimonial-03.png";
import StepsForPost from "../components/StepsForPost";

const HomePage: React.FC = () => {

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
              <div className="service-title"> Listing requirements </div>
              <div className="service-desc">
                Let us know what you're looking for, and we'll help you find it. Whether you're searching for a property to buy, rent, or manage, we've got you covered.
              </div>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="Training"><path d="M57.975 7.5h-30c-2.206 0-4 1.794-4 4v18.24c-1.823-.677-3.22-2.508-5.306-2.24 6.542-5.23 2.835-15.992-5.644-16-8.48.009-12.186 10.772-5.644 16H6.025c-2.176-.009-4.02 1.817-4 4v8c0 1.103.897 2 2 2h2v2c0 .737.405 1.375 1 1.722V53.5c0 1.654 1.346 3 3 3h6c1.654 0 3-1.346 3-3v-8.278c.595-.347 1-.985 1-1.722v-9.044a24.3 24.3 0 0 0 3.95 1.743V41.5c0 2.206 1.794 4 4 4h14v3c0 .062.025.115.035.173-3.163 1.09-2.414 5.794.965 5.827 3.38-.033 4.128-4.737.965-5.827.01-.058.035-.111.035-.173v-3h14c2.206 0 4-1.794 4-4v-30c0-2.206-1.794-4-4-4Zm-51.95 13c0-3.86 3.14-7 7-7 9.274.352 9.271 13.65 0 14-3.86 0-7-3.14-7-7Zm11 33a1 1 0 0 1-1 1h-1v-5a1 1 0 1 0-2 0v5h-3a1 1 0 0 1-1-1v-8h8v8Zm8.003-19.053a22.557 22.557 0 0 1-5.458-2.595.998.998 0 0 0-1.545.838V43.5h-10v-9a1 1 0 1 0-2 0v5h-2v-8c-.02-1.068.913-2 2-2h13.3c.208 0 .413.065.58.185 3.464 2.45 7.657 3.83 11.92 3.815.613-.095.997.4 1.474.92.112.571-.45 1.068-1.044 1.08-2.45.036-4.889-.307-7.227-1.053ZM43.975 51.5c-.023 1.314-1.977 1.314-2 0 .023-1.314 1.977-1.314 2 0Zm16-10c0 1.103-.897 2-2 2h-30c-1.102 0-2-.897-2-2v-4.719c1.914.472 3.874.719 5.85.719 1.452.128 2.893-.707 3.335-2.034 1.341.266 2.556-.638 3.05-1.291.75-.915 1.438-.915 2.188 0 1.34 1.757 3.803 1.755 5.14 0 .751-.916 1.442-.914 2.193 0 1.332 1.751 3.81 1.757 5.145.002.442-.482.64-.677 1.1-.677 1.308-.02 1.318-1.978 0-2-1.358 0-2.06.766-2.574 1.324-.44.48-.638.676-1.098.676s-.657-.195-1.1-.677c-.512-.558-1.214-1.323-2.57-1.323s-2.06.766-2.57 1.324c-.441.48-.638.676-1.096.676s-.655-.195-1.095-.676c-.512-.558-1.214-1.324-2.57-1.324s-2.056.766-2.568 1.324c-.546.651-1.028.879-1.663.507-.492-1.298-1.878-1.95-3.247-1.83-2-.008-3.98-.305-5.85-.956V11.5c0-1.103.898-2 2-2h30c1.103 0 2 .897 2 2v30Z" fill="#ffffff" className="color000000 svgShape"></path><path d="M53.975 17.5c-1.357 0-2.06.765-2.573 1.324-.44.48-.638.676-1.098.676s-.657-.195-1.1-.676c-.512-.559-1.214-1.324-2.57-1.324s-2.06.766-2.57 1.325c-.752.915-1.44.915-2.191 0-1.331-1.754-3.806-1.756-5.138 0-.752.916-1.439.915-2.19 0-.512-.56-1.214-1.325-2.57-1.325-1.308.02-1.32 1.977 0 2 .458 0 .654.195 1.095.675.512.56 1.214 1.325 2.57 1.325s2.058-.766 2.57-1.325c.44-.48.636-.675 1.093-.675.458 0 .655.195 1.095.675.512.56 1.214 1.325 2.57 1.325 1.356 0 2.058-.765 2.57-1.324.751-.917 1.442-.915 2.193 0 1.327 1.749 3.812 1.757 5.145 0 .442-.48.64-.676 1.1-.676 1.306-.02 1.32-1.978 0-2zm0 7c-1.357 0-2.06.765-2.573 1.324-.44.48-.638.676-1.098.676s-.657-.195-1.1-.676c-.512-.559-1.214-1.324-2.57-1.324s-2.06.766-2.57 1.325c-.752.915-1.44.915-2.191 0-1.331-1.754-3.806-1.756-5.138 0-.752.916-1.439.915-2.19 0-.512-.56-1.214-1.325-2.57-1.325-1.308.02-1.32 1.977 0 2 .458 0 .654.195 1.095.675.512.56 1.214 1.325 2.57 1.325s2.058-.766 2.57-1.325c.44-.48.636-.675 1.093-.675.458 0 .655.195 1.095.675.512.56 1.214 1.325 2.57 1.325 1.356 0 2.058-.766 2.57-1.324.751-.917 1.442-.915 2.193 0 1.327 1.748 3.812 1.758 5.145 0 .442-.48.64-.676 1.1-.676 1.306-.02 1.32-1.978 0-2z" fill="#ffffff" className="color000000 svgShape"></path></svg>
                {/* <i className="fas fa-code"> </i> */}
              </div>
              <div className="service-title"> Post Advertisement </div>
              <div className="service-desc">
                Have something to sell or rent out? Post an ad with us and reach thousands of potential buyers or tenants. It's quick, easy, and hassle-free.
              </div>
            </div>

            <div className="service-box">
              <div className="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="Networking"><path d="M8.41 16.59a2.176 2.176 0 10-2.96 0A2.522 2.522 0 004.4 18.632H5.478a1.452 1.452 0 112.9 0H9.459A2.523 2.523 0 008.41 16.59zM5.832 15.005a1.1 1.1 0 111.1 1.1A1.1 1.1 0 015.832 15.005zM13.471 9.561h1.078a1.451 1.451 0 012.9 0h1.078A2.52 2.52 0 0017.48 7.52a2.175 2.175 0 10-2.96 0A2.52 2.52 0 0013.471 9.561zM14.9 5.934a1.1 1.1 0 111.1 1.1A1.1 1.1 0 0114.9 5.934zM26.55 16.59a2.175 2.175 0 10-2.96 0 2.521 2.521 0 00-1.049 2.042h1.078a1.451 1.451 0 112.9 0H27.6A2.522 2.522 0 0026.55 16.59zm-2.577-1.585a1.1 1.1 0 111.1 1.1A1.1 1.1 0 0123.973 15.005zM17.48 25.66a2.175 2.175 0 10-2.96 0A2.521 2.521 0 0013.471 27.7h1.078a1.451 1.451 0 112.9 0h1.078A2.521 2.521 0 0017.48 25.66zM14.9 24.075a1.1 1.1 0 111.1 1.1A1.1 1.1 0 0114.9 24.075z" fill="#ffffff" className="color000000 svgShape"></path><path d="M29.051,12.011a5.63,5.63,0,0,0-7.55-.34l-1.17-1.18a5.623,5.623,0,1,0-8.66,0l-1.18,1.18a5.63,5.63,0,1,0,0,8.66l1.18,1.17a5.62,5.62,0,1,0,8.66,0l1.17-1.17a5.624,5.624,0,0,0,7.55-8.32Zm-16.27-8.3a4.554,4.554,0,1,1,0,6.44A4.519,4.519,0,0,1,12.781,3.711Zm-2.63,15.51a4.56,4.56,0,1,1,0-6.44A4.551,4.551,0,0,1,10.151,19.221Zm9.07,9.07a4.56,4.56,0,1,1,0-6.441A4.551,4.551,0,0,1,19.221,28.291Zm.34-7.55a5.622,5.622,0,0,0-7.13,0l-1.17-1.18a5.622,5.622,0,0,0,0-7.13l1.17-1.17a5.538,5.538,0,0,0,7.13,0l1.18,1.17a5.622,5.622,0,0,0,0,7.13Zm8.73-1.52a4.56,4.56,0,1,1,0-6.44A4.551,4.551,0,0,1,28.291,19.221Z" fill="#fff" className="color000000 svgShape"></path></svg>
                {/* <i className="fas fa-brush"> </i> */}
              </div>
              <div className="service-title"> Support Management </div>
              <div className="service-desc">
                Need assistance with your property deal? We provide end-to-end support, ensuring a smooth transaction from start to finish. Plus, we charge only 0.5% commission, split evenly between both parties (0.25% from each side).
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

      {/* steps section  */}
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
