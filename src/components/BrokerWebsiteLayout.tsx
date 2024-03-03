import React, { ReactNode, useState } from 'react';
import { Layout, Slider } from 'antd';

import Navbar from './Navbar';
import './brokerSlider.css';

const { Content, Footer } = Layout;



interface Props {
  children: ReactNode;
}

const BrokerWebsiteLayout: React.FC<Props> = ({ children }) => {
  // const priceThumbRef = useRef<HTMLDivElement>(null);

  const min = 0; // Set the minimum value
  const max = 100; // Set the maximum value

  const [rangeValue, setRangeValue] = useState<number[]>([min, max]);

  const handleRangeChange = (value: number[]) => {
    setRangeValue(value);
  };


  return (
    <Layout className="layout">
        <Navbar />
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
                  {/* <div className="price-slider" ref={priceSliderRef} onClick={handlePriceChange}>
                    <div className="price-slider-thumb" ref={priceThumbRef}></div>
                  </div> */}
                  <Slider range defaultValue={rangeValue} disabled={false} min={min} max={max} onChange={handleRangeChange} />
                  <div style={{ marginTop: '5px' }}>
                    <span>Price Range: ${rangeValue[0]} - ${rangeValue[1]}</span>
                  </div>
                </div>

                <div className="bg-primary m-2 p-2 rounded">
                  <input type="text" className="form-control my-1" id="item" aria-describedby="emailHelp" placeholder='Search Item' />
                </div>

                <div className="bg-primary m-2 p-2 rounded">
                  <input type="text" className="form-control my-1" id="location" aria-describedby="emailHelp" placeholder='Search Location' />
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
