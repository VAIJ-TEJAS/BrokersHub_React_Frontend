import React from 'react';
import { Card, Button } from 'antd';

const { Meta } = Card;

interface Item {
  title: string;
  description: string;
  price: number;
  image: string;
}

interface Props {
  item: Item;
}

const ItemCard: React.FC<Props> = ({ item }) => {
  if (item.image == '') {
    item.image = 'https://via.placeholder.com/300x200'
  }
  return (
    <Card
      hoverable
      style={{ width: 300, margin: '16px' }}
      cover={<img alt={item.title} src={item.image} />}
    >
      <Meta title={item.title} description={item.description} />
      <p>Price: ${item.price}</p>
      <Button type="primary">View Details</Button>
    </Card>
  );
};

export default ItemCard;
