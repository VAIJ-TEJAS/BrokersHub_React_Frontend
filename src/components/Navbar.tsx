import React, {useState} from 'react'
import { Menu, Button, Tooltip, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { Layout } from 'antd';
import './Navbar.css'

const { Header } = Layout;

const menuItems = [
    { key: '1', label: 'Home', link: '/home' },
    { key: '2', label: 'View Requirements', link: '/requirementsListing' },
    { key: '3', label: 'Post Requirements', link: '/PostRequirement' },
    { key: '4', label: 'View Advertisement', link: '/addsListing' },
    { key: '5', label: 'Post Advertisement', link: '/PostAdd' },
];

interface NavProps {
  showModal: () => void;
}
  
const Navbar: React.FC<NavProps> = ({showModal}) =>{

    const navigate = useNavigate();

    const [open, setOpen] = useState(false);

    const check = () => {
      const token = localStorage.getItem('share-coupon-access-token');
      return token;
    }

    const showDrawer = () => {
      setOpen(true);
    };

    const onClose = () => {
      setOpen(false);
    };

    return (
      <>
      <Header className='px-4 sm:px-10'>
        <div className='position-relative top-50 start-50 translate-middle'>
        <div className='my-auto d-flex flex-row justify-content-center align-items-center text-light'>
          <Link to="/home" className='my-auto me-5 text-lg sm:text-xl'><strong>The Brokers Hub</strong></Link>
          <div></div>
          <Menu className='onShort me-3' theme="dark" mode="horizontal" style={{width:'680px'}}>
            {menuItems.map(item => (
                <Menu.Item key={item.key} className={`${location.pathname === item.link ? 'ant-menu-item-selected' : ''}`} style={{minWidth: '73px'}}>
                    <Link to={item.link}>{item.label}</Link>
                </Menu.Item>
            ))}
          </Menu>
          <div className='ms-auto d-flex align-items-center'>
            <div className='onShort'>
              {check() ?
                <>
                  <button className='me-3 btn btn-outline-primary' onClick={() => {localStorage.removeItem('share-coupon-access-token');localStorage.removeItem('share-coupon-user');navigate('/');}}>Logout</button>
                  <Link to='/profile' className='btn btn-primary'>Profile</Link>
                </>:
                <>
                  <button className='me-3 btn btn-outline-primary' onClick={showModal}>Login</button>
                  <button className='btn btn-primary' onClick={showModal}>Register</button>
                </>
              }
            </div>
            <Tooltip className='onBig'>
              <Button onClick={showDrawer} className='ms-3 navbar-drop' icon={<MenuOutlined className='w-100' width={'100px'} />} />
            </Tooltip>
          </div>
        </div>
        </div>


      </Header>
        <Drawer width={'260px'} title="TheBrokersHub" onClose={onClose} open={open}>
          {check() ?
            <Link to={"/profile"} className='btn btn-primary w-100'>Profile</Link>:
            <>
              <div className='mb-3'>
                <button className='btn btn-primary w-100' onClick={showModal}>Register</button>
              </div>
              <div className='my-3'>
                <button className='btn btn-outline-primary w-100 text-dark' onClick={showModal}>Login</button>
              </div>
            </>
          }

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
          </ul>
          
          {check() &&
            <button className='mt-3 btn btn-outline-primary w-100' onClick={() => {localStorage.removeItem('share-coupon-access-token');localStorage.removeItem('share-coupon-user');navigate('/');}}>Logout</button>
          }
      </Drawer>
      </>
        
    )
}

export default Navbar;