import React, { useEffect } from 'react'
import { Carousel, Button } from "antd";
import { ShareAltOutlined } from "@ant-design/icons";
import StepsForAdvertisement from "../components/StepsForAdvertisement";
import StepsForRequirement from "../components/StepsForRequirement";
import carousel_image_1 from "../assets/images/carousel_image_1.jpg";
import carousel_image_2 from "../assets/images/carousel_image_2.jpg";
import carousel_image_3 from "../assets/images/carousel_image_3.jpg";
import "./HomePage.css";
import { Context } from '../context/context.provider';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';


const Hero: React.FC = () => {

  return (
    <>
      <div className='carousel-container'>
        <Carousel autoplay className='h-full'>
          <div className='h-full'>
            <h3 className="border-b h-full carousel-container" style={{ backgroundImage: `url(${carousel_image_1})` }}>
              <div className="homePage-intro h-full">
                <div className="homePage-info p-5 h-full d-flex align-items-center">
                  <div className='flex flex-col justify-center'>
                    <h1 className="font-bold my-5 font-montserrat">
                      Explore Our Offerings
                    </h1>
                    <p className="col-md-5 pb-5 text-base 
                      sm:text-xl
                    ">
                      Welcome to TheBrokersHub, your premier destination for all things
                      real estate. Whether you're buying, selling, or simply
                      exploring, we're here to guide you every step of the way.
                    </p>
                  </div>
                </div>
              </div>
            </h3>
          </div>
          <div className='h-full'>
            <h3 className="border-b h-full carousel-container" style={{ backgroundImage: `url(${carousel_image_2})` }}>
              <div className="homePage-intro h-full">
                <div className="homePage-info p-5 h-full d-flex items-center">
                  <div className='flex flex-col justify-center'>
                    <h1 className="font-bold my-5 font-montserrat">
                      Redefining Excellence
                    </h1>
                    <p className="col-md-5 pb-5 text-base 
                      sm:text-xl
                    ">
                      Embracing a relentless pursuit of perfection, we at TheBrokersHub are redefining excellence. With an unwavering commitment to quality, innovation, and customer satisfaction, every creation that bears our name is a testament to our dedication.
                    </p>
                  </div>
                </div>
              </div>
            </h3>
          </div>
          <div>
            <h3 className="border-bottom h-full carousel-container" style={{ backgroundImage: `url(${carousel_image_3})` }}>
              <div className="homePage-intro h-100">
                <div className="homePage-info p-5 h-full d-flex items-center">
                  <div className='flex flex-col justify-center'>
                    <h1 className="font-bold my-5 font-montserrat">
                      Join Our Growing Community
                    </h1>
                    <p className="col-md-5 pb-5 text-base 
                      sm:text-xl
                    ">
                      Join our growing community and become part of a vibrant network of individuals who share your interests and passions. Whether you're a seasoned expert or just starting out, our community welcomes everyone with open arms.
                    </p>
                  </div>
                </div>
              </div>
            </h3>
          </div>
        </Carousel>
      </div>
    </>
  )
}

const OutServices: React.FC = () => {

  return (
    <>
      <div className="services-section">
        <div className="inner-width">
          <h1 className="section-title" style={{ fontSize: '3.5rem' }}>Our Services </h1>
          <div className="border" style={{ width: '160px', height: '2px', background: '#82ccdd', margin: '40px auto' }}></div>
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
    </>
  )
}

const Referral: React.FC = () => {

  const { setref_code, userAuthenticated, showAuthModal } = Context();

  const shareLink = async () => {
    const storedUserData = JSON.parse(localStorage.getItem('share-coupon-user') || '{}');
    const shareData = {
      title: 'Your Website Title',
      text: 'Check out this awesome website!',
      url: `https://thebrokershub.in/home/${storedUserData.my_referral_code}`,
    };

    try {
      await navigator.share(shareData);
      console.log('Shared successfully');
    } catch (error) {
      console.error('Error sharing:', error);
      // Fallback options for browsers that do not support Web Share API
      // const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareData.text + ' ' + shareData.url)}`;
      // const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareData.url)}`;
      // const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareData.url)}&text=${encodeURIComponent(shareData.text)}`;
      // const instagramUrl = `https://www.instagram.com`;

      // // Open the share URLs in a new tab/window
      // window.open(whatsappUrl, '_blank');
      // window.open(facebookUrl, '_blank');
      // window.open(twitterUrl, '_blank');
      // window.open(instagramUrl, '_blank');
    }
};

const { referral } = useParams();

useEffect(() => {

  if (referral && !userAuthenticated) {
    console.log('Referral')
    showAuthModal();
    setref_code(referral)
  }
}, [])


  return (
    <>
      <div className="m-4 shadow rounded overflow-hidden d-flex bg-[#F5F5F5]">
        <div className="col-5 referral-img">
          <img className="h-100" src="https://t3.ftcdn.net/jpg/02/65/10/72/360_F_265107234_1W0i4qjxk8DNkZdnaaneNwMzXeaC99B1.jpg" alt="" />
        </div>
        <div className="sm:p-5 p-3 referral-info">
          <h1 className="mb-5 text-primary font-montserrat">Earn by joining Our referral program</h1>
          <p>Unlock rewards by sharing your referral code! When new users register with your code, you earn a <span className='font-medium md:text-2xl text-xl text-primary'>0.25% commission from their first deal</span>. The registration form includes a dedicated field for entering referral codes, making it easy for both referrers and referees to benefit from our program.</p>
          {userAuthenticated ?
          <Button
            type="primary"
            size='large'
            className={`mt-5`}
            onClick={shareLink}
            icon={<ShareAltOutlined className="" />}
          >
            Share Referral Code
          </Button>
          :
            <Button className="mt-5" type='primary' size="large" onClick={showAuthModal}>Register</Button>
          }
        </div>
      </div>
    </>
  )
}

const Advertisement: React.FC = () => {
  return (
    <>
      <div className="bg-light">
        <h1 className="text-center pt-5 font-montserrat">Posting an Advertisement</h1>
        <div className="my-5 mt-0 border-bottom pb-4">
          <StepsForAdvertisement />
        </div>
      </div>
    </>
  )
}

const Requirement: React.FC = () => {
  return (
    <>
      <div>
        <h1 className="text-center pt-5 font-montserrat">Posting an Requirement</h1>
        <div className="my-5 mt-0">
          <StepsForRequirement />
        </div>
      </div>
    </>
  )
}

const HomePage: React.FC = () => {
  return (
    <div className='bg-[#F5F5F5]'>
      <Navbar />
      <Hero />
      <OutServices />
      <Referral />
      <Advertisement />
      <Requirement />
    </div>
  );
};

export default HomePage;
