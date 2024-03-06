import React, { ReactNode, useState } from 'react';
import { Layout } from 'antd';
import Filter from './Search'

import Navbar from './Navbar';

const { Content, Footer } = Layout;



interface Props {
  children: ReactNode;
}

const BrokerWebsiteLayout: React.FC<Props> = ({ children }) => {
  // const priceThumbRef = useRef<HTMLDivElement>(null);

  


  return (
    <Layout className="layout">
        <Navbar />
      <Layout>
        <Layout className='d-flex align-items-center' style={{ padding: '0 24px 24px' }}>
          <Content
            className="site-layout-background col-md-9 mt-5"
            style={{
              margin: 0,
              minHeight: 280,
            }}
          >
            <div style={{ marginBottom: '24px' }}>
              <Filter />
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
