import { useState } from "react";
import { Steps, Button, Timeline } from "antd";
import { Link } from "react-router-dom";
import step1 from "../assets/images/postStep1.png";
import step2 from "../assets/images/postStep2.png";
import step3 from "../assets/images/postStep3.png";
import ItemCard from "./ItemCard";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

const { Step } = Steps;

const StepsForAdvertisement: React.FC = () => {

  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "About Advertisements",
      content: "",
      image: step1,
    },
    {
      title: "Enter post details",
      content: "",
      image: step1,
    },
    {
      title: "Review information",
      content: "",
      image: step2,
    },
    {
      title: "Submit",
      content: "",
      image: step3,
    },
  ];

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const post = [
    {
      id: 1,
      budget: '',
      contact: "7666674367",
      downpayment: "",
      price: "7,00,000",
      ratio_x: "",
      ratio_y: "",
      monthly_rent: "",
      title: 'Property 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://cdn.britannica.com/05/157305-004-53D5D212.jpg',
      transaction_type: 'Sell',
      city: 'Ranchi',
      state: 'Jharkhand',
      area: 1,
    },
  ]

  return (
    <div className="postSteps-container flex justify-content-center align-items-center d-flex flex-column">
      <div className="container-lg mt-4 w-100">
        <div className="lg:block hidden">
          <Steps current={currentStep} >
            {steps.map((item, index) => (
              <Step key={index} title={item.title} className="my-4" />
              ))}
          </Steps>
        </div>
      </div>

      <div>
        <div
          className="postSteps-img px-3 sm:mx-4"
          style={{ display: currentStep === 0 ? "block" : "none" }}
        >

          <div className="about-listing bg-light w-full h-full d-flex justify-center items-center">
            <div className="d-flex justify-items-center align-items-center" style={{minWidth: '300px'}}>
              <ItemCard page="home" item={post[0]} />
            </div>
            <div className=" col-md-8" >
              <h1 className="fs-1">About Advertisement</h1>
              <div className="mt-4 homepage-timeline">
                <Timeline
                  style={{fontSize: '1rem'}}
                  items={[
                    {
                      children: 'The card displays the title and description of the item. This information provides a brief overview of what the item is about, helping users understand its purpose or characteristics.',
                    },
                    {
                      children: 'Additionally, the card mentions the transaction type associated with the item. This could indicate whether the item is for sale, rent, lease, or any other type of transaction.',
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="postSteps-img"
          style={{ display: currentStep === 1 ? "block" : "none" }}
        >
          <img
            className="h-100 border rounded"
            src={steps[currentStep].image}
            alt={steps[currentStep].title}
          />
          <p>{steps[currentStep].content}</p>
        </div>

        <div
          className="postSteps-img"
          style={{
            display: currentStep === 2 ? "block" : "none",
            height: "500px",
          }}
        >
          <img
            className="h-100 border rounded"
            src={steps[currentStep].image}
            alt={steps[currentStep].title}
          />
          <p>{steps[1].content}</p>
        </div>

        <div
          className="postSteps-img"
          style={{ display: currentStep === 3 ? "block" : "none" }}
        >
          <img
            className="h-100 border rounded"
            src={steps[currentStep].image}
            alt={steps[currentStep].title}
          />
          <p>{steps[2].content}</p>
        </div>

        <div className="d-flex justify-content-center" style={{ marginTop: "24px" }}>
          {currentStep > 0 && (
            <Button
              icon={<ArrowLeftOutlined />}
              size={"large"}
              type="primary"
              style={{ marginRight: "8px" }}
              onClick={prevStep}
            >
              <strong>Previous</strong>
            </Button>
          )}
          {currentStep < steps.length - 1 && (
            <Button
              size={"large"}
              type="primary"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              onClick={nextStep}
            >
              <strong>Next</strong> <ArrowRightOutlined />
            </Button>
          )}
          {currentStep == steps.length - 1 && (
            <Link to="/PostAdd" className="btn btn-warning">
              Post Advertisement
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepsForAdvertisement;
