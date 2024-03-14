import React, {useEffect, useState} from 'react';
import BrokerWebsiteLayout from '../components/BrokerWebsiteLayout';
import ItemCard from '../components/ItemCard';
import axios from 'axios';

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
      <BrokerWebsiteLayout page='Add'>
        <div className='flex flex-wrap justify-center'>
          {items.map((item, index) => (
            <ItemCard key={index} item={item} />
          ))}
        </div>
      </BrokerWebsiteLayout>
    </div>
  )
}

export default AddListing;