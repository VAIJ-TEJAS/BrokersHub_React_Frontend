import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { Carousel } from "antd";
import serviceLogo from "../components/tierra-mallorca-rgJ1J8SDEAY-unsplash.jpg";
import carLogo from "../components/sample1.jpg";
import "./HomePage.css";
import ItemCard from "../components/ItemCard";
import testimonial1 from "../components/testimonial-01.png"
import testimonial2 from "../components/testimonial-02.png"
import testimonial3 from "../components/testimonial-03.png"

const HomePage: React.FC = () => {

  const [activeSlide, setActiveSlide] = useState<number>(0);

  const handleSlideChange = (index: number) => {
    setActiveSlide(index);
  };

  // const slides = document.querySelector(".slider").children;
  // const indicatorImages = document.querySelector(".slider-indicator").children;

  // for(let i=0; i<indicatorImages.length; i++){
  //   indicatorImages[i].addEventListener("click", function(){

  //     for(let j=0; j<indicatorImages.length; j++){
  //       indicatorImages[j].classList.remove("active");
  //     }
  //     this.classList.add("active");
  //     const id=this.getAttribute("data-id");
  //     for(let j=0; j<slides.length; j++){
  //       slides[j].classList.remove("active");
  //     }

  //     slides[id].classList.add("active");
  //   })
  // }

  const contentStyle: React.CSSProperties = {
    height: "550px",
    color: "#fff",
    lineHeight: "60px",
    textAlign: "center",
    backgroundImage: `url(${carLogo})`, //primary-5
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
          <h3 style={{ ...contentStyle, backgroundImage: `url(${carLogo})` }}>
            <div className="homePage-intro h-100">
              <div className="p-5">
                <h1 className="fs-1 fw-bold my-5 pt-5">
                  Explore Our Offerings
                </h1>
                <p className="col-md-5 pb-5" style={{ fontFamily: "poppins" }}>
                  Welcome to BrokerHub, your premier destination for all things
                  real estate. Whether you're buying, selling, or simply
                  exploring, we're here to guide you every step of the way.
                  Discover a seamless experience tailored to your needs, where
                  finding your dream property is just a click away. Embark on a
                  journey through BrokerHub, where your real estate aspirations
                  come to life. Dive into a world of endless possibilities as
                  you explore our curated selection of properties, financial
                  products, and expert advice.
                </p>
              </div>
            </div>
          </h3>
        </div>
        <div>
          <h3 style={{ ...contentStyle, backgroundImage: `url(${carLogo})` }}>
            <div className="homePage-intro">
              <div className="p-5">
                <h1 className="fs-1 fw-bold my-5 pt-5">
                  Explore Our Offerings
                </h1>
                <p className="col-md-5 pb-5" style={{ fontFamily: "poppins" }}>
                  Welcome to BrokerHub, your premier destination for all things
                  real estate. Whether you're buying, selling, or simply
                  exploring, we're here to guide you every step of the way.
                  Discover a seamless experience tailored to your needs, where
                  finding your dream property is just a click away. Embark on a
                  journey through BrokerHub, where your real estate aspirations
                  come to life. Dive into a world of endless possibilities as
                  you explore our curated selection of properties, financial
                  products, and expert advice.
                </p>
              </div>
            </div>
          </h3>
        </div>
        <div>
          <h3 style={{ ...contentStyle, backgroundImage: `url(${carLogo})` }}>
            <div className="homePage-intro">
              <div className="p-5">
                <h1 className="fs-1 fw-bold my-5 pt-5">
                  Explore Our Offerings
                </h1>
                <p className="col-md-5 pb-5" style={{ fontFamily: "poppins" }}>
                  Welcome to BrokerHub, your premier destination for all things
                  real estate. Whether you're buying, selling, or simply
                  exploring, we're here to guide you every step of the way.
                  Discover a seamless experience tailored to your needs, where
                  finding your dream property is just a click away. Embark on a
                  journey through BrokerHub, where your real estate aspirations
                  come to life. Dive into a world of endless possibilities as
                  you explore our curated selection of properties, financial
                  products, and expert advice.
                </p>
              </div>
            </div>
          </h3>
        </div>
      </Carousel>
      {/* <div>
        <div className='bg-light'>
          <div className='container d-flex services-container justify-content-center align-items-center'>
            <div className='services-logo my-5 rounded overflow-hidden'>
              <img src={serviceLogo} alt="" />
            </div>
            <div className='m-5 me-0 services-info'>
              <div className='my-auto'>
                <h2 className='fs-1 fw-bold'>Services</h2>
                <p className='mt-3' style={{fontFamily: 'poppins'}}>
                At BrokerHub, we offer a range of services tailored to your real estate needs. From posting your specific requirements to listing your properties, we provide a seamless platform to connect buyers and sellers effortlessly. Whether you're looking to buy, sell, or rent, our services empower you to navigate the real estate market with confidence. Experience convenience, efficiency, and reliability with BrokerHub as your trusted real estate partner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="services-section">
        <div className="inner-width">
          <h1 className="section-title">Our Services </h1>
          <div className="border" style={{width: '160px', height: '2px', background: '#82ccdd', margin: '40px auto'}}></div>
          <div className="services-container">
            <div className="service-box">
              <div className="service-icon">
                <i className="fa fa-paint-brush"> </i>
              </div>
              <div className="service-title"> Service Name </div>
              <div className="service-desc">
                Here's a description of the Service Name
              </div>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <i className="fas fa-code"> </i>
              </div>
              <div className="service-title"> Service Name </div>
              <div className="service-desc">
                Here's a description of the Service Name
              </div>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <i className="fas fa-brush"> </i>
              </div>
              <div className="service-title"> Service Name </div>
              <div className="service-desc">
                Here's a description of the Service Name
              </div>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <i className="fas fa-object-ungroup"> </i>
              </div>
              <div className="service-title"> Service Name </div>
              <div className="service-desc">
                Here's a description of the Service Name
              </div>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <i className="fas fa-database"> </i>
              </div>
              <div className="service-title"> Service Name </div>
              <div className="service-desc">
                Here's a description of the Service Name
              </div>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <i className="fab fa-android"> </i>
              </div>
              <div className="service-title"> Service Name </div>
              <div className="service-desc">
                Here's a description of the Service Name
              </div>
            </div>
          </div>
        </div>
      </div>

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
