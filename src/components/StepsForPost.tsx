import { useState } from 'react';
import { Steps, Button, message } from 'antd';
import step1 from "./step1.png";
import step2 from "./step2.png"
import step3 from "./step3.png"

const { Step } = Steps;

const StepsForPost = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const onFinish = () => {
    message.success('Your post will be added successfully!');
  };

  return (
    <div>
      <Steps current={currentStep}>
        <Step title="Step 1" description="Enter post details" />
        <Step title="Step 2" description="Review you information from card" />
        <Step title="Step 3" description="Submit" />
      </Steps>
      <div style={{ marginTop: '24px' }}>
        {currentStep === 0 && (
          <div>
            <div className='d-flex justify-center rounded overflow-hidden'>
                <img src={step1} style={{width: '70%', minWidth: '250px'}} alt="" />
            </div>
            <Button type="primary" onClick={nextStep} className='mt-4'>
              Next
            </Button>
          </div>
        )}
        {currentStep === 1 && (
          <div>
            <div className='d-flex justify-center rounded overflow-hidden'>
                <img src={step2} style={{width: '40%', minWidth: '250px'}} alt="" />
            </div>
            <Button style={{ marginRight: '8px' }} onClick={prevStep} className='mt-4'>
              Previous
            </Button>
            <Button type="primary" onClick={nextStep} className='mt-4'>
              Next
            </Button>
          </div>
        )}
        {currentStep === 2 && (
          <div>
            <div className='d-flex justify-center rounded overflow-hidden'>
                <img src={step3} style={{width: '40%', minWidth: '250px'}} alt="" />
            </div>
            <Button style={{ marginRight: '8px' }} onClick={prevStep} className='mt-4'>
              Previous
            </Button>
            <Button type="primary" onClick={onFinish} className='mt-4'>
              Done
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StepsForPost;
