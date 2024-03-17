import React, { useState } from "react";
import { Button, Card, Modal, Alert } from "antd";
import { Link, useNavigate } from "react-router-dom";
import ExpandCard from "./ExpandCard";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import axios from "axios";
import "./Navbar.css";

const { Meta } = Card;

interface Item {
  id: number;
  title: string;
  state: string;
  city: string;
  description: string;
  contact: string;
  transaction_type: string;
  price: string;
  downpayment: string;
  ratio_x: string;
  ratio_y: string;
  monthly_rent: string;
  image: string;
  budget: string;
  area: number;
}

interface Props {
  item: Item;
  page: string;
}

const ItemCard: React.FC<Props> = ({ item, page }) => {

  const navigate = useNavigate();

  const [modalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `https://13.232.115.59/my-${page}/${item.id}/`,
        {
          headers: {
            Authorization: `Token ${localStorage.getItem("share-coupon-access-token")}`,
            "Content-Type": "application/json",
            // Add other headers as needed
          },
        }
      );
      console.log('Response success:', response.data);
      setSuccess("Your post has been deleted!");
    } catch (error: any) {
      console.log('Response:', error);

      setError(error.response?.data);
    }
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <Card
      hoverable
      style={{ margin: "10px" }}
      cover={
        item.image !== "" && item.image !== undefined ? (
          <img alt={item.title} className="p-2 w-100 border" src={item.image} />
        ) : (
          ""
        )
      }
      className="overflow-hidden border bg-gradient-to-r from-white to-white w-80"
    >
      <Modal
        open={modalVisible}
        onCancel={handleCancel}
        footer={null}
        className="property-modal"
      >
        <ExpandCard item={item} />
      </Modal>

      {error !== "" && (
        <Alert
          className="mb-3"
          message={error}
          type="error"
          showIcon
          closable
          onClose={() => setError("")}
        />
      )}

      {success !== "" && (
        <Alert
          className="mb-3"
          message={success}
          type="success"
          showIcon
          closable
          onClose={() => setSuccess("")}
        />
      )}

      <div>
        {(page === "requirements" || page === "advertisements") && (
          <div className="absolute top-1 right-1">
            <Button
              type="primary"
              className="mb-1"
              onClick={() => {
                if (page === "requirements") {
                  navigate(`/PostRequirement/${item.id}`)
                }
                else if(page === "advertisements"){
                  navigate(`/PostAdd/${item.id}`)
                }
              }}
              icon={<EditOutlined />}
            >
            </Button>
            <br />
            <Button
              type="primary"
              onClick={handleDelete}
              icon={<DeleteOutlined />}
              danger
            ></Button>
          </div>
        )}
        
        <div className="pe-3">
          <Meta
            title={<h2 className="fs-5">{item.title}</h2>}
            description={<div className="">{item.description}</div>}
            className="mb-2"
          />
        </div>
        <p className="mb-2">
          Location:{" "}
          <span className="text-secondary">
            {item.city}, {item.state}
          </span>
        </p>
        <p className="mb-2">
          Type: <span className="text-secondary">{item.transaction_type}</span>
        </p>
        {page !== "addsListing" && page !== "requirementsListing" ? (
          <Button
            type="primary"
            className="w-full relative bottom-0 right-0"
            onClick={() => setModalVisible(true)}
          >
            View Details
          </Button>
        ) : (
          <Button type="primary" className="w-full relative bottom-0 right-0">
            <Link to={`/${page}/${item.id}`} className="w-full block">
              View Details
            </Link>
          </Button>
        )}
      </div>
    </Card>
  );
};

export default ItemCard;
