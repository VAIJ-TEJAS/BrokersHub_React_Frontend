import './Navbar.css'
import { Button, Tag } from 'antd';
import axios from 'axios';
import { message } from 'antd';
import { Context } from '../context/context.provider';
import { Item } from '../types/item.types';
import { useEffect, useState } from 'react';

interface Props {
  item: Item;
  page: string;
  handleCancel: () => void;
}

interface Location {
  places: string;
}

const ExpandCard: React.FC<Props> = ({ item, page, handleCancel }) => {

  const { userAuthenticated, showAuthModal } = Context();

  const token = localStorage.getItem('thebrokershub-access-token');
  const [selectedLocations, setSelectedLocations] = useState<Location[]>([]);
  
  const handleDeal = () => {
    if (!userAuthenticated)  {
      message.error("Please login first.");
      showAuthModal()
      return
    }

    let data;

    if (page === 'advertisements'){
      data = {
        advertisement: item.id
      }
    }
    else if (page === 'requirements'){
      data = {
        requirement: item.id
      }
    }

    axios.post('https://13.232.115.59/deals/', data, {
      headers: {
          'Authorization': `Token ${token}`,
          'Content-Type': 'application/json'
          // Add other headers as needed
      }
    })
      .then(response => {
          console.log('Response:', response.data); // Handle the response
          message.success('You enquiry has been submited.');
          // Optionally, you can perform any actions after successful response
      })
      .catch(error => {
        if (error.response.data.message) {
          message.error(error.response.data.message);
        }
        else if (error.response.data.detail) {
          message.error(error.response.data.detail);
        }
        else {
          message.error("Your request could not be sent");
        }

          // Optionally, you can perform any actions after error
      });
  }

  useEffect(() => {
    // Split city and state strings by ','
    if (item.places && item.places.length) {
      
      const placeArr = item.places.split(',');
      
      // Map city and state arrays to create an array of Location objects
      const locations = placeArr.map((place: string) => ({
        places: place || '', // Use empty string if state is not available
      }));
      setSelectedLocations(locations)
    }
  }, [])

  return (
    <div className="property-card">
      {(item.image !== undefined && item.image !== '') && (<div className="property-image">
        <img src={item.image} className='rounded w-100' alt={item.title} />
      </div>)}
      <div className="property-details">
        <div className='my-4 d-flex justify-between align-items-center border-2 border-black p-3 rounded'>
          <h3 className="property-title text-lg sm:text-xl lg:text-2xl" style={{fontFamily: 'Montserrat'}}>{item.title}</h3>
          {item.transaction_type && 
              <p className="property-transaction shadow rounded bg-warning px-4 py-1">
              <strong>{item.transaction_type}</strong> 
          </p>}
        </div>

        <ul className='px-3' style={{listStyleType: 'disc'}}>
          {item.transaction_type=="Rent" &&
              <li className="property-budget">
            <strong>Rent amount:</strong> ₹{parseFloat(item.monthly_rent).toLocaleString()}
          </li>}

          {item.transaction_type=="Conversion" &&
              <li className="property-budget">
            <strong>Down payment:</strong> {parseFloat(item.downpayment).toLocaleString()}
          </li>}

          {item.transaction_type=="Conversion" &&
              <li className="property-budget">
            <strong>Ratio:</strong> {item.ratio_x} : {item.ratio_y}
          </li>}

          {item.transaction_type=="Buy" &&
              <li className="property-budget">
            <strong>Budget:</strong> ₹{parseFloat(item.budget).toLocaleString()}
          </li>}

          {item.transaction_type=="Sell" &&
              <li className="property-budget">
            <strong>Price:</strong> ₹{parseFloat(item.budget).toLocaleString()}
          </li>}

          <li className="property-contact">
              <strong>Location:</strong>
              <span> {item.city}, {item.state}</span>
              {
                selectedLocations &&
                selectedLocations.slice(0, -1).map((location: any, index: any) => (
                  <Tag className='mx-1' key={index}>{`${location.places}`}</Tag>
                ))
              }
          </li>
          <li>
            <strong>Area:</strong>
            <span> {item.area} sqft.</span>
          </li>
        </ul>

        <p className="property-description mt-3">{item.description}</p>

        {(!location.pathname.includes('post') && !location.pathname.includes('profile') && !location.pathname.includes('home')) ? 
          <div className='flex'>
            <Button type="primary" onClick={handleDeal} className='mt-3 me-2 w-3/4 sm:w-4/5'>
              {page === 'requirements' ? "Make Offer" : "Send Enquiry"}
            </Button>
            <Button className='mt-3 w-1/4 sm:w-1/5' onClick={handleCancel} danger>Close</Button>
          </div>
          : 
          <div className='flex'>
            <Button type="primary" className='mt-3 me-2 w-3/4 sm:w-4/5'>
              {page === 'requirements' ? "Make Offer" : "Send Enquiry"}
            </Button>
            <Button className='mt-3  w-1/4 sm:w-1/5' onClick={handleCancel} danger>Close</Button>
          </div>
        }
          
      </div>
    </div>
  );
};

export default ExpandCard;
