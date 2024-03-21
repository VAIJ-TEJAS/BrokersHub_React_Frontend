import React, {useState} from 'react'
import { Menu, Button, Tooltip, Drawer, message } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { Layout } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './Navbar.css'
import { Context } from '../context/context.provider';

const { SubMenu } = Menu;
const { Header, Sider } = Layout;


const menuItems = [
    { key: '1', label: 'Home', link: '/home' },
    { key: '2', label: 'View Requirements', link: '/requirementslisting' },
    { key: '3', label: 'Post Requirements', link: '/postrequirement' },
    { key: '4', label: 'View Advertisement', link: '/addslisting' },
    { key: '5', label: 'Post Advertisement', link: '/postadd' },
];

interface drawerPropps {
  navbarDraweropen: boolean;
  closeNavbarDrawer: () => void;
}

const NavbarDrawer: React.FC<drawerPropps> = ({ navbarDraweropen, closeNavbarDrawer }) => {
  const { showAuthModal, userAuthenticated, setUserAuthenticated } = Context();
  const navigate = useNavigate();

  return (
    <Drawer width={'260px'} title="The Brokers Hub" onClose={closeNavbarDrawer} open={navbarDraweropen}>
      {userAuthenticated ? (
        <Button type="primary" className='w-full h-10' onClick={() => { navigate('/profile'); closeNavbarDrawer() }} icon={<UserOutlined />}>
          Profile
        </Button>
      ) : (
        <>
          <div className='mb-3'>
            <button className='btn btn-primary w-full' onClick={() => {showAuthModal();closeNavbarDrawer();}}>Register</button>
          </div>
          <div className='my-3'>
            <button className='btn btn-outline-primary w-full' onClick={() => {showAuthModal();closeNavbarDrawer();}}>Login</button>
          </div>
        </>
      )}

      <Sider width={'100%'} className="mt-4 site-layout-background w-full">
        <Menu mode="inline" style={{ height: '100%', borderRight: 0 }} className='w-full max-w-full'>
          <hr />
          <Menu.Item icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92 92" id="Home" width={23}><path d="M88 49c-1 0-2-.4-2.8-1.1L46 9.6 6.8 47.9c-1.6 1.5-4.1 1.5-5.7-.1-1.5-1.6-1.5-4.1.1-5.7l42-41c1.6-1.5 4-1.5 5.6 0l42 41c1.6 1.5 1.6 4.1.1 5.7-.8.8-1.9 1.2-2.9 1.2zm-8.8 39V48.9c0-2.2-1.8-4-4-4s-4 1.8-4 4V84H58.7V62.6c0-2.9-2.4-5.3-5.3-5.3H38.6c-2.9 0-5.3 2.4-5.3 5.3V84H20.8V48.9c0-2.2-1.8-4-4-4s-4 1.8-4 4V88c0 2.2 1.8 4 4 4h20.5c2.2 0 4-1.8 4-4V65.3h9.5V88c0 2.2 1.8 4 4 4h20.5c2.2 0 3.9-1.8 3.9-4z" fill="#000000" className="color000000 svgShape"></path></svg>} key="1" onClick={() => { navigate('/profile'); closeNavbarDrawer() }}><strong>Home</strong></Menu.Item>
          <hr />
          <SubMenu icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="advertising" width={23}><path d="M23,17H14a5,5,0,0,0-5,5V34a5,5,0,0,0,5,5h9a1,1,0,0,0,1-1V18A1,1,0,0,0,23,17ZM14,37a3,3,0,0,1-3-3V22a3,3,0,0,1,3-3h8V37Z" fill="#000000" className="color000000 svgShape"></path><path d="M14,19a3,3,0,0,0-3,3V34a3,3,0,0,0,3,3h8V19Zm5,10H15a1,1,0,0,1,0-2h4a1,1,0,0,1,0,2Zm0-5H15a1,1,0,0,1,0-2h4a1,1,0,0,1,0,2Z" opacity=".5" fill="#000000" className="color000000 svgShape"></path><path d="M24 37h0zm0 0h0zm0 0h0zM47.41 8.1a1 1 0 0 0-1.07.16L46 8.54A34.8 34.8 0 0 1 37.26 14 35.14 35.14 0 0 1 23 17a1 1 0 0 0-1 1V38a1.36 1.36 0 0 0 0 .2v.05A1 1 0 0 0 23 39l1.21 0c.47 0 .93 0 1.39.08l1.26.12H27l.86.11q.57.07 1.14.18a35.36 35.36 0 0 1 17 7.94l.34.29a1 1 0 0 0 1.07.16A1 1 0 0 0 48 47V9A1 1 0 0 0 47.41 8.1zM46 44.88a37.29 37.29 0 0 0-17.86-7.52c-.36 0-.72-.1-1.08-.13l-.72-.07-.84-.07-.73 0-.53 0H24V19a37.24 37.24 0 0 0 14.06-3.14A37.83 37.83 0 0 0 46 11.13zM24 37h0zm0 0h0zm0 0h0zM58.05 22.57l-4-1.52-.65-.24a1 1 0 0 0-1.35.94v12.5a1 1 0 0 0 1 1 1 1 0 0 0 .35-.06L54 35l4.06-1.53A3 3 0 0 0 60 30.61V25.39A3 3 0 0 0 58.05 22.57zm0 8a1 1 0 0 1-.65.94L54 32.81V23.19l3.34 1.25a1 1 0 0 1 .66.95zM10 22H7a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h3a1 1 0 0 0 1-1V23A1 1 0 0 0 10 22zM9 32H7a1 1 0 0 1-1-1V25a1 1 0 0 1 1-1H9z" fill="#000000" className="color000000 svgShape"></path><path d="M26.84,53.07,25.3,44.85,24.21,39,24,37.92l0-.11A1,1,0,0,0,23,37H15a1,1,0,0,0-1,1.19l.15.81L18,59.19A1,1,0,0,0,19,60H30a1,1,0,0,0,1-1V58A5,5,0,0,0,26.84,53.07Zm-7,4.93L16.21,39h6l1,5.19,1.87,10A1,1,0,0,0,26,55a3,3,0,0,1,3,3Z" fill="#000000" className="color000000 svgShape"></path><path d="M29,58H19.83L16.21,39h6l1,5.19,1.87,10A1,1,0,0,0,26,55,3,3,0,0,1,29,58Z" opacity=".5" fill="#000000" className="color000000 svgShape"></path><path d="M28.14,37.36c-.36,0-.72-.1-1.08-.13l-.72-.07-.84-.07-.73,0-.53,0H24c-.33,0-.67,0-1,0a1,1,0,0,0-.77.36A1,1,0,0,0,22,38a1.36,1.36,0,0,0,0,.2v.05l.14.76,1,5.19a1,1,0,0,0,1,.81,4.47,4.47,0,0,0,1.17-.15A4.85,4.85,0,0,0,29,40.13V38.35A1,1,0,0,0,28.14,37.36ZM27,40.13a2.87,2.87,0,0,1-2.06,2.75L24.21,39c.47,0,.93,0,1.39.08s.85.07,1.26.12H27Z" fill="#000000" className="color000000 svgShape"></path><path d="M27,39.23v.9a2.87,2.87,0,0,1-2.06,2.75L24.21,39c.47,0,.93,0,1.39.08l1.26.12Z" opacity=".5" fill="#000000" className="color000000 svgShape"></path><path d="M52.83,4.17A4,4,0,0,0,46,7V49a4,4,0,0,0,8,0V7A4,4,0,0,0,52.83,4.17ZM52,49a2,2,0,0,1-4,0V7a2,2,0,0,1,2-2,2,2,0,0,1,2,2Z" fill="#000000" className="color000000 svgShape"></path><path d="M52,7V49a2,2,0,0,1-4,0V7a2,2,0,0,1,2-2,2,2,0,0,1,2,2Z" opacity=".5" fill="#000000" className="color000000 svgShape"></path></svg>} key="sub1" title={<strong>Advertisements</strong>}>
                <Menu.Item key="2" onClick={() => {navigate('/addslisting');closeNavbarDrawer()}}><strong>View Advertisements</strong></Menu.Item>
                <Menu.Item key="3" onClick={() => {navigate('/postadd');closeNavbarDrawer()}}><strong>Post Advertisements</strong></Menu.Item>
          </SubMenu>
          <hr />
          <SubMenu
            icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="requirement" width={23}><g fill="#000000" className="color000000 svgShape"><path d="M4,20C4,12.46,4,8.69,6.34,6.34S12.46,4,20,4h8c7.54,0,11.31,0,13.66,2.34S44,12.46,44,20v8c0,7.54,0,11.31-2.34,13.66S35.54,44,28,44H20c-7.54,0-11.31,0-13.66-2.34S4,35.54,4,28Z" fill="#000000" className="color000000 svgShape"></path><path fill="#ffffff" d="M33.53,32.47l-4.7-4.7a6.2,6.2,0,0,0,.58-.77,8.16,8.16,0,0,0,1.34-4.5,8.25,8.25,0,0,0-16.5,0A8.16,8.16,0,0,0,15.59,27a8.06,8.06,0,0,0,1,1.25,8.22,8.22,0,0,0,11.18.58l4.7,4.7a.75.75,0,0,0,1.06,0A.75.75,0,0,0,33.53,32.47Zm-6-5.47a6.73,6.73,0,0,0-10,0,6.05,6.05,0,0,1-.89-1.25,8.26,8.26,0,0,1,3.29-2.07,3.75,3.75,0,1,1,5.24,0,8.26,8.26,0,0,1,3.29,2.07A6.05,6.05,0,0,1,27.52,27Zm-2.77-6a2.25,2.25,0,1,1-2.25-2.25A2.25,2.25,0,0,1,24.75,21Z" className="colorffffff svgShape"></path></g></svg>}
            key="sub2"
            title={<strong>Requirements</strong>}
          >
            <Menu.Item key="4" eventKey="4" onClick={() => { navigate('/requirementslisting'); closeNavbarDrawer() }}><strong>View Requirements</strong></Menu.Item>
            <Menu.Item key="5" eventKey="5" onClick={() => { navigate('/postrequirement'); closeNavbarDrawer() }}><strong>Post Requirements</strong></Menu.Item>
          </SubMenu>
          <hr />
        </Menu>
      </Sider>

      {userAuthenticated && (
        <Button
          type="primary"
          className='mt-3 w-full'
          danger
          onClick={() => {
            localStorage.removeItem('thebrokershub-access-token');
            localStorage.removeItem('share-coupon-user');
            closeNavbarDrawer();
            setUserAuthenticated(false);
            message.success("Logged out successfully.");
            navigate('/');
          }}
        >
          Logout
        </Button>
      )}
    </Drawer>
  )
}

  
const Navbar: React.FC = () =>{
  const { showAuthModal, setUserAuthenticated } = Context();

  const navigate = useNavigate();

  const [navbarDraweropen, setNavbarDraweropen] = useState(false);

  const check = () => {
    const token = localStorage.getItem('thebrokershub-access-token');
    return token;
  }

  const openeNavbarDrawer = () => {
    setNavbarDraweropen(true);
  };

  const closeNavbarDrawer = () => {
    setNavbarDraweropen(false);
  };

  return (
    <>
      <Header className='px-4 sm:px-10'>
        <div className='position-relative top-50 start-50 translate-middle'>
          <div className='my-auto d-flex flex-row justify-content-center align-items-center text-light'>
            <Link to="/home" className='my-auto me-5 text-lg sm:text-xl'><strong>The Brokers Hub</strong></Link>
            
            <Menu className='onShort me-3' theme="dark" mode="horizontal" style={{width:'680px'}}>
              {menuItems.map(item => (
                  <Menu.Item key={item.key} className={`${location.pathname.includes(item.link) ? 'ant-menu-item-selected' : ''}`} style={{minWidth: '73px'}}>
                      <Link to={item.link}>{item.label}</Link>
                  </Menu.Item>
              ))}
            </Menu>
            
            <div className='ms-auto d-flex align-items-center'>
              <div className='onShort'>
                {check() ?
                  <>
                  <Button type="primary" onClick={() => {navigate('/profile');setUserAuthenticated(false)}} icon={<UserOutlined />}>
                    Profile
                  </Button>
                  </>:
                  <>
                    <button className='me-3 btn btn-outline-primary' onClick={showAuthModal}>Login</button>
                    <button className='btn btn-primary' onClick={showAuthModal}>Register</button>
                  </>
                }
              </div>
              <Tooltip className='onBig'>
                <Button onClick={openeNavbarDrawer} className='ms-3 navbar-drop' icon={<MenuOutlined className='w-100' width={'100px'} />} />
              </Tooltip>
            </div>
          </div>
        </div>
        
        <NavbarDrawer navbarDraweropen={navbarDraweropen} closeNavbarDrawer={closeNavbarDrawer} />

      </Header>
    </>
  )
}

export default Navbar;