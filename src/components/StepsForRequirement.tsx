import { useState } from "react";
import { Steps, Button } from "antd";
import { Link } from "react-router-dom";
import step1 from "../assets/images/reqStep1.png";
import step2 from "../assets/images/reqStep2.png";
import step3 from "../assets/images/reqStep3.png";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import ItemCard from "./ItemCard";

const { Step } = Steps;

const StepsForRequirement: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "About Requirements",
      content: "",
      image: step1,
    },
    {
      title: "Enter requirement details",
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
      image: '',
      title: "Requirement 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      budget: '7,00,000',
      transaction_type: "Buy",
      contact: "7666674367",
      city: "Ranchi",
      state: "Jharkhand",
      downpayment: "",
      price: "",
      ratio_x: "",
      ratio_y: "",
      monthly_rent: "",
      area: 1,
    },
  ];

  return (
    <div
      className="postSteps-container align-items-center justify-content-center d-flex flex-column"
    >
        <div className="container-lg mt-4 w-100">
            <div className="">
                <Steps className="flex-row justify-center items-center" current={currentStep}>
                  {steps.map((item, index) => (
                    <Step key={index} title={<div className="md:block md:w-auto w-0 hidden">{item.title}</div>} className="my-4" />
                  ))}
                </Steps>
            </div>
            {/* <div className="lg:hidden block">
              <div className="flex justify-center items-center">
                <Steps className="w-72" current={currentStep} direction="vertical">
                  {steps.map((item, index) => (
                    <Step key={index} title={item.title} className="my-2" />
                  ))}
                </Steps>
              </div>
            </div> */}
        </div>

        <div>
            <div className="postSteps-img px-3 sm:mx-4 " style={{ display: currentStep === 0 ? "block" : "none" }} >
                <div className="about-listing w-100 h-100 d-flex justify-evenly align-items-center">
                    <div className="d-flex justify-items-center align-items-center" style={{minWidth: '300px'}}>
                        <ItemCard page={"requirements"} item={post[0]} />
                    </div>
                
                    <div className="md:text-left text-center w-3/4 md:w-2/4" >
                      <h1 className="fs-1">About Requirement</h1>
                      <div className="mt-4 homepage-timeline">
                        <p>This is the single stop solution to all your property requirements. Just click on the button below to tell us your needs and our large community of brokers and buyers will get you the best deal in no time.</p>
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
            </div>

            <div
            className="postSteps-img"
            style={{
                display: currentStep === 2 ? "block" : "none",
                height: "500px",
            }}
            >
                <div className="d-flex align-items-center h-100">
                    <img
                        className="w-100 border rounded my-auto"
                        src={steps[currentStep].image}
                        alt={steps[currentStep].title}
                        style={{ maxWidth: "800px" }}
                    />
                </div>
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
            </div>

            <div className="d-flex justify-content-center" style={{ marginTop: "24px" }}>
            {currentStep > 0 && (
                <Button
                icon={<ArrowLeftOutlined />}
                size={"large"}
                type="primary"
                style={{ marginRight: "8px" }}
                onClick={prevStep}
                />
            )}
            {currentStep < steps.length - 1 && (
                <Button
                  size={"large"}
                  type="primary"
                  onClick={nextStep}
                  icon={<ArrowRightOutlined />}
                />
            )}
            {currentStep == steps.length - 1 && (
                <Link to="/postrequirement" className="btn btn-warning">
                Post Requirement
                </Link>
            )}
            </div>
        </div>
    </div>
  );
};

export default StepsForRequirement;
