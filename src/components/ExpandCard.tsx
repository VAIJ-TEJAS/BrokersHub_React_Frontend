import './Navbar.css'
import { Button } from 'antd';

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
}

const ExpandCard: React.FC<Props> = ({ item }) => {

  console.log('Item:', item);

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
            <strong>Price:</strong> ₹{item.price}
          </li>}

          <li className="property-contact">
              <strong>Location:</strong> {item.city}, {item.state}
          </li>
        </ul>

        <p className="property-description mt-3">{item.description}</p>

        <Button type="primary" className='mt-3 w-100'>
          Yes, Make offer!
        </Button>
          
      </div>
    </div>
  );
};

export default ExpandCard;
