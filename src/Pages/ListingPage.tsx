import React from 'react';
import BrokerWebsiteLayout from '../components/BrokerWebsiteLayout';
import ItemCard from '../components/ItemCard';

const LandingPage: React.FC = () => {
  const items = [
    {
      title: 'Property 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      budget: 700000,
      image: 'https://cdn.britannica.com/05/157305-004-53D5D212.jpg',
      contact: '123',
    },
    {
      title: 'Property 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      budget: 700000,
      image: 'https://via.placeholder.com/300x200',
      contact: '321',
    },                                                                                                                           
    {
      title: 'Property 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      budget: 700000,
      image: 'https://via.placeholder.com/300x200',
      contact: '123',
    },
    {
      title: 'Property 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      budget: 700000,
      image: 'https://via.placeholder.com/300x200',
      contact: '321',
    },
    {
      title: 'Property 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      budget: 700000,
      image: '',
      contact: '123',
    },
    // Add more items as needed
  ];

  return (
    <BrokerWebsiteLayout>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {items.map((item, index) => (
          <ItemCard key={index} item={item} />
        ))}
      </div>
    </BrokerWebsiteLayout>
  );
};

export default LandingPage;
