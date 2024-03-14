import React, {useEffect, useState} from 'react';
import BrokerWebsiteLayout from '../components/BrokerWebsiteLayout';
import ItemCard from '../components/ItemCard';
import axios from 'axios';

const RequirementListingPage: React.FC = () => {

  const [items, setItems] = useState([]);

  const url = 'https://13.232.115.59/requirements/';

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
  
  return (
    <BrokerWebsiteLayout page={'requirement'}>
      <div className='d-flex flex-wrap justify-center'>
        {items.map((item, index) => (
          <ItemCard key={index} item={item} />
        ))}
      </div>
    </BrokerWebsiteLayout>
  );
};

export default RequirementListingPage;
