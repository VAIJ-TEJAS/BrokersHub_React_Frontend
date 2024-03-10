import React from 'react';
import BrokerWebsiteLayout from '../components/BrokerWebsiteLayout';
import ItemCard from '../components/ItemCard';

const RequirementListingPage: React.FC = () => {
  const items = [
    {
      title: 'Property 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      budget: 700000,
      image: '',
      contact: '123',
      transaction: 'Buy',
      postType: 'Add',
      state: 'Jharkhand',
      location: 'Ranchi',
      ratio: 0,
    },
    {
      title: "Property 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      budget: 85000,
      image: "",
      contact: "456",
      transaction: "Rent",
      postType: "Requirement",
      state: "Karnataka",
      location: "Bangalore",
      ratio: 20
    },
    
    {
      title: "Car Sale",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      budget: 15000,
      image: "",
      contact: "789",
      transaction: "Buy",
      postType: "Requirement",
      state: "Tamil Nadu",
      location: "Chennai",
      ratio: 30
    },
    
    {
      title: "Laptop for Sale",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      budget: 50000,
      image: "",
      contact: "101112",
      transaction: "Conversion",
      postType: "Requirement",
      state: "Maharashtra",
      location: "Mumbai",
      ratio: 40
    }
    
    // Add more items as needed
  ];

  return (
    <BrokerWebsiteLayout page={'requirement'}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {items.map((item, index) => (
          <ItemCard key={index} item={item} />
        ))}
      </div>
    </BrokerWebsiteLayout>
  );
};

export default RequirementListingPage;
