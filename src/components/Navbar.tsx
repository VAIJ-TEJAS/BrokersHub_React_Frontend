import {useState} from 'react'
import { Menu, Modal, Button, Tooltip, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import Autentication from './Authentication';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import './Navbar.css'

const { Header } = Layout;

const menuItems = [
    { key: '1', label: 'Home', link: '/home' },
    { key: '2', label: 'Adds Listing', link: '/addsListing' },
    { key: '3', label: 'Requirements Listing', link: '/requirementsListing' },
];

  
  
export default function Navbar() {
    const [defaultTab, setDefaultTab] = useState('1')
    const [open, setOpen] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
  
    const showModal = (num: string) => {
      setDefaultTab(num)
      setModalVisible(true);
    };
  
    const handleCancel = () => {
      setModalVisible(false)
    };

    const showDrawer = () => {
      setOpen(true);
    };

    const onClose = () => {
      setOpen(false);
    };

    return (
      <>
      <Header>
        <div className='position-relative top-50 start-50 translate-middle'>
        <div className='my-auto d-flex flex-row justify-content-center align-items-center text-light'>
            <Modal
                open={modalVisible}
                onCancel={handleCancel}
                footer={null}>
                <Autentication defaultTab={defaultTab} />
            </Modal>
          <Link to="/home" className='my-auto me-5 fs-4'><strong>BrokerHub</strong></Link>
          <div></div>
          <Menu className='onShort me-3' theme="dark" mode="horizontal" style={{width:'350px'}}>
            {menuItems.map(item => (
                <Menu.Item key={item.key} className={location.pathname === item.link ? 'ant-menu-item-selected' : ''} style={{minWidth: '73px'}}>
                    <Link to={item.link}>{item.label}</Link>
                </Menu.Item>
            ))}
          </Menu>
          <div className='onShort'>
            <Link to='/PostRequirement' className='btn btn-warning me-3'>Post Requirement</Link>
            <Link to='/PostAdd' className='btn btn-warning'>Post Add</Link>
          </div>
          <div className='ms-auto d-flex align-items-center'>
            <div className='onShort'>
              <button className='me-3 btn btn-outline-primary' onClick={() => {showModal('1')}}>Login</button>
              <button className='btn btn-primary' onClick={() =>{showModal('0')}}>Register</button>
            </div>
            <Tooltip className='onBig'>
              <Button onClick={showDrawer} className='ms-3 mt-1 navbar-drop' icon={<MenuOutlined className='w-100' width={'100px'} />} />
            </Tooltip>
          </div>
        </div>
        </div>


      </Header>
        <Drawer width={'260px'} title="BrokerHub" onClose={onClose} open={open}>
          <div className='mb-3'>
            <button className='btn btn-primary w-100' onClick={() =>{showModal('1')}}>Register</button>
          </div>
          <div className='my-3'>
            <button className='btn btn-outline-primary w-100 text-dark' onClick={() =>{showModal('0')}}>Login</button>
          </div>

          <ul className='mt-4'>
            <hr />
            {menuItems.map(item => (
              <>
                <li key={item.key} className='py-2 ps-2'>
                  <Link to={item.link}><strong>{item.label}</strong></Link>
                </li>
                <hr />
              </>
            ))}
            <li className='py-2 ps-2'>
              <Link to="/PostRequirement"><strong>Add Requirement</strong></Link>
            </li>
            <hr />
            <li className='py-2 ps-2'>
              <Link to="/PostAdd"><strong>Add Post</strong></Link>
            </li>
            <hr />
          </ul>
      </Drawer>
      </>
        
    )
}
