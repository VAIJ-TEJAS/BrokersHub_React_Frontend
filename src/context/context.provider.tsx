/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useState, ReactNode, useContext } from 'react';

// Create the context
const MyContext = createContext<any | undefined>(undefined);

// Create a provider component
export const MyContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

  const [userAuthenticated, setUserAuthenticated] = useState<boolean>(!!localStorage.getItem('thebrokershub-access-token'))
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [method, setMethod] = useState<string>('1');
  const [ref_code, setref_code] = useState<string>('');
  const [otpPageOpen, setOtpPageOpen] = useState<boolean>(false);
  const [inputEmailPageOpen, setInputEmailPageOpen] = useState<boolean>(false)
  const [passwordBox, setPasswordBox] = useState(false);
  const [TermsModalVisible, setTermsModalVisible] = useState(false);



  const openOtpBox = (meth: string) => {
    setInputEmailPageOpen(false)
    setOtpPageOpen(true);
    setMethod(meth)
  }

  const closeOtpBox = () => {
    setOtpPageOpen(false);
  }

  const openInputEmailBox = () => {
    setInputEmailPageOpen(true);
    setOtpPageOpen(false)
  }

  const closeInputEmailBox = () => {
    setInputEmailPageOpen(false);
  }

  const showAuthModal = () => {
    setAuthModalOpen(true);
  };

  const handleAuthCancel = () => {
    setref_code(' ')
    setAuthModalOpen(false)
    setInputEmailPageOpen(false)
    setOtpPageOpen(false)
    setPasswordBox(false)
    console.log(ref_code)
  };

  const contextValue: any = {
    setref_code,
    ref_code,
    setTermsModalVisible,
    TermsModalVisible,
    passwordBox,
    setPasswordBox,
    method,
    openOtpBox,
    closeOtpBox,
    openInputEmailBox,
    closeInputEmailBox,
    otpPageOpen,
    setOtpPageOpen,
    inputEmailPageOpen,
    userAuthenticated,
    setUserAuthenticated,
    authModalOpen, 
    setAuthModalOpen,
    showAuthModal,
    handleAuthCancel
  };

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
};

// Create a custom hook to use the context
export const Context = (): any => {
    const context = useContext(MyContext);
    if (!context) {
      throw new Error('useMyContext must be used within a MyContextProvider');
    }
    return context;
  };