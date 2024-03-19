import { useState } from "react";
import { Steps, Button, Timeline } from "antd";
import { Link } from "react-router-dom";
import step1 from "./Images/reqStep1.png";
import step2 from "./Images/reqStep2.png";
import step3 from "./Images/reqStep3.png";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import ItemCard from "./ItemCard";

const { Step } = Steps;

interface Props {
  showModal: () => void;
}

const StepsForRequirement: React.FC<Props> = ({showModal}) => {
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
      title: "Review your information from card",
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
            <div className="lg:block hidden">
                <Steps current={currentStep}>
                {steps.map((item, index) => (
                    <Step key={index} title={item.title} className="my-4" />
                    ))}
                </Steps>
            </div>
        </div>

        <div>
            <div className="postSteps-img px-3 sm:mx-4 " style={{ display: currentStep === 0 ? "block" : "none" }} >
                <div className="about-listing w-100 h-100 d-flex justify-evenly align-items-center">
                    <div className="d-flex justify-items-center align-items-center" style={{minWidth: '300px'}}>
                        <ItemCard showModal={showModal} page={"home"} item={post[0]} />
                    </div>
                
                    <div className="col-md-8" >
                        <h1 className="fs-1">About Requirement</h1>
                        <div className="mt-4 homepage-timeline">
                        <Timeline
                            items={[
                            {
                                children: 'The card displays the title and description of the requirement. This information provides a brief overview of what the requirement is, helping users understand required purpose or characteristics.',
                            },
                            {
                                children: 'Additionally, the card mentions the transaction type associated for requirement. This could indicate whether the requirement will be buying, rent, lease, or any other type of transaction.',
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
                <Link to="/PostRequirement" className="btn btn-warning">
                Post Requirement
                </Link>
            )}
            </div>
        </div>
    </div>
  );
};

export default StepsForRequirement;
