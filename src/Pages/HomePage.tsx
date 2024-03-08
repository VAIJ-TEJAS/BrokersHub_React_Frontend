import React from 'react'
import Navbar from '../components/Navbar'
import serviceLogo from '../components/tierra-mallorca-rgJ1J8SDEAY-unsplash.jpg'
import './HomePage.css'

export default function HomePage() {
  return (
    <div>
      <div className=''>
        <Navbar />
      </div>
      <div>
        <div className='homePage-intro'>
          <div className='p-5'>
            <h1 className='fs-1 fw-bold my-5 pt-5'>Explore Our Offerings</h1>
            <p className='col-md-5 pb-5' style={{fontFamily: 'poppins'}}>
            Welcome to BrokerHub, your premier destination for all things real estate. Whether you're buying, selling, or simply exploring, we're here to guide you every step of the way. Discover a seamless experience tailored to your needs, where finding your dream property is just a click away. Embark on a journey through BrokerHub, where your real estate aspirations come to life. Dive into a world of endless possibilities as you explore our curated selection of properties, financial products, and expert advice.
            </p>
          </div>
        </div>
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
      </div>
    </div>
  )
}
