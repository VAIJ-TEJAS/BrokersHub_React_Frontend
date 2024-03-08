import React from 'react';
import { useState } from 'react';
import { Card, Button, Modal } from 'antd';
import ExpandCard from './ExpandCard';
import './Navbar.css'

const { Meta } = Card;

interface Item {
  title: string;
  description: string;
  budget: number;
  image: string;
  contact: string;
  transaction: string;
  postType: string,
  location: string,
}

interface Props {
  item: Item;
}



const ItemCard: React.FC<Props> = ({ item }) => {
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
      style={{ width: 270, margin: '16px' }}
      cover={item.image !== '' ? <img alt={item.title} src={item.image} /> : ''}
      className='border border-light overflow-hidden'
    >
      <Modal title={`${item.postType} Details`}
        open={modalVisible}
        onCancel={handleCancel}
        footer={null}
        className='property-modal'
        >
        <ExpandCard item={item}/>
      </Modal>
      <Meta title={item.title}  description={item.description} className='mb-2' />
      <p className='mb-2'>Location: <span className='text-secondary'>{item.location}</span></p>
      <p className='mb-2'>Transaction Type: <span className='text-secondary'>{item.transaction}</span></p>
      <Button type="primary" onClick={showModal}>View Details</Button>
    </Card>
  );
};

export default ItemCard;
