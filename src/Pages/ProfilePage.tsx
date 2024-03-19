import React, {useEffect, useState} from 'react';
import { Modal, Empty, Button  } from 'antd';
import { Layout } from 'antd';
import ItemCard from '../components/ItemCard';
import ExpandCard from '../components/ExpandCard';
import axios from 'axios';
import { Tabs } from 'antd';
import { useParams, useNavigate } from 'react-router-dom';
import TabPane from 'antd/es/tabs/TabPane';
import { Item } from '../types/item.types';
const { Content } = Layout;

interface User {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    referral_code: string;
    state: string;
    city: string;
}

type TabPosition = 'left' | 'top';

const ProfilePage: React.FC = () => {

  const navigate = useNavigate();

  // Get the value of a specific parameter
  const [user, setuser] = useState<User | null>(null);
  const [mode, setMode] = useState<TabPosition>('left');
  const [reqitems, setReqItems] = useState<Item[]>([]);
  const [additems, setAddItems] = useState<Item[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  
  const handleCancel = () => {
    console.log('Cancelling')
    setModalVisible(false)
    navigate('/profile/');
  };
  
  // Make the GET request with Axios
  const { postId } = useParams();

  useEffect(() => {

    const token = localStorage.getItem('thebrokershub-access-token');
    if (!token)  {
      navigate('/home');
      return
    }

    setuser(JSON.parse(localStorage.getItem('share-coupon-user') || '{}'))

    const fetchRequest = async () => {
      try {
        const response = await axios.get('https://13.232.115.59/my-advertisements/', {
            headers: {
                'Authorization': `Token ${localStorage.getItem('thebrokershub-access-token')}`,
                'Content-Type': 'application/json'
                // Add other headers as needed
            }
        });
        setAddItems(response.data);
        if (postId) {
          setModalVisible(true);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }

      try {
        const response = await axios.get('https://13.232.115.59/my-requirements/', {
            headers: {
                'Authorization': `Token ${localStorage.getItem('thebrokershub-access-token')}`,
                'Content-Type': 'application/json'
                // Add other headers as needed
            }
        });
        setReqItems(response.data);
        if (postId) {
          setModalVisible(true);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchRequest();
    
  }, []);
  
  useEffect(() => {
    const handleResize = () => {
      setMode(window.innerWidth < 700 ? 'top' : 'left');
    };

    handleResize(); // Set initial mode
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <Layout className="layout">
      <Layout>
        <Layout className='d-flex align-items-center'>
          <Content
            className="site-layout-background w-full"
            style={{
              minHeight: 280,
            }}
          >

            <Tabs
              className='w-full'
              defaultActiveKey="1"
              tabPosition={mode}
              centered
            >
              <TabPane className='py-5 flex justify-center' tab={<span className=''>Profile</span>} key={'1'}>
                <div className="bg-white overflow-hidden rounded-lg border sm:w-4/5 lg:w-3/5">
                    <div className="px-4 py-4 sm:px-6">
                          <h3 className="text-lg leading-6 font-medium text-gray-900">
                              Personal Information
                          </h3>
                          <p className="mt-1 max-w-2xl text-sm text-gray-500">
                              This is some information about the user.
                          </p>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-4 lg:p-0">
                          <dl className="sm:divide-y sm:divide-gray-200">
                              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                  <dt className="text-sm font-medium text-gray-500">
                                      Full name
                                  </dt>
                                  <dd className="text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {user?.first_name} {user?.last_name}
                                  </dd>
                              </div>
                              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                  <dt className="text-sm font-medium text-gray-500">
                                      Email address
                                  </dt>
                                  <dd className=" text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {user?.email}
                                  </dd>
                              </div>
                              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                  <dt className="text-sm font-medium text-gray-500">
                                      Phone number
                                  </dt>
                                  <dd className="text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {user?.phone}
                                  </dd>
                              </div>
                              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                  <dt className="text-sm font-medium text-gray-500">
                                      Address
                                  </dt>
                                  <dd className="text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {user?.city}, {user?.state}
                                  </dd>
                              </div>
                              {/* <div className="py-3 sm:py-5 w-full"> */}
                              {/* </div> */}
                                <Button type="primary" className='mt-3 w-full' danger onClick={() => {localStorage.removeItem('thebrokershub-access-token');localStorage.removeItem('share-coupon-user');navigate('/');}}>Logout</Button>
                          </dl>
                    </div>
                </div>
              </TabPane>

              <TabPane className='py-5' tab={`Your Advertisement`} key={'2'}>
                <div className="overflow-y-auto" style={{maxHeight: '600px', scrollbarWidth: 'none'}}>
                  <div className='d-flex flex-wrap justify-center'>
                    {additems.length === 0 ? (
                      <Empty
                        image={Empty.PRESENTED_IMAGE_SIMPLE}
                        description={<span>No Data Available</span>}
                      />
                    ) : (
                      additems.map((item, index) => (
                        <ItemCard  page="advertisements" key={index} item={item} />
                      ))
                    )}
                  </div>
                </div>
              </TabPane>

              <TabPane className='py-5' tab={`Your Requirement`} key={'3'}>
                <div className="overflow-y-auto" style={{maxHeight: '600px', scrollbarWidth: 'none'}}>
                  <div className='d-flex flex-wrap justify-center'>
                    {reqitems.length === 0 ? (
                      <Empty
                        image={Empty.PRESENTED_IMAGE_SIMPLE}
                        description={<span>No Data Available</span>}
                      />
                    ) : (
                      reqitems.map((item, index) => (
                        <ItemCard page="requirements" key={index} item={item} />
                      ))
                    )}
                  </div>
                </div>
              </TabPane>
            </Tabs>

          </Content>
        </Layout>
      </Layout>

      {postId &&
        <Modal
        open={modalVisible}
        onCancel={handleCancel}
        footer={null}
        className='property-modal'
        >
        <ExpandCard page="" handleCancel={handleCancel} item={reqitems.find(item => item.id === parseInt(postId))!}/>
      </Modal>}
    </Layout>
  );
};

export default ProfilePage;
