import './Navbar.css'
import { Button } from 'antd';

interface Item {
  title: string;
  description: string;
  budget: number;
  image: string;
  transaction: string;
  postType: string;
  location: string,
  state: string,
}

interface Props {
  item: Item;
}

const ExpandCard: React.FC<Props> = ({ item }) => {

    

  return (
    <div className="property-card">
      {item.image && <div className="property-image">
        <img src={item.image} className='rounded w-100' alt={item.title} />
      </div>}
      <div className="property-details">
        <div className='my-4 d-flex justify-between align-items-center border-2 border-black p-3 rounded'>
          <h3 className="property-title fs-3" style={{fontFamily: 'Montserrat'}}>{item.title}</h3>
          {item.transaction && 
              <p className="property-transaction shadow rounded bg-warning px-4 py-1">
              <strong>{item.transaction}</strong> 
          </p>}
        </div>

        <ul className='px-3' style={{listStyleType: 'disc'}}>
          {item.transaction=="Rent" &&
              <li className="property-budget">
            <strong>Rent amount:</strong> ₹{item.budget}
          </li>}

          {item.transaction=="Conversion" &&
              <li className="property-budget">
            <strong>Down payment:</strong> {item.budget}%
          </li>}

          {item.transaction=="Buy" &&
              <li className="property-budget">
            <strong>Budget:</strong> ₹{item.budget}
          </li>}

          {item.transaction=="Sell" &&
              <li className="property-budget">
            <strong>Price:</strong> ₹{item.budget}
          </li>}

          <li className="property-contact">
              <strong>Location:</strong> {item.location}, {item.state}
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
