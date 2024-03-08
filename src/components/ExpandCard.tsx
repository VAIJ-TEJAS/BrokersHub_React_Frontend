import { useState } from 'react';
import './Navbar.css'

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
        <img src={item.image} alt={item.title} />
      </div>}
      <div className="property-details">
        <h3 className="property-title fw-bold">{item.title}</h3>
        {item.transaction && 
            <p className="property-transaction">
            <strong>Transaction type:</strong> {item.transaction}
        </p>}

        {item.transaction=="Rent" &&
            <p className="property-budget">
          <strong>Rent amount:</strong> ₹{item.budget}
        </p>}

        {item.transaction=="Conversion" &&
            <p className="property-budget">
          <strong>Down payment:</strong> {item.budget}%
        </p>}

        {item.transaction=="Buy" &&
            <p className="property-budget">
          <strong>Budget:</strong> ₹{item.budget}
        </p>}

        {item.transaction=="Sell" &&
            <p className="property-budget">
          <strong>Price:</strong> ₹{item.budget}
        </p>}
        
        {item.contact && (
            <p className="property-contact">
            <strong>Contact:</strong> {item.contact}
          </p>
        )}

        <p className="property-contact">
            <strong>Location:</strong> {item.location}, {item.state}
          </p>
        <p className="property-description">{item.description}</p>

        <button className="btn btn-primary w-100 mt-2">Yes, Make offer!</button>
      </div>
    </div>
  );
};

export default ExpandCard;
