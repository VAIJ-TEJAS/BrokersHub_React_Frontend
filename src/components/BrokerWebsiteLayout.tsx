import React, { ReactNode, useRef, useState } from 'react';
import { Layout, Menu } from 'antd';
import './brokerSlider.css';

const { Header, Content, Footer, Sider } = Layout;

const menuItems = [
  { key: '1', label: 'Home' },
  { key: '2', label: 'Properties' },
  { key: '3', label: 'Financial Products' },
  { key: '4', label: 'Contact' }
];

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
        <div className='d-flex flex-row align-items-evenly text-light'>
          <h2 className='my-auto me-5'>BrokerHub</h2>
          {/* <div className="logo" /> */}
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={menuItems}></Menu>
          <div className='ms-auto'>
            <button className='me-3 btn btn-outline-primary'>Login</button>
            <button className=' btn btn-primary'>Register</button>
          </div>
        </div>

      </Header>
      <Layout>
      <Sider width={300} style={{ background: '#f0f2f5', padding: '24px' }}>
          <div style={{ marginBottom: '24px' }}>
            <h2 style={{ marginBottom: '16px' }}>Filters</h2>
            {/* Price range filter slider */}
            <div className="price-slider" ref={priceSliderRef} onClick={handlePriceChange}>
              <div className="price-slider-thumb" ref={priceThumbRef}></div>
            </div>
            <div style={{ marginTop: '16px' }}>
              <span>Price Range: ${minPrice} - ${maxPrice}</span>
            </div>
          </div>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
      <Footer style={{ textAlign: 'center' }}>Broker's Website ©2024 Created by You</Footer>
    </Layout>
  );
};

export default BrokerWebsiteLayout;
