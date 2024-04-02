import React, {useEffect, useState} from 'react';
import { Modal, Empty, Button, Tabs, Form, Input, Layout, Select, message, Spin } from 'antd';
import { useParams, useNavigate } from 'react-router-dom';
import { EditOutlined, ShareAltOutlined } from '@ant-design/icons';
import axios from 'axios';

import ItemCard from '../components/ItemCard';
import ExpandCard from '../components/ExpandCard';
import TabPane from 'antd/es/tabs/TabPane';
import { Item } from '../types/item.types';
import { User } from '../types/user.types';
import Navbar from '../components/Navbar';
import { Context } from '../context/context.provider';

const { Content } = Layout;

type TabPosition = 'left' | 'top';

interface updateFormProps{
  handleUpdateCancel: () => void;
}

interface OptionType {
  id: number;
  name: string;
  iso2: string;
}

const UpdateUserForm:React.FC<updateFormProps> = ({handleUpdateCancel}) => {
  const navigate = useNavigate();

  const [form] = Form.useForm();
  const [stateList, setStateList] = useState<OptionType[]>([]);
  const [loading, setLoading] = useState(false);
  const [cities, setcities] = useState<OptionType[]>([]);
  const [userData, setUserData] = useState({
    id: 0,
    first_name: '',
    last_name: '',
    phone: '',
    state: '',
    city: '',
  });

  useEffect(() => {
    // Fetch user data from localStorage
    const storedUserData = JSON.parse(localStorage.getItem('share-coupon-user') || '{}');
    if (storedUserData) {
      // storedUserData.state = stateList.find(st => st.iso2 === storedUserData.state)?.name
      setUserData(storedUserData);
      form.setFieldsValue(storedUserData); // Initialize form fields with user data
    }
  }, []);

  const handleSubmit = async (value: any) => {
      // Make PUT request to update user data
      setLoading(true);
      value.state = stateList.find(st => st.iso2 === value.state)?.name
      await axios.patch(`https://13.232.115.59/user/${userData.id}/`, value, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${localStorage.getItem('thebrokershub-access-token')}`,
        },
      })
      .then(_response => {
        localStorage.setItem('share-coupon-user', JSON.stringify(_response.data))
        handleUpdateCancel();
        navigate('/profile')
        message.success("Your profile has been updated")
        window.location.reload();
      })
      .catch(_error => {
        message.error("Error updating profile.")
      })
      .finally(() => {
        setLoading(false); // Set loading state to false after request completion
      });
      // Optionally, you can handle success response here
  };

  useEffect(() => {
    const FetchData = async () => {

        axios.get('https://api.countrystatecity.in/v1/countries/IN/states/', {
          headers: {
            'X-CSCAPI-KEY': `NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA==`,
            'Content-Type': 'application/json'
          }
        })
        .then((response) => {
          setStateList(response.data);
          const storedUserData = JSON.parse(localStorage.getItem('share-coupon-user') || '{}');
          const stateIso2 = storedUserData.state;
          const state = stateIso2 ? response.data.find((st: any) => st.name === stateIso2)?.iso2 || '' : '';
          axios.get(`https://api.countrystatecity.in/v1/countries/IN/states/${state}/cities`, {
            headers: {
              'X-CSCAPI-KEY': `NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA==`,
              'Content-Type': 'application/json'
            }
          })
          .then((response) => {
              setcities(response.data);
          })
        })
    }

    FetchData()
  }, [])

  const updateCities = () => {
    let state = form.getFieldValue('state');
    axios.get(`https://api.countrystatecity.in/v1/countries/IN/states/${state}/cities`, {
      headers: {
        'X-CSCAPI-KEY': `NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA==`,
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
        setcities(response.data);
    })
  }

  const filterOption = (input: string, option?: { label: string; value: string }) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  return (
    <div className="mt-4 px-5 bg-white">
      <h2 className="text-xl font-bold mb-4">Update User Details</h2>
      <Form
        form={form}
        name="update_user"
        initialValues={userData}
        onFinish={handleSubmit}
      >
        <Form.Item
          name="first_name"
          label="First Name"
          rules={[{ required: true, message: 'Please enter your first name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="last_name"
          label="Last Name"
          rules={[{ required: true, message: 'Please enter your last name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone"
          rules={[{ required: true, message: 'Please enter your phone number!' }, { pattern: /^\d{10}$/, message: 'Phone number must be 10 digits!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="state"
          label="State"
          rules={[{ required: true, message: 'Please select your state!' }]}
        >
          <Select
            showSearch
            onChange={() => {updateCities(); form.setFieldValue('city', '')}}
            placeholder="Select a state"
            filterOption={filterOption}
            options={stateList.map(city => {
                return {
                    value: city.iso2,
                    label: city.name
                };
            })}
          />
        </Form.Item>

        <Form.Item
          name="city"
          label="City"
          rules={[{ required: true, message: 'Please select your city!' }]}
        >
          <Select
            showSearch
            placeholder="Select a city"
            filterOption={filterOption}
            // options={cities}
            options={cities
                .map(city => ({
                    value: city.name,
                    label: city.name
                }))
            }
          />
        </Form.Item>

        <Form.Item>
          <Spin spinning={loading}>
            {/* Content to show when loading */}
            <Button type="primary" htmlType="submit" className="w-full">
              Update Details
            </Button>
          </Spin>
        </Form.Item>
      </Form>
    </div>
  );
};

const ProfilePage: React.FC = () => {

  const navigate = useNavigate();
  const { setUserAuthenticated } = Context();

  // Get the value of a specific parameter
  const [user, setuser] = useState<User | null>(null);
  const [mode, setMode] = useState<TabPosition>('left');
  const [reqitems, setReqItems] = useState<Item[]>([]);
  const [additems, setAddItems] = useState<Item[]>([]);
  const [ExpandmMdalVisible, setExpandmMdalVisible] = useState(false);
  const [UpdatemMdalVisible, setUpdatemMdalVisible] = useState(false);
  
  const handleCancel = () => {
    console.log('Cancelling')
    setExpandmMdalVisible(false)
    navigate('/profile/');
  };

  const handleUpdateCancel = () => {
    setUpdatemMdalVisible(false)
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
          setExpandmMdalVisible(true);
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
          setExpandmMdalVisible(true);
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

  const shareLink = async () => {
    const storedUserData = JSON.parse(localStorage.getItem('share-coupon-user') || '{}');
    const shareData = {
      title: 'Your Website Title',
      text: 'Check out this awesome website!',
      url: `https://thebrokershub.in/home/${storedUserData.my_referral_code}`,
    };

    try {
      await navigator.share(shareData);
      console.log('Shared successfully');
    } catch (error) {
      console.error('Error sharing:', error);
      // Fallback options for browsers that do not support Web Share API
      // const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareData.text + ' ' + shareData.url)}`;
      // const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareData.url)}`;
      // const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareData.url)}&text=${encodeURIComponent(shareData.text)}`;
      // const instagramUrl = `https://www.instagram.com`;

      // // Open the share URLs in a new tab/window
      // window.open(whatsappUrl, '_blank');
      // window.open(facebookUrl, '_blank');
      // window.open(twitterUrl, '_blank');
      // window.open(instagramUrl, '_blank');
    }
  };

  
  return (
    <div>
      <Navbar />
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
                    <div className='flex items-center justify-between'>
                      <div className="px-4 py-4 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Personal Information
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                            This is some information about the user.
                        </p>
                      </div>
                      <Button icon={<EditOutlined />} className='me-4' onClick={() => {setUpdatemMdalVisible(true)}} size='large'></Button>
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
                          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                              <dt className="text-sm font-medium text-gray-500">
                                  Referral Code
                              </dt>
                              <dd className="text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              <Button
                                type="primary"
                                onClick={shareLink}
                                icon={<ShareAltOutlined className="" />}
                              >
                                Share Referral Code
                              </Button>
                              </dd>
                          </div>
                          <Button type="primary" className='mt-3 w-full' danger onClick={() => {localStorage.removeItem('thebrokershub-access-token');localStorage.removeItem('share-coupon-user');setUserAuthenticated(false);message.success("Logged out successfully.");navigate('/');}}>Logout</Button>
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
          open={ExpandmMdalVisible}
          onCancel={handleCancel}
          footer={null}
          className='property-modal'
          >
          <ExpandCard page="" handleCancel={handleCancel} item={reqitems.find(item => item.id === parseInt(postId))!}/>
        </Modal>}
        
        {/* updating user data modal  */}
        <Modal
          open={UpdatemMdalVisible}
          onCancel={handleUpdateCancel}
          footer={null}
          className='property-modal'
        >
          <UpdateUserForm handleUpdateCancel={handleUpdateCancel} />
        </Modal>
      </Layout>
    </div>

  );
};

export default ProfilePage;
