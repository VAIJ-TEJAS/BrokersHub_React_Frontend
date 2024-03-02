// import React from 'react'
import { Layout } from 'antd';
import Navbar from '../components/Navbar';

const { Header, Sider, Content, Footer } = Layout;

export default function landing() {
    return (
        <Layout>
            <Header className='p-0' style={{ display: 'flex', alignItems: 'center', color:'white', lineHeight: '0px' }}>
                <Navbar />
            </Header>
            <Content style={{ padding: '0 48px' }}>
                <Layout >
                    <Sider width={200} style={{color:'white'}}>
                        <h1>This is Sider</h1>
                    </Sider>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}><h1>This is Content</h1></Content>
                </Layout>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </Layout>
    )
}
