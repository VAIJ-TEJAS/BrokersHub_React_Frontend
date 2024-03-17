import React, {useEffect, useState} from 'react';
import ItemCard from '../components/ItemCard';
import axios from 'axios';
import { Layout, Modal } from 'antd';
import Filter from '../components/Search';
import Navbar from '../components/Navbar';
import ExpandCard from '../components/ExpandCard';
import listingLogo from '../components/Images/listingBackground.jpg'
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

const AddListing: React.FC = () => {

  const navigate = useNavigate();

  const [items, setItems] = useState<Item[]>([]);
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleCancel = () => {
    setModalVisible(false)
    navigate('/addsListing/');
  };

  const url = 'https://13.232.115.59/advertisements/';

  const { postId } = useParams();

  // Make the GET request with Axios
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
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchRequest();

    
  }, [postId]);

  return (
    <div>
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
              <div className='mb-5 w-full bg-cover bg-center ' style={{backgroundImage: `url(${listingLogo})`}}>
                <div className='w-full d-flex flex-col items-center justify-center bg-[#0000008f]' style={{height: '450px'}}>
                  <p className='mb-4 text-center text-2xl text-white md:text-4xl sm:text-3xl' style={{fontFamily: 'Montserrat'}}>Find what you need, sell what you love - all in one place!</p>
                  <Filter page={'Add'} items={items} setFilteredItems={setFilteredItems} />
                </div>
              </div>

              <h1 className='text-center mb-3'>Advertisements</h1>


              <div className='d-flex flex-wrap justify-center'>
                {filteredItems.map((item, index) => (
                  <ItemCard page="addsListing" key={index} item={item} />
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
          <ExpandCard handleCancel={handleCancel} page="advertisements" item={items.find(item => item.id === parseInt(postId))!}/>
        </Modal>}
      </Layout>
    </div>
  )
}

export default AddListing;