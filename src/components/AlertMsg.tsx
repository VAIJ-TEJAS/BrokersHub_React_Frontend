import React from 'react';
import { Alert } from 'antd';

interface AlertProps {
  message: string;
  type: 'success' | 'info' | 'warning' | 'error';
}

const AlertMsg: React.FC<AlertProps> = ({ message, type }) => {
  return (
    <Alert
      message={message}
      type={type}
      showIcon
    />
  );
};

export default AlertMsg;
