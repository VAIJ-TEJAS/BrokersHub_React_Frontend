import React, {useState} from 'react'
import { Menu, Button, Tooltip, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { Layout } from 'antd';
import { UserOutlined, HomeOutlined } from '@ant-design/icons';
import './Navbar.css'

const { SubMenu } = Menu;
const { Header, Sider } = Layout;


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
      const token = localStorage.getItem('thebrokershub-access-token');
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
                <Button type="primary" onClick={() => {navigate('/profile')}} icon={<UserOutlined />}>
                  Profile
                </Button>
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
        <Drawer width={'260px'} title="The Brokers Hub" onClose={onClose} open={open}>
          {check() ?
            <Button type="primary" className='w-full h-10' onClick={() => {navigate('/profile')}} icon={<UserOutlined />}>
              Profile
            </Button>:
            <>
              <div className='mb-3'>
                <button className='btn btn-primary w-full' onClick={showModal}>Register</button>
              </div>
              <div className='my-3'>
                <button className='btn btn-outline-primary w-full' onClick={showModal}>Login</button>
              </div>
            </>
          }

          <Sider width={'100%'} className="mt-4 site-layout-background w-full">
            <Menu
              mode="inline"
              style={{ height: '100%', borderRight: 0 }}
              className='w-full max-w-full'
            >
              <hr />
              <Menu.Item  icon={<HomeOutlined />} key="1"><Link to={'/home'}><strong>Home</strong></Link></Menu.Item>
              <hr />
              <SubMenu key="sub1" title={<strong>Advertisements</strong>}>
                <Menu.Item key="2"><Link to={'/addsListing'}><strong>View Advertisements</strong></Link></Menu.Item>
                <Menu.Item key="3"><Link to={'/PostAdd'}><strong>Post Advertisements</strong></Link></Menu.Item>
              </SubMenu>
              <hr />
              <SubMenu key="sub2" title={<strong>Requirements</strong>}>
                <Menu.Item key="4"><Link to={'/requirementsListing'}><strong>View Requirements</strong></Link></Menu.Item>
                <Menu.Item key="5"><Link to={'/PostRequirement'}><strong>Post Requirements</strong></Link></Menu.Item>
              </SubMenu>
              <hr />
            </Menu>
          </Sider>

          {/* <ul className='mt-4'>
            <hr />
            {menuItems.map(item => (
              <>
                <li key={item.key} className='py-3 ps-2'>
                  <Link to={item.link}><strong>{item.label}</strong></Link>
                </li>
                <hr />
              </>
            ))}
          </ul> */}
      </Drawer>
      </>
        
    )
}

export default Navbar;