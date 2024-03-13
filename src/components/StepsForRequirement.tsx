import { useState } from 'react';
import { Steps, Button } from 'antd';
import { Link } from 'react-router-dom';
import step1 from "./Images/reqStep1.png";
import step2 from "./Images/reqStep2.png"
import step3 from "./Images/reqStep3.png"
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';


const { Step } = Steps;

const StepsForRequirement = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: 'Enter post details',
      content: '',
      image: step1,
    },
    {
      title: 'Review your information from card',
      content: '',
      image: step2,
    },
    {
      title: 'Submit',
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
        <div className='postSteps-img' style={{ display: currentStep === 0 ? 'block' : 'none' }}>
          <img className='h-100 border rounded' src={steps[0].image} alt={steps[0].title} />
          <p>{steps[0].content}</p>
        </div>
        <div className='postSteps-img' style={{ display: currentStep === 1 ? 'block' : 'none' , height: '500px'}}>
          <img className='w-100 border rounded' src={steps[1].image} alt={steps[1].title} style={{maxWidth: '800px'}} />
          <p>{steps[1].content}</p>
        </div>
        <div className='postSteps-img' style={{ display: currentStep === 2 ? 'block' : 'none' }}>
          <img className='h-100 border rounded' src={steps[2].image} alt={steps[2].title} />
          <p>{steps[2].content}</p>
        </div>
        <div className='d-flex' style={{ marginTop: '24px' }}>
          {currentStep > 0 && (
            <Button icon={<ArrowLeftOutlined />} size={'large'} type="primary" style={{ marginRight: '8px' }} onClick={prevStep}><strong>Previous</strong></Button>
          )}
          {currentStep < steps.length - 1 && (
            <Button size={'large'} type="primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} onClick={nextStep}><strong>Next</strong> <ArrowRightOutlined /></Button>
          )}
          {currentStep == steps.length - 1 && (
            <Link to='/PostRequirement' className='btn btn-warning'>Post Requirement</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepsForRequirement;
