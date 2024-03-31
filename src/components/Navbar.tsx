import React, {useState} from 'react'
import { Menu, Button, Tooltip, Drawer, message, Modal,Typography, Collapse, Dropdown, Space, MenuProps } from 'antd';
import { DownOutlined, MenuOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { Layout } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './Navbar.css'
import { Context } from '../context/context.provider';

const { SubMenu } = Menu;
const { Header, Sider } = Layout;
const { Title, Text } = Typography;
const { Panel } = Collapse;


const menuItems = [
    { key: '1', label: 'Home', link: '/home' },
    { key: '2', label: 'Requirements', link: '/requirementslisting' },
    { key: '4', label: 'Advertisements', link: '/addslisting' },
];

const dropReqitems: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <Link to="/requirementslisting">
        View Requirements
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link to="/postrequirement">
        Post Requirements
      </Link>
    ),
  },
];

const dropAditems: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <Link to="/addslisting">
        View Advertisements
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link to="/postadd">
        Post Advertisements
      </Link>
    ),
  },
];

interface drawerPropps {
  navbarDraweropen: boolean;
  closeNavbarDrawer: () => void;
}

const NavbarDrawer: React.FC<drawerPropps> = ({ navbarDraweropen, closeNavbarDrawer }) => {
  const { showAuthModal, userAuthenticated, setUserAuthenticated } = Context();
  const navigate = useNavigate();

  return (
    <div>

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
            <Menu.Item icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92 92" id="Home" width={23}><path d="M88 49c-1 0-2-.4-2.8-1.1L46 9.6 6.8 47.9c-1.6 1.5-4.1 1.5-5.7-.1-1.5-1.6-1.5-4.1.1-5.7l42-41c1.6-1.5 4-1.5 5.6 0l42 41c1.6 1.5 1.6 4.1.1 5.7-.8.8-1.9 1.2-2.9 1.2zm-8.8 39V48.9c0-2.2-1.8-4-4-4s-4 1.8-4 4V84H58.7V62.6c0-2.9-2.4-5.3-5.3-5.3H38.6c-2.9 0-5.3 2.4-5.3 5.3V84H20.8V48.9c0-2.2-1.8-4-4-4s-4 1.8-4 4V88c0 2.2 1.8 4 4 4h20.5c2.2 0 4-1.8 4-4V65.3h9.5V88c0 2.2 1.8 4 4 4h20.5c2.2 0 3.9-1.8 3.9-4z" fill="#000000" className="color000000 svgShape"></path></svg>} key="1" onClick={() => { navigate('/home'); closeNavbarDrawer() }}><strong>Home</strong></Menu.Item>
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
    </div>

  )
}

const TerAndC: React.FC = () => {

  

  return (
    
        <div className="p-8">
            <Title level={2}>Terms and Conditions</Title>
            <Collapse accordion>
                <Panel header="1. Service Offering" key="1">
                    <Text>
                    By registering on "The Brokers Hub" platform, you acknowledge and agree that our website serves as a central hub for brokers to exchange property-related requirements and listings. The platform enables brokers to submit their own property requirements, discover available properties, and engage in transparent transactions with other brokers and clients.
                    </Text>
                </Panel>
                <Panel header="2. Commission" key="2">
                    <Text>
                    Upon successful completion of a property transaction facilitated through our platform, a commission fee of 0.5% of the total deal amount is applicable. This commission is divided equally, with 0.25% payable by each party involved in the transaction (i.e., the property buyer/tenant and the property seller/landlord).

                    </Text>
                </Panel>
                <Panel header="3. Broker Obligations" key="3">
                    <Text>
                    Brokers registered on "The Brokers Hub" agree not to conduct property transactions discovered through our platform without informing and involving the platform. Any properties found through the platform must be communicated to us, and transactions should be conducted transparently with our involvement to ensure the proper application of commission fees.

                    </Text>
                </Panel>
                <Panel header="4. User Conduct" key="4">
                    <Text>
                    Users of "The Brokers Hub," including clients and brokers, are expected to conduct themselves professionally and ethically at all times. Any misuse or abuse of the platform, including but not limited to fraudulent activities, misrepresentation, or harassment, will result in immediate termination of the user's account, potential legal action, and banning from the site.

                    </Text>
                </Panel>
                <Panel header="5. Accuracy of Information" key="5">
                    <Text>
                    While we strive to ensure the accuracy of the information provided on our platform, we cannot guarantee the completeness or correctness of property listings, client requirements, or any other content. Users are responsible for verifying the accuracy of information before making any decisions or transactions.
                    </Text>
                </Panel>
                <Panel header="6. Privacy Policy" key="6">
                    <Text>
                    We respect the privacy of our users and are committed to protecting their personal information. Our Privacy Policy outlines how we collect, use, and disclose personal data. By using our platform, you consent to the collection and processing of your personal information in accordance with our Privacy Policy.
                    </Text>
                </Panel>
                <Panel header="7. Liability Disclaimer" key="8">
                    <Text>
                    The Brokers Hub" platform and its owners will not be held responsible for any problems, disputes, or issues arising during property transactions facilitated through our platform. Users engage in transactions at their own risk, and "The Brokers Hub" shall not be liable for any financial losses, damages, or legal implications resulting from such transactions.
                    </Text>
                </Panel>
                <Panel header="8. Legal Action and Blacklisting" key="7">
                    <Text>
                    Violation of the Terms and Conditions may result in legal action and the user being banned from the site. Their contact information and identity may also be blacklisted among our clients and brokers.
                    </Text>
                </Panel>
                <Panel header="9. Modification of Terms" key="9">
                    <Text>
                    We reserve the right to update or modify these Terms and Conditions at any time without prior notice. It is the responsibility of users to review the Terms periodically for any changes. Continued use of our platform after the posting of modifications constitutes acceptance of the revised Terms.
                    </Text>
                </Panel>
            </Collapse>

            <p className='text-center mt-3'>By registering on "The Brokers Hub" platform, you indicate your acceptance of these Terms and Conditions. If you do not agree with any part of these Terms, please refrain from using our services.</p>
            <p className='text-center mt-3'>If you have any questions or concerns regarding these Terms and Conditions, please contact us for clarification.</p>
            <p className='text-center mt-3'>Thank you for choosing "The Brokers Hub."</p>
            <p className='text-center text-xl mt-3'>The Brokers Hub.</p>

        </div>
  )
}
  
const Navbar: React.FC = () =>{
  const { TermsModalVisible, setTermsModalVisible, showAuthModal, setUserAuthenticated, setActiveAuthTab } = Context();

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

  const handleModalClose = () => {
      setTermsModalVisible(false);
  };

  return (
    <>
      <Header className='px-4 sm:px-10'>
        <div className='position-relative top-50 start-50 translate-middle'>
          <div className='my-auto d-flex flex-row justify-content-center align-items-center text-light'>
            <Link to="/home" className='my-auto me-5 text-lg sm:text-xl'><strong>The Brokers Hub</strong></Link>
            
            <Menu className='onShort me-3' theme="dark" mode="horizontal" style={{width:'680px'}}>
              {/* {menuItems.map(item => ( */}
                  <Menu.Item key={menuItems[0].key} className={`${location.pathname.includes('home') ? 'ant-menu-item-selected' : ''}`} style={{minWidth: '73px'}}>
                      <Link to={menuItems[0].link}>{menuItems[0].label}</Link>
                  </Menu.Item>
                  <Menu.Item key={menuItems[1].key} className={`navDrops ${location.pathname.includes('requirementslisting') || location.pathname.includes('postrequirement') ? 'ant-menu-item-selected' : ''}`} style={{minWidth: '73px'}}>
                    <Dropdown overlayClassName="NavdropInseider" menu={{ items:dropReqitems }}>
                      <a onClick={(e) => e.preventDefault()}>
                        <Space>
                          {menuItems[1].label}
                          <DownOutlined />
                        </Space>
                      </a>
                    </Dropdown>
                      
                  </Menu.Item>
                  <Menu.Item key={menuItems[2].key} className={`navDrops ${location.pathname.includes('postadd') || location.pathname.includes('addslisting') ? 'ant-menu-item-selected' : ''}`} style={{minWidth: '73px'}}>
                    <Dropdown overlayClassName="NavdropInseider" menu={{ items:dropAditems }}>
                      <Link className="" onClick={(e) => e.preventDefault()} to={''}>
                        <Space>
                          {menuItems[2].label} <DownOutlined />
                        </Space>
                      </Link>
                    </Dropdown>
                  </Menu.Item>
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
                    <Button type="primary" ghost className='me-3 ' onClick={() => {setActiveAuthTab('1');showAuthModal()}}>Login</Button>
                    <Button type="primary" className='' onClick={() => {setActiveAuthTab('2');showAuthModal();}}>Register</Button>
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

      <Modal
        title="Terms and Conditions"
        open={TermsModalVisible}
        onCancel={handleModalClose}
        footer={null}
      >
        <TerAndC />
      </Modal>
    </>
  )
}

export default Navbar;