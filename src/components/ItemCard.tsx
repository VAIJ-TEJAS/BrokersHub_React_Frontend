import React from 'react';
import { useState } from 'react';
import { Card, Button, Modal } from 'antd';
import ExpandCard from './ExpandCard';

const { Meta } = Card;

interface Item {
  title: string;
  description: string;
  budget: number;
  image: string;
  contact: string;
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
      style={{ width: 300, margin: '16px' }}
      cover={item.image !== '' ? <img alt={item.title} src={item.image} /> : ''}
      className='border border-light overflow-hidden'
    >
      <Modal title="Requirement Details"
      width={'50%'}
                open={modalVisible}
                onCancel={handleCancel}
                footer={null}
                style={{width: '60% !important'}}
                >
                <ExpandCard item={item}/>
            </Modal>
      <Meta title={item.title} description={item.description} className='mb-2' />
      {item.budget == 0 ? '' : <p className='mb-2'>Budget: ${item.budget}</p>}
      <Button type="primary" onClick={showModal}>View Details</Button>
    </Card>
  );
};

export default ItemCard;
