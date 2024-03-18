import './Navbar.css'
import { Button } from 'antd';
import axios from 'axios';
import { message } from 'antd';

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
}

interface Props {
  item: Item;
  page: string;
  handleCancel: () => void;
}

const ExpandCard: React.FC<Props> = ({ item, page, handleCancel }) => {

  console.log(location.pathname)
  const handleDeal = () => {
    const token = localStorage.getItem('share-coupon-access-token');

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
          message.error(error.response.detail);
          // Optionally, you can perform any actions after error
      });
  }

  return (
    <div className="property-card">
      {item.image !== undefined && (<div className="property-image">
        <img src={item.image} className='rounded w-100' alt={item.title} />
      </div>)}
      <div className="property-details">
        <div className='my-4 d-flex justify-between align-items-center border-2 border-black p-3 rounded'>
          <h3 className="property-title fs-3" style={{fontFamily: 'Montserrat'}}>{item.title}</h3>
          {item.transaction_type && 
              <p className="property-transaction shadow rounded bg-warning px-4 py-1">
              <strong>{item.transaction_type}</strong> 
          </p>}
        </div>

        <ul className='px-3' style={{listStyleType: 'disc'}}>
          {item.transaction_type=="Rent" &&
              <li className="property-budget">
            <strong>Rent amount:</strong> ₹{item.monthly_rent}
          </li>}

          {item.transaction_type=="Conversion" &&
              <li className="property-budget">
            <strong>Down payment:</strong> {item.downpayment}
          </li>}

          {item.transaction_type=="Conversion" &&
              <li className="property-budget">
            <strong>Ratio:</strong> {item.ratio_x} : {item.ratio_y}
          </li>}

          {item.transaction_type=="Buy" &&
              <li className="property-budget">
            <strong>Budget:</strong> ₹{item.budget}
          </li>}

          {item.transaction_type=="Sell" &&
              <li className="property-budget">
            <strong>Price:</strong> ₹{item.budget}
          </li>}

          <li className="property-contact">
              <strong>Location:</strong> {item.city}, {item.state}
          </li>
        </ul>

        <p className="property-description mt-3">{item.description}</p>

        {(page === 'requirements' || page === 'advertisements') ? 
          <div className='flex'>
            <Button type="primary" onClick={handleDeal} className='mt-3 me-2 w-3/4 sm:w-4/5'>
              Send Enquiry
            </Button>
            <Button className='mt-3 w-1/4 sm:w-1/5' onClick={handleCancel} danger>Close</Button>
          </div>
          : 
          <div className='flex'>
            <Button type="primary" className='mt-3 me-2  w-3/4 sm:w-4/5'>
              Send Enquiry
            </Button>
            <Button className='mt-3  w-1/4 sm:w-1/5' onClick={handleCancel} danger>Close</Button>
          </div>
        }
          
      </div>
    </div>
  );
};

export default ExpandCard;
