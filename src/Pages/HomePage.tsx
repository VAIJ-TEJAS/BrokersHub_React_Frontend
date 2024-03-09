import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { Carousel } from "antd";
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
      contact: '123',
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
                <i className="fa fa-paint-brush"> </i>
              </div>
              <div className="service-title"> Consultation Services </div>
              <div className="service-desc">
              Providing personalized advice and expertise in various fields such as business, finance, health, or education.
              </div>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <i className="fas fa-code"> </i>
              </div>
              <div className="service-title"> Training and Workshops </div>
              <div className="service-desc">
              Offering educational programs and hands-on workshops to develop skills, enhance knowledge, and stay updated with industry trends.
              </div>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <i className="fas fa-brush"> </i>
              </div>
              <div className="service-title"> Networking Events </div>
              <div className="service-desc">
              Organizing gatherings, meetups, and conferences to facilitate networking opportunities, collaboration, and relationship-building among community members.
              </div>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <i className="fas fa-object-ungroup"> </i>
              </div>
              <div className="service-title"> Mentorship Programs </div>
              <div className="service-desc">
              Pairing experienced professionals with mentees to provide guidance, support, and career development opportunities.
              </div>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <i className="fab fa-android"> </i>
              </div>
              <div className="service-title"> Resource Hub </div>
              <div className="service-desc">
              Curating a repository of resources including articles, guides, templates, and tools to assist members in their personal and professional endeavors.
              </div>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <i className="fas fa-database"> </i>
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
      <div className="about-listing p-5 bg-light w-100 d-flex">
        <div className="d-flex justify-items-center align-items-center" style={{minWidth: '300px'}}>
          <ItemCard item={items[0]} />
        </div>
        <div className="my-5 px-5 w-auto" >
          <h1 className="fs-1">About Listing</h1>
          <ul className="" style={{listStyleType: 'disc'}}>
            <li className="py-2">When the user clicks on the "View Details" button, a modal pops up showing expanded details of the item. This modal contains additional information about the item, such as its type and other properties.</li>
            <li className="py-2">The card displays the title and description of the item. This information provides a brief overview of what the item is about, helping users understand its purpose or characteristics.</li>
            <li className="py-2">Additionally, the card mentions the transaction type associated with the item. This could indicate whether the item is for sale, rent, lease, or any other type of transaction.</li>
            <li className="py-2">The card has a "View Details" button that allows users to see more information about the item. Clicking this button opens the modal, providing a more comprehensive view of the item's details</li>
          </ul>
        </div>
      </div>

      <div className="m-5">
        <h1 className="fs-1 text-center mb-5">Steps For Creatin a Post</h1>
        <StepsForPost />
      </div>

      {/* testimonial-content */}
      <section className="testimonials">
      <div className="container">
        <div className="title">
          <h1>Testimonials</h1>
        </div>

        <div className="slider-indicator">
          <img
            src={testimonial1}
            className={activeSlide === 0 ? "active" : ""}
            alt="img"
            data-id="0"
            onClick={() => handleSlideChange(0)}
          />
          <img
            src={testimonial2}
            className={activeSlide === 1 ? "active" : ""}
            alt="img"
            data-id="1"
            onClick={() => handleSlideChange(1)}
          />
          <img
            src={testimonial3}
            className={activeSlide === 2 ? "active" : ""}
            alt="img"
            data-id="2"
            onClick={() => handleSlideChange(2)}
          />
        </div>

        <div className="slider">
          <div className={activeSlide === 0 ? "slide active" : "slide"}>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti soluta asperiores magni 
                voluptatem iste consequuntur reiciendis quas velit veritatis animi, ducimus iusto ad sint 
                similique sapiente, suscipit ab, rerum voluptatum. Quaerat ad eveniet architecto, quidem 
                tempora error magnam! At nisi qui ratione, tempora vel corporis sint exercitationem maxime 
                minima velit!	
              </p>
          </div>
          <div className={activeSlide === 1 ? "slide active" : "slide"}>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti soluta asperiores magni 
                voluptatem iste consequuntur reiciendis quas velit veritatis animi, ducimus iusto ad sint 
                similique sapiente, suscipit ab, rerum voluptatum. Quaerat ad eveniet architecto, quidem 
                tempora error magnam! At nisi qui ratione, tempora vel corporis sint exercitationem maxime 
                minima velit!	
              </p>
          </div>
          <div className={activeSlide === 2 ? "slide active" : "slide"}>
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
      </section>
      
      
    </div>
  );
};

export default HomePage;
