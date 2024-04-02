import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Button, Card, Modal, message, Popconfirm, Tag, Spin  } from "antd";
import { EditOutlined, DeleteOutlined, ShareAltOutlined } from "@ant-design/icons";

import ExpandCard from "./ExpandCard";
import { Item } from "../types/item.types";

import "./Navbar.css";

const { Meta } = Card;

interface Props {
  item: Item;
  page: string;
}

interface Location {
  places: string;
}

const ItemCard: React.FC<Props> = ({ item, page }) => {

  const navigate = useNavigate();

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLocations, setSelectedLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    try {
      await axios.delete(
        `https://13.232.115.59/my-${page}/${item.id}/`,
        {
          headers: {
            Authorization: `Token ${localStorage.getItem("thebrokershub-access-token")}`,
            "Content-Type": "application/json",
            // Add other headers as needed
          },
        }
      );
      message.success("Your post has been deleted!");
      // Reload the current page
      setLoading(false); // Set loading state back to false after the operation is completed
      window.location.reload();
    } catch (error: any) {
      console.log('Response:', error);

      message.error(error.response?.data);
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const confirm = (e?: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    message.success('The post has been deleted.');
    handleDelete();
  };

  const shareLink = async () => {
    const shareData = {
      title: 'Your Website Title',
      text: 'Check out this awesome website!',
      url: `https://thebrokershub.in/${item.image ? `addslisting/${item.id}` : `requirementslisting/${item.id}`}`,
    };

    try {
      await navigator.share(shareData);
      console.log('Shared successfully');
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  useEffect(() => {
    // Split city and state strings by ','
    if (item.places !== undefined && item.places !== null && item.places.length) {
      
      const placesArr = (item.places !== null && item.places.includes(',')) ? item.places.split(',') : [item.places];
      
      // Map city and state arrays to create an array of Location objects
      const locations = placesArr.map((place: string) => ({
        places: place || '', // Use empty string if state is not available
      }));
      setSelectedLocations(locations)
    }
  }, [item])

  return (
    <Card
      hoverable
      style={{ margin: "10px" }}
      cover={
        item.image !== "" && item.image!==null && item.image !== undefined ? (
          <div className="d-flex justify-center items-center mt-2 px-2">
            <img alt={item.title} className=" p-2 h-52 w-auto max-w-72 border" src={item.image} />
          </div>
        ) : (
          ""
        )
      }
      className="overflow-hidden border w-80"
    >
      <Modal
        open={modalVisible}
        onCancel={handleCancel}
        footer={null}
        className="property-modal"
      >
        <ExpandCard handleCancel={handleCancel} item={item} page={page} />
      </Modal>

      <div>
        <div className="absolute top-1 right-1">
          {(location.pathname.includes('profile')) && (
            <div>
              <Button
                type="primary"
                className="mb-1"
                onClick={() => {
                  localStorage.setItem('thebrokerhub-item', JSON.stringify(item))
                  if (page === "requirements") {
                    navigate(`/postrequirement/${item.id}`)
                  }
                  else if(page === "advertisements"){
                    navigate(`/postadd/${item.id}`)
                  }
                }}
                icon={<EditOutlined />}
              />
              <Spin spinning={loading}>
                {/* Content to show when loading */}
                <Popconfirm
                title="Delete the post"
                description="Are you sure to delete this post?"
                onConfirm={confirm}
                okText="Yes"
                cancelText="No"
              >

                <Button
                  type="primary"
                  icon={<DeleteOutlined />}
                  danger
                />
              </Popconfirm>
              </Spin>
              <br />
              
              </div>
          )}
        </div>
        
        <div className="pe-3">
          <Meta
            title={<h2 className="fs-5">{<div>{item.title.length > 25 ? item.title.substring(0, 22)+'...' : item.title}</div>}</h2>}
            // description={<div className="">{item.description}</div>}
            className="mb-2"
          />
        </div>
        {
          item.transaction_type === 'Buy' &&
          <p className="mb-2">Budget: <span className="text-secondary">₹ {item.budget}</span></p>
        }
        {
          item.transaction_type === 'Sell' &&
          <p className="mb-2">Price: <span className="text-secondary">₹ {item.budget}</span></p>
        }
        {
          item.transaction_type === 'Conversion' &&
          <p className="mb-2">Down Payment: <span className="text-secondary">₹ {item.downpayment}</span></p>
        }
        {
          item.transaction_type === 'Rent' &&
          <p className="mb-2">Monthly Rent: <span className="text-secondary">₹ {item.monthly_rent}</span></p>
        }
        <p className="mb-2">
          Location:{" "}
          <span className="text-secondary">
            <span>{item.city}, {item.state} </span>
              {selectedLocations.length > 0 &&
                <>
                  <Tag>{`${selectedLocations[0]?.places}`}</Tag>
                  {selectedLocations.length > 2 ? " ..." : ""}
                </>
              }
          </span>
        </p>
        <p className="mb-2">
          Type: <span className="text-secondary">{item.transaction_type}</span>
        </p>
          
          {page !== "addslisting" && page !== "requirementslisting" ? (
            <div className={`flex justify-between `}>
              <Button
                type="primary"
                className={`${location.pathname.includes('home') || location.pathname.includes('post') ? 'w-full' : 'w-4/5'}  relative bottom-0 right-0`}
                onClick={() => setModalVisible(true)}
                >
                View Details
              </Button>

              <Button
                type="primary"
                className={`w-auto  justify-center items-center ${location.pathname.includes('home') || location.pathname.includes('post') ? 'hidden' : 'flex' }`}
                onClick={shareLink}
                icon={<ShareAltOutlined className="w-10 flex justify-center items-center" />}
              />
            </div>
          ) : 
          (<div className={`flex justify-between ${location.pathname.includes('post') ? 'hidden' : ''}`}>
            <Button type="primary" className="w-4/5">
              <Link to={`/${page}/${item.id}`} className="w-full block">
                View Details
              </Link>
            </Button>
            <Button
              type="primary"
              className="w-auto flex justify-center items-center"
              onClick={shareLink}
              icon={<ShareAltOutlined className="w-10 flex justify-center items-center" />}
            />
            </div>
          )}
        {/* } */}
      </div>
    </Card>
  );
};

export default ItemCard;
