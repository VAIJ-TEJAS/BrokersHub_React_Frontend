import { useState } from 'react';
import { Steps, Button, message } from 'antd';
import step1 from "./step1.png";
import step2 from "./step2.png"
import step3 from "./step3.png"

const { Step } = Steps;

const StepsForPost = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: 'Select Post Type',
      content: '',
      image: step1,
    },
    {
      title: 'Add Details',
      content: '',
      image: step2,
    },
    {
      title: 'Upload Images',
      content: '',
      image: step3,
    },
  ];

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div style={{ display: 'flex' }} className='postSteps-container align-items-center'>
      <div style={{ flex: 1 }} className='mt-4'>
        <Steps current={currentStep} direction="vertical">
          {steps.map((item, index) => (
            <Step key={index} title={item.title} className='my-4' />
          ))}
        </Steps>
      </div>
      <div style={{ flex: 2 }}>
        <div style={{ display: currentStep === 0 ? 'block' : 'none' }}>
          <img style={{height: '500px'}} className='postSteps-img' src={steps[0].image} alt={steps[0].title} />
          <p>{steps[0].content}</p>
        </div>
        <div style={{ display: currentStep === 1 ? 'block' : 'none' }}>
          <img style={{height: '500px'}} className='postSteps-img' src={steps[1].image} alt={steps[1].title} />
          <p>{steps[1].content}</p>
        </div>
        <div style={{ display: currentStep === 2 ? 'block' : 'none' }}>
          <img style={{height: '500px'}} className='postSteps-img' src={steps[2].image} alt={steps[2].title} />
          <p>{steps[2].content}</p>
        </div>
        <div style={{ marginTop: '24px' }}>
          {currentStep > 0 && (
            <Button style={{ marginRight: '8px' }} onClick={prevStep}>
              Previous
            </Button>
          )}
          {currentStep < steps.length - 1 && (
            <Button type="primary" onClick={nextStep}>
              Next
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepsForPost;
