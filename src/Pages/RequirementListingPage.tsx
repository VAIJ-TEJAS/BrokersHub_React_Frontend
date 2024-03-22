import React, {useEffect, useState} from 'react';
import { Layout, Modal, message } from 'antd';
import Filter from '../components/Search';
import ItemCard from '../components/ItemCard';
import ExpandCard from '../components/ExpandCard';
import axios from 'axios';
import listingLogo from '../assets/images/listingBackground.jpg'
import { useParams, useNavigate } from 'react-router-dom';
import { Item } from '../types/item.types';
import Navbar from '../components/Navbar';

const { Content } = Layout;

const RequirementListingPage: React.FC = () => {

  const navigate = useNavigate();

  // Get the value of a specific parameter
  const [items, setItems] = useState<Item[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);
  
  const handleCancel = () => {
    setModalVisible(false)
    navigate('/requirementslisting/');
  };

  const url = 'https://13.232.115.59/requirements/';

  // Make the GET request with Axios

  const { postId } = useParams();

  useEffect(() => {
    const fetchRequest = async () => {
      try {
        const response = await axios.get(url);
        console.log(response.data)
        setItems(response.data);
        setFilteredItems(response.data);
        if (postId) {
          setModalVisible(true);
        }
      } catch (error: any) {
        console.error('Error fetching data:', error);
        message.error(error.message);
        return
      }
    }

    fetchRequest();

    
  }, [postId]);

  
  
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
              <div className='mb-5 w-full bg-cover bg-center ' style={{backgroundImage: `url(${listingLogo})`}}>
                <div className='w-full d-flex flex-col items-center justify-center bg-[#0000008f]' style={{height: '450px'}}>
                  <p className='mb-4 text-center text-2xl text-white md:text-4xl sm:text-3xl' style={{fontFamily: 'Montserrat'}}>Find what you need, sell what you love - all in one place!</p>
                  <Filter page={'Requirement'} items={items} setFilteredItems={setFilteredItems} />
                </div>
              </div>

              <h1 className='text-center mb-3'>Requirements</h1>

              <div className='d-flex flex-wrap justify-center'>
                {filteredItems.map((item, index) => (
                  <ItemCard page="requirementslisting" key={index} item={item} />
                  ))}
              </div>

            </Content>
          </Layout>
        </Layout>

        {
          postId &&
          <Modal
            open={modalVisible}
            onCancel={handleCancel}
            footer={null}
            className='property-modal'
          >
            <ExpandCard page="requirements" handleCancel={handleCancel} item={items.find(item => item.id === parseInt(postId))!}/>
          </Modal>
        }
      </Layout>
    </div>

  );
};

export default RequirementListingPage;
