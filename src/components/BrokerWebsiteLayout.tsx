import React, { ReactNode } from 'react';
import { Layout } from 'antd';
import Filter from './Search'

import Navbar from './Navbar';

const { Content, Footer } = Layout;

interface Props {
  children: ReactNode;
  page: string;
}

const BrokerWebsiteLayout: React.FC<Props> = ({ page, children }) => {

  return (
    <Layout className="layout">
        <Navbar />
      <Layout>
        <Layout className='d-flex align-items-center'>
          <Content
            className="site-layout-background col-md-9 mt-5"
            style={{
              margin: 0,
              minHeight: 280,
            }}
          >
            <div style={{ marginBottom: '24px' }}>
              <Filter page={page} />
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
