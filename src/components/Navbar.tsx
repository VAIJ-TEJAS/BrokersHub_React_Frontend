import {useState} from 'react'
import { Menu, Modal } from 'antd';
import Autentication from './Authentication';

const menuItems = [
    { key: '1', label: 'Home' },
    { key: '2', label: 'Properties' },
    { key: '3', label: 'Financial Products' },
    { key: '4', label: 'Contact' }
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
      setModalVisible(false);
    };
    return (
        <div className='d-flex flex-row align-items-evenly text-light'>
            <Modal title="Authentication"
                open={modalVisible}
                onCancel={handleCancel}
                footer={null}>
                <Autentication defaultTab={defaultTab} />
            </Modal>
          <h2 className='my-auto me-5'>BrokerHub</h2>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={menuItems}></Menu>
          <div className='ms-auto'>
            <button className='me-3 btn btn-outline-primary' onClick={showModal}>Login</button>
            <button className=' btn btn-primary' onClick={showModal}>Register</button>
          </div>
        </div>
        
    )
}
