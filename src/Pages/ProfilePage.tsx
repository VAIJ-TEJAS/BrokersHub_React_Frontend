import React, {useEffect, useState} from 'react';
import { Layout, Modal } from 'antd';
import Navbar from '../components/Navbar';
import ItemCard from '../components/ItemCard';
import ExpandCard from '../components/ExpandCard';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const { Content } = Layout;

interface Item {
  id: number,
  title: string,
  state: string,
  city: string,
  description: string,
  contact: string,
  transaction_type: string,
  price: string,
  downpayment: string,
  ratio_x: string,
  ratio_y: string,
  monthly_rent: string,
  image: string,
  budget: string;
  area: number;
}

const ProfilePage: React.FC = () => {

  const navigate = useNavigate();

  // Get the value of a specific parameter
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
    const fetchRequest = async () => {
      try {
        const response = await axios.get('https://13.232.115.59/my-advertisements/', {
            headers: {
                'Authorization': `Token ${localStorage.getItem('share-coupon-access-token')}`,
                'Content-Type': 'application/json'
                // Add other headers as needed
            }
        });
        console.log(response.data)
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
                'Authorization': `Token ${localStorage.getItem('share-coupon-access-token')}`,
                'Content-Type': 'application/json'
                // Add other headers as needed
            }
        });
        console.log(response.data)
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



  
  
  return (
    <Layout className="layout">
        <Navbar />
      <Layout>
        <Layout className='d-flex align-items-center'>
          <Content
            className="site-layout-background w-full"
            style={{
              minHeight: 280,
            }}
          >

            <h1 className='text-center mt-5 mb-3'>Your Requirements</h1>

            <div className='d-flex flex-wrap justify-center'>
              {reqitems.map((item, index) => (
                <ItemCard page="requirements" key={index} item={item} />
                ))}
            </div>

            <h1 className='text-center mt-5 mb-3'>Your Advertisements</h1>

            <div className='d-flex flex-wrap justify-center'>
              {additems.map((item, index) => (
                <ItemCard page="advertisements" key={index} item={item} />
                ))}
            </div>

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
