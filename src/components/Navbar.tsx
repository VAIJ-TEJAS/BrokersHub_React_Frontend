import {useState} from 'react'
import { Menu, Modal } from 'antd';
import Autentication from './Authentication';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';

const { Header } = Layout;

const menuItems = [
    { key: '1', label: 'Home', link: '/home' },
    { key: '4', label: 'Contact', link: '/AddItem' }
];

  
  
export default function Navbar() {
    const [defaultTab, setDefaultTab] = useState('1')
    const [modalVisible, setModalVisible] = useState(false);
  
    const showModal = () => {
      setModalVisible(true);
    };
  
    const handleOk = () => {
      setModalVisible(false);
    };
  
    const handleCancel = () => {
      setModalVisible(false)
    };
    return (
      <Header>
        <div className='d-flex flex-row align-items-evenly text-light'>
            <Modal title="Authentication"
                open={modalVisible}
                onCancel={handleCancel}
                footer={null}>
                <Autentication defaultTab={defaultTab} />
            </Modal>
          <h2 className='my-auto me-5 fs-4'><strong>BrokerHub</strong></h2>
          {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ width: '12%' }} items={menuItems}></Menu> */}
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ width: '12%' }}>
            {menuItems.map(item => (
                <Menu.Item key={item.key} className={location.pathname === item.link ? 'ant-menu-item-selected' : ''}>
                    <Link to={item.link}>{item.label}</Link>
                </Menu.Item>
            ))}
        </Menu>
          <div>
            <a href='/AddItem' className='btn btn-warning'>Add Item</a>
          </div>
          <div className='ms-auto'>
            <button className='me-3 btn btn-outline-primary' onClick={showModal}>Login</button>
            <button className='btn btn-primary' onClick={showModal}>Register</button>
          </div>
        </div>
      </Header>
        
    )
}
