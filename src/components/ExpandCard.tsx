import './Navbar.css'
import { Button } from 'antd';
import { PhoneOutlined } from '@ant-design/icons';

interface Item {
  title: string;
  description: string;
  budget: number;
  image: string;
  contact: string;
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
        <img src={item.image} className='shadow w-100' alt={item.title} />
      </div>}
      <div className="property-details px-4">
        <div className='my-4 d-flex justify-between align-items-center border-3 p-3 rounded'>
          <h3 className="property-title fs-2 fw-bold">{item.title}</h3>
          {item.transaction && 
              <p className="property-transaction shadow rounded bg-warning px-4 py-1">
              <strong>{item.transaction}</strong> 
          </p>}
        </div>

        <ul style={{listStyleType: 'disc'}}>
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

        <p className="property-description">{item.description}</p>

        <div className='d-flex px-3 mt-3 justify-between'>
          <Button type="primary" className='col-5' icon={<PhoneOutlined />}>
            {item.contact}
          </Button>
          <Button className='col-5' type="primary">
            Yes, Make offer!
          </Button>
          {/* <button className="btn btn-primary mt-2">Yes, Make offer!</button> */}
          
        </div>
      </div>
    </div>
  );
};

export default ExpandCard;
