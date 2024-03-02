import React, { ReactNode, useRef, useState } from 'react';
import { Layout } from 'antd';
import Navbar from './Navbar';
import './brokerSlider.css';

const { Header, Content, Footer } = Layout;



interface Props {
  children: ReactNode;
}

const BrokerWebsiteLayout: React.FC<Props> = ({ children }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);
  const priceSliderRef = useRef<HTMLDivElement>(null);
  const priceThumbRef = useRef<HTMLDivElement>(null);

  const handlePriceChange = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const sliderRect = priceSliderRef.current?.getBoundingClientRect();
    if (!sliderRect) return;
    if (!priceSliderRef.current || !priceThumbRef.current) return;

    const mouseX = e.clientX - sliderRect.left;
    const positionPercentage = (mouseX / sliderRect.width) * 100;

    if (positionPercentage >= 0 && positionPercentage <= 100) {
      const priceRange = Math.round(positionPercentage);
      const newMinPrice = Math.min(minPrice, priceRange);
      const newMaxPrice = Math.max(maxPrice, priceRange);
      console.log(priceRange)
      setMinPrice(newMinPrice);
      setMaxPrice(newMaxPrice);
      priceThumbRef.current.style.left = `${positionPercentage}%`;
    }
  };


  return (
    <Layout className="layout">
      <Header>
        <Navbar />
      </Header>
      <Layout>
        <Layout className='container' style={{ padding: '0 24px 24px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <div style={{ marginBottom: '24px' }}>
              <div className='border text-light rounded d-flex justify-content-center mx-5' style={{backgroundColor:"#001529"}}>

                <div className='col-2 bg-primary m-2 p-2 rounded'>
                  <div className="price-slider" ref={priceSliderRef} onClick={handlePriceChange}>
                    <div className="price-slider-thumb" ref={priceThumbRef}></div>
                  </div>
                  <div style={{ marginTop: '5px' }}>
                    <span>Price Range: ${minPrice} - ${maxPrice}</span>
                  </div>
                </div>

                <div className="bg-primary m-2 p-2 rounded">
                  <input type="text" className="form-control my-1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Search Item' />
                </div>

                <div className="bg-primary m-2 p-2 rounded">
                  <input type="text" className="form-control my-1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Search Location' />
                </div>

                <div className='m-2 p-2 bg-primary'>
                  <select defaultValue={'Year'} className="form-select my-1" aria-label="Default select example">
                    <option value="Day">Day</option>
                    <option value="Week">Week</option>
                    <option value="Month">Month</option>
                    <option value="Year">Year</option>
                  </select>
                </div>

                <button className='btn btn-warning m-2 px-4 fs-5'><strong>Search</strong></button>

              </div>
            </div>
            {children}
          </Content>
        </Layout>
      </Layout>
      <Footer style={{ textAlign: 'center' }}>Broker's Website ©2024 Created by You</Footer>
    </Layout>
  );
};

export default BrokerWebsiteLayout;
