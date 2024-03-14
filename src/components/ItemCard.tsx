import React from 'react';
import { useState } from 'react';
import { Card, Button, Modal } from 'antd';
import ExpandCard from './ExpandCard';
import './Navbar.css'

const { Meta } = Card;

interface Item {
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



const ItemCard: React.FC<Props> = ({ item }) => {
  console.log(item)
  const [modalVisible, setModalVisible] = useState(false);

  const handleCancel = () => {
    setModalVisible(false)
  };

  const showModal = () => {
    setModalVisible(true);
  };
  
  return (
    <Card
      hoverable
      style={{ width: 270, margin: '16px'}}
      cover={(item.image !== '' && item.image !== undefined) ? <img alt={item.title} src={item.image} /> : ''}
      className='overflow-hidden'
    >
      <Modal
        open={modalVisible}
        onCancel={handleCancel}
        footer={null}
        className='property-modal'
        >
        <ExpandCard item={item}/>
      </Modal>
      <Meta title={item.title}  description={item.description} className='mb-2' />
      <p className='mb-2'>Location: <span className='text-secondary'>{item.city}, {item.state}</span></p>
      <p className='mb-2'>Type: <span className='text-secondary'>{item.transaction_type}</span></p>
      <Button type="primary" onClick={showModal}>View Details</Button>
    </Card>
  );
};

export default ItemCard;
