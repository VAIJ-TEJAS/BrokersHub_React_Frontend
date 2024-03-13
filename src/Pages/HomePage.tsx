import React from "react";
import Navbar from "../components/Navbar";
import { Carousel, Timeline, Input, Space } from "antd";
import sample1 from "../components/Images/sample1.jpg";
import sample2 from "../components/Images/sample2.jpg";
import sample3 from "../components/Images/sample3.jpg";
import "./HomePage.css";
import ItemCard from "../components/ItemCard";
import StepsForPost from "../components/StepsForPost";
import StepsForRequirement from "../components/StepsForRequirement";

const { Search } = Input;

const HomePage: React.FC = () => {

  const contentStyle: React.CSSProperties = {
    height: "600px",
    color: "#fff",
    lineHeight: "60px",
    textAlign: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const post = [
    {
      title: 'Property 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      budget: 700000,
      image: 'https://cdn.britannica.com/05/157305-004-53D5D212.jpg',
      transaction: 'Sell',
      postType: 'Requirement',
      location: 'Ranchi',
      state: 'Jharkhand',
      ratio: 0,
    },
    {
      title: 'Requirement 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      budget: 700000,
      image: '',
      transaction: 'Buy',
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
              <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="Writing"><path d="M8,24H9a1,1,0,0,0,0-2H8a3,3,0,0,1-3-3V5A3,3,0,0,1,8,2h8a3,3,0,0,1,3,3V9a1,1,0,0,0,2,0V5a5.006,5.006,0,0,0-5-5H8A5.006,5.006,0,0,0,3,5V19A5.006,5.006,0,0,0,8,24Z" fill="#ffffff" className="color000000 svgShape"></path><path d="M16 5H8A1 1 0 0 0 8 7h8a1 1 0 0 0 0-2zM17 10a1 1 0 0 0-1-1H8a1 1 0 0 0 0 2h8A1 1 0 0 0 17 10zM8 13a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2zM18.879 12.879l-5.657 5.657a1 1 0 0 0-.264.467l-.929 3.757a1 1 0 0 0 .264.947 1.013 1.013 0 0 0 .947.264L17 23.042a.992.992 0 0 0 .467-.264l5.656-5.656a3 3 0 1 0-4.242-4.243zm-2.632 8.288l-1.879.465.465-1.879 3.339-3.339 1.414 1.414zm5.46-5.46L21 16.414 19.586 15l.707-.707a1 1 0 0 1 1.414 0A1.012 1.012 0 0 1 21.707 15.707z" fill="#ffffff" className="color000000 svgShape"></path></svg>
              </div>
              <div className="service-title"> Listing requirements </div>
              <div className="service-desc">
                Let us know what you're looking for, and we'll help you find it. Whether you're searching for a property to buy, rent, or manage, we've got you covered.
              </div>
            </div>

            <div className="service-box">
              <div className="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 70 70" viewBox="0 0 70 70" id="advertisement"><path d="M67 5.2600098H3c-.5499878 0-1 .4499512-1 1v40.251709h66V6.2600098C68 5.7099609 67.5599976 5.2600098 67 5.2600098zM25.0300293 32.3499756l-.0100098 8.5599976c0 1.6799927-1.3599854 3.0400391-3.039978 3.0400391-1.6800537 0-3.0500488-1.3600464-3.0500488-3.0400391v-9.0899658c-.0699463-.0300293-.1399536-.0500488-.2099609-.0800171-2.4400024-1.0900269-4.1500244-3.539978-4.1500244-6.3900146 0-3.8599854 3.1400146-7 7-7h3.460022V32.3499756zM50.5200195 30.0999756v9.5900269c0 .5499878-.4400024 1-1 1-.5499878 0-1-.4500122-1-1V39.5c-7.5100098-3.7800293-14.7299805-6.1500244-21.4899902-7.0200195V18.3299561c7.1300049-.8499756 14.3399658-3.25 21.4899902-7.1099854v-.2000122c0-.5499878.4500122-1 1-1 .5599976 0 1 .4500122 1 1v9.5900269c2.3499756.4400024 4.1199951 2.4000244 4.1199951 4.7399902C54.6400146 27.7000122 52.8699951 29.6599731 50.5200195 30.0999756zM68 48.5100098v5.7299805c0 .5499878-.4400024 1-1 1H44.7000122l2.6400146 7.5h3.7000122c.5499878 0 1 .4500122 1 1s-.4500122 1-1 1H18.9700317c-.5599976 0-1-.4500122-1-1s.4400024-1 1-1h3.7000122l2.6399536-7.5H3c-.5499878 0-1-.4500122-1-1v-5.7299805H68z" fill="#ffffff" className="color000000 svgShape"></path></svg>
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

      <div className="container">
        <h1 className="fs-1 fw-bold">Refer a Friend</h1>
        <div className="referral-form">
          <p className="mt-4 mb-3 container-lg">
          Unlock rewards by sharing your referral code! When new users register with your code, you earn a 0.25 commission from their first deal. The registration form includes a dedicated field for entering referral codes, making it easy for both referrers and referees to benefit from our program.
          </p>
          <Space direction="vertical">

            <Search
            className="iAmHere"
              placeholder="Enter your friend's email"
              allowClear
              enterButton="Send Invitation"
              size="large"
            />
          </Space>
        </div>
        <div className="referral-info">
          <h2>Your Referral Link:</h2>
          <p className="referral-link">https://example.com/referral?ref=your_referral_code</p>
        </div>
      </div>

      {/* about post section */}
      <div className="bg-light">
        <div className="about-listing p-5 pb-0 bg-light w-100 d-flex justify-evenly align-items-center">
          <div className="d-flex justify-items-center align-items-center" style={{minWidth: '300px'}}>
            <ItemCard item={post[0]} />
          </div>
          <div className="my-5 col-md-8" >
            <h1 className="fs-1">About Post</h1>
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
        <div className="m-5 border-bottom pb-4">
          {/* <h1 className="fs-1 text-center mb-5">Steps For Creating a Post</h1> */}
          <StepsForPost />
        </div>
      </div>

      {/* about requirement section */}
      <div>
        <div className="about-listing px-5 w-100 d-flex justify-evenly align-items-center">
          <div className="d-flex justify-items-center align-items-center" style={{minWidth: '300px'}}>
            <ItemCard item={post[1]} />
          </div>
          <div className="my-5 col-md-8" >
            <h1 className="fs-1">About Requirement</h1>
            <div className="mt-4">
              <Timeline
                items={[
                  {
                    children: 'When the user clicks on the "View Details" button, a modal pops up showing expanded details of the requirement. This modal contains additional information about the requirement, such as required type and other properties.',
                  },
                  {
                    children: 'The card displays the title and description of the requirement. This information provides a brief overview of what the requirement is, helping users understand required purpose or characteristics.',
                  },
                  {
                    children: 'Additionally, the card mentions the transaction type associated for requirement. This could indicate whether the requirement will be buying, rent, lease, or any other type of transaction.',
                  },
                  {
                    children: 'The card has a "View Details" button that allows users to see more information about the requirement. Clicking this button opens the modal, providing a more comprehensive view of the requirement.',
                  },
                ]}
              />
            </div>
          </div>
        </div>

        {/* steps section  */}
        <div className="m-5 mt-0">
          <StepsForRequirement />
        </div>
      </div>
      
      
    </div>
  );
};

export default HomePage;
