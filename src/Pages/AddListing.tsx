import React, {useEffect, useState} from 'react';
import ItemCard from '../components/ItemCard';
import axios from 'axios';
import { Layout } from 'antd';
import Filter from '../components/Search';
import Navbar from '../components/Navbar';
import listingLogo from '../components/Images/listingBackground.jpg'

const { Content } = Layout;

const AddListing: React.FC = () => {

  const [items, setItems] = useState([]);

  const url = 'https://13.232.115.59/advertisements/';

  // Make the GET request with Axios
  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setItems(response.data);
        console.log('Response:', response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])

  // const items = [
  //   {
  //     title: 'Property 1',
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  //     budget: 700000,
  //     image: 'https://cdn.britannica.com/05/157305-004-53D5D212.jpg',
  //     contact: '123',
  //     transaction_type: 'Sell',
  //     city: 'Ranchi',
  //     state: 'Jharkhand',
  //     ratio: 0,
  //   },
  // ];

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
                  <Filter page={'Add'} />
                </div>
              </div>

              <h1 className='text-center mb-3'>Advertisements</h1>


              <div className='d-flex flex-wrap justify-center'>
                {items.map((item, index) => (
                  <ItemCard key={index} item={item} />
                  ))}
              </div>

            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  )
}

export default AddListing;