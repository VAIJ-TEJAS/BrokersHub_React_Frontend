/* eslint-disable @typescript-eslint/no-explicit-any */
import { message, Form, Tabs, Input, Button, Select, Alert, Checkbox, Spin } from 'antd';
import { UserOutlined, UserAddOutlined, LockOutlined, EyeOutlined, MailOutlined, PhoneOutlined, EyeInvisibleOutlined, EyeTwoTone, ArrowLeftOutlined } from '@ant-design/icons';
import { useEffect, useState  } from 'react';
import axios from "axios"
import { Context } from '../context/context.provider';
import logo from '../assets/logos/android-chrome-192x192.png'

const { TabPane } = Tabs;


interface OptionType {
    id: number;
    name: string;
    iso2: string;
}

interface mainProp {
    defaultTab?: string | null;
}

interface AuthenticationProps {
    defaultTab?: string | null;
    handleLogin: (email: string, password:string) => void;
    openInputEmailBox: () => void;
}

interface OtpProps {
    defaultTab?: string | null;
    handleLogin: (email: string, password:string) => void;
    closeOtpBox: () => void;
    method: string;
    email: string;
}

interface RegisterenticationProps {
    defaultTab?: string | null;
    sendOtp: (email: string, method: string) => void;
}

interface InputEmailProps {
    defaultTab?: string | null;
    closeInputEmailBox: () => void;
    sendOtp: (email: string, method: string) => void;
}

interface InputPassProps {
    defaultTab?: string | null;
    otp: string;
    closeSetPassBox: () => void;
    closeOtpBox: () => void;
}

const Login: React.FC<AuthenticationProps> = ({handleLogin, openInputEmailBox}) => {

    const [error, setError] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const onFinish = (values: any) => {
        setLoading(true);
        console.log('Received values:', values);
        handleLogin(username, password)
        setLoading(false);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
        message.error('Registration failed!');
    };

    return (
        <div className='space-y-6 w-[300px]'>

            {error !== '' && (
                <Alert message={error} type="error" showIcon closable onClose={() => setError('')} />
            )}

            <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    name="email"
                    rules={[
                        { required: true, message: 'Please input your email!' },
                        { type: 'email', message: 'Please enter a valid email address!' },
                    ]}
                >
                    <Input
                        className='text-center rounded-none'
                        placeholder="Email"
                        prefix={<UserOutlined className="site-form-item-icon" style={{ color: '#1890FF' }} />}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Item>

                <Form.Item
                    name="Password"
                    rules={[
                        { required: true, message: 'Please input your password!' },
                        { min: 6, message: 'Password must be at least 6 characters!' },
                    ]}
                >
                    <Input.Password
                        className='text-center rounded-none'
                        placeholder="Password"
                        prefix={<LockOutlined className="site-form-item-icon" style={{ color: '#1890FF' }} />}
                        suffix={<EyeOutlined style={{ color: '#1890FF' }} />}
                        style={{ textAlign: 'center' }}
                        type="password"
                        value={password}
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Item>

                <div className='flex justify-between w-full'>
                    <Form.Item>
                        <Spin spinning={loading}>
                            <Button type='primary' className="bg-[#1890FF] primary-6 text-white px-6 rounded" htmlType="submit">
                                Sign in
                            </Button>
                        </Spin>
                    </Form.Item>
                    <Form.Item>
                        <Button type="link" onClick={openInputEmailBox} block>
                            Forgot Password?
                        </Button>
                    </Form.Item>
                </div>
            </Form>
        </div>
    );
};

const OtpVerification:React.FC<OtpProps> = ({closeOtpBox, handleLogin, method, email}) => {
    const { setPasswordBox, passwordBox} = Context();
    const [otp, setOtp] = useState('');
  
    const handleOtpChange = (e: any) => {
      setOtp(e.target.value);
    };
  
    const handleVerifyOtp = () => {
        const storedData = localStorage.getItem('share-coupon-user');
        const userData = storedData ? JSON.parse(storedData) : null;
        const data = {
            user_data: {
                username: userData.username,
                password: userData.password,
                first_name: userData.first_name,
                last_name: userData.last_name,
                email: userData.email,
                phone: userData.phone,
                state: userData.state,
                city: userData.city,
                other_referral_code: userData.referral_code
            },
            otp: otp,
            email: userData.email,
        }
        console.log(data);

        // Perform verification logic here
        const url = 'https://13.232.115.59/verify-otp/';
        const headers = {
            'Content-Type': 'application/json',
        };

        // Make the POST request with Axios
        axios.post(url, data, {
            headers: headers,
        })
            .then(response => {
                // Handle the response data
                console.log('Response:', response.data);
                localStorage.setItem('thebrokershub-access-token', response.data.token)
                message.success("Registration successful")
                handleLogin(userData.email, userData.password)
                closeOtpBox()
            })
            .catch(error => {
                if (error.response.data.error) {
                    message.error(error.response.data.error);
                    return
                }
                message.error(error.response.data.error === undefined ? "Some error occoured" : "Invalid or expired OTP." )
                console.error('Error found as:', error);
            });
    };

    const closeSetPassBox = () => {
        setPasswordBox(false);
    }
  
    return (
        <div className='w-full'>
            {   passwordBox ?
                <InputNewPass closeSetPassBox={closeSetPassBox} closeOtpBox={closeOtpBox} otp={otp} />:
                <div className="container mx-auto mt-8">
                    <div className="flex justify-between items-center mb-4">
                        <Button className='absolute' type="text" icon={<ArrowLeftOutlined />} onClick={() => closeOtpBox()} />
                        <div className="w-full text-center text-3xl font-semibold flex justify-center items-center">
                            <img src={logo} className='h-16 rounded-full me-2' alt="" />
                            <span>The Brokers Hub</span>
                        </div>
                    </div>
                    <Form layout="vertical" className='flex justify-center flex-col'>
                        <Form.Item label={<div>Enter OTP sent on mail <strong>{email}</strong></div>}>
                            <Input value={otp} onChange={handleOtpChange} />
                        </Form.Item>
                        <Form.Item className='flex justify-center'>
                            {method === 'register' ? 
                                <Button type="primary" onClick={handleVerifyOtp}>
                                    Verify OTP
                                </Button>:
                                <Button type="primary" onClick={() => {setPasswordBox(true)}}>
                                    Verify OTP
                                </Button>
                            }
                        </Form.Item>
                    </Form>
                </div>
            }
        </div>
    );
};

const InputEmail:React.FC<InputEmailProps> = ({closeInputEmailBox, sendOtp }) => {

    const [username, setUsername] = useState('');

    const onFinish = (values: any) => {
      console.log('Received values:', values);
      localStorage.setItem('theBrokerHub-username', username);
      sendOtp(username, 'forgot')
    };

    const onFinishFailed = (_errorInfo: any) => {
        message.error('Registration failed!');
    };
  
    return (
        <div className='w-full'>
                <div className='w-full'>
                    <div className="flex justify-between items-center my-5">
                        <Button className='absolute' type="text" icon={<ArrowLeftOutlined />} onClick={() => closeInputEmailBox()} />
                        <div className="w-full text-center text-3xl font-semibold flex justify-center items-center">
                            <img src={logo} className='h-16 rounded-full me-2' alt="" />
                            <span>The Brokers Hub</span> 
                        </div>
                    </div>
                    <div className='text-center font-semibold text-2xl my-3'>Enter your email</div>
                    <Form
                        className='w-full px-4 '
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            name="email"
                            className='w-full'
                            rules={[
                                { required: true, message: 'Please input your email!' },
                                { type: 'email', message: 'Please enter a valid email address!' },
                            ]}
                        >
                            <Input
                                className='text-center rounded-none'
                                placeholder="Email"
                                prefix={<UserOutlined className="site-form-item-icon" style={{ color: '#1890FF' }} />}
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Form.Item>

                        <Form.Item className='flex justify-center '>
                            <Button type='primary' className="bg-[#1890FF] primary-6 text-white px-6 rounded" htmlType="submit">
                                Verify email
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
        </div>
    );
}

const InputNewPass:React.FC<InputPassProps> = ({otp, closeSetPassBox, closeOtpBox}) => {

    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const onFinish = (values: any) => {
        console.log('Received values:', values);
        const data = {
            otp: otp,
            email: localStorage.getItem('theBrokerHub-username'),
            new_password: newPassword,
        }

        // Perform verification logic here
        const url = 'https://13.232.115.59/reset-password/';
        const headers = {
            'Content-Type': 'application/json',
        };

        // Make the POST request with Axios
        axios.post(url, data, {
            headers: headers,
        })
         .then(response => {
                // Handle the response data
                console.log('Response:', response.data);
                message.success("Password reset successful")
                localStorage.removeItem('theBrokerHub-username')
                closeSetPassBox()
                closeOtpBox()
            })
         .catch(error => {
                message.error(error.response.data.error === undefined? "Some error occoured" : error.response.data.error )
                console.error('Error found as:', error);
            });
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
        message.error('Password change failed!');
    };
  
    return (
        <div className='w-full'>
            <div className="flex justify-between items-center my-5">
                <Button className='absolute' type="text" icon={<ArrowLeftOutlined />} onClick={closeSetPassBox} />
                <div className="w-full text-center text-3xl font-semibold flex justify-center items-center">
                    <img src={logo} className='h-16 rounded-full me-2 ' alt="" />
                    <span>The Brokers Hub</span>
                </div>
            </div>
            <div className='text-center font-semibold text-2xl my-3'>Enter your new Password</div>
            <Form
                className='w-full px-4 '
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    name="Password"
                    rules={[
                        { required: true, message: 'Please input your password!' },
                        { min: 6, message: 'Password must be at least 6 characters!' },
                    ]}
                >
                    <Input.Password
                        className='text-center rounded-none'
                        placeholder="New Password"
                        prefix={<LockOutlined className="site-form-item-icon" style={{ color: '#1890FF' }} />}
                        style={{ textAlign: 'center' }}
                        type="password"
                        value={newPassword}
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </Form.Item>

                <Form.Item
                    name="CPassword"
                    rules={[
                        { required: true, message: 'Please confirm your password!' },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (!value || getFieldValue('Password') === value) {
                              return Promise.resolve();
                            }
                            return Promise.reject(new Error('The passwords do not match!'));
                          },
                        }),
                    ]}
                >
                    <Input.Password
                        className='text-center rounded-none'
                        placeholder="Confirm Password"
                        prefix={<LockOutlined className="site-form-item-icon" style={{ color: '#1890FF' }} />}
                        style={{ textAlign: 'center' }}
                        type="password"
                        value={confirmPassword}
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </Form.Item>

                <Form.Item className='flex justify-center '>
                    <Button type='primary' className="bg-[#1890FF] primary-6 text-white px-6 rounded" htmlType="submit">
                        Change Password
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

const Register: React.FC<RegisterenticationProps> = ({ sendOtp }) => {

    const {ref_code, setTermsModalVisible} = Context();


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');
    const [referralCode, setReferralCode] = useState(ref_code);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [stateList, setStateList] = useState<OptionType[]>([]);
    const [cities, setcities] = useState<OptionType[]>([]);

    useEffect(() => {
        axios.get('https://api.countrystatecity.in/v1/countries/IN/states/', {
          headers: {
            'X-CSCAPI-KEY': `NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA==`,
            'Content-Type': 'application/json'
          }
        })
        .then((response) => {
            setStateList(response.data);
        })
        .catch((_err: any) => {
            console.log("error in city")
            console.log(_err)
        })
    }, []);

    useEffect(() => {
        axios.get(`https://api.countrystatecity.in/v1/countries/IN/states/${state}/cities`, {
          headers: {
            'X-CSCAPI-KEY': `NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA==`,
            'Content-Type': 'application/json'
          }
        })
        .then((response) => {
            setcities(response.data);
        })
    }, [state])

    const onFinish = (values: any) => {
        console.log('Received values:', values);

        const data = {
            username: email,
            password: newPassword,
            first_name: firstName,
            last_name: lastName,
            phone: phone,
            other_referral_code: referralCode,
            email: email,
            state: state,
            city: city,
        };
        localStorage.setItem('share-coupon-user', JSON.stringify(data))
        sendOtp(email, 'register')
    };

    const onFinishFailed = (_errorInfo: any) => {
        message.error('Registration failed!');
    };

    const filterOption = (input: string, option?: { label: string; value: string }) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

    return (
        <div className='space-y-6 w-[300px]'>

            <Form
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >

                <div className='flex space-x-6'>
                    <Form.Item
                        name="first"
                        rules={[
                            { required: true, message: 'Please input your first name!' },
                        ]}
                    >
                        <Input
                            className='text-center rounded-none'
                            placeholder="First Name"
                            prefix={<UserOutlined className="site-form-item-icon" style={{ color: '#1890FF' }} />}
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item
                        name="last"
                        rules={[
                            { required: true, message: 'Please input your last name!' },
                        ]}
                    >
                        <Input
                            className='text-center rounded-none'
                            placeholder="Last Name"
                            prefix={<UserOutlined className="site-form-item-icon" style={{ color: '#1890FF' }} />}
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </Form.Item>
                </div>

                <Form.Item 
                    name="state"
                    rules={[
                        { required: true, message: 'Please input your state!' },
                    ]}
                >
                    <Select
                        className='w-full'
                        showSearch
                        placeholder="Select a State"
                        optionFilterProp="children"
                        onChange={(value) => {setState(value); setCity('')}}
                        filterOption={filterOption}
                        options={stateList.map(city => {
                            return {
                                value: city.iso2,
                                label: city.name
                            };
                        })}
                    />
                </Form.Item>

                {state !== '' &&
                    <Form.Item 
                        name="city"
                        rules={[
                            { required: true, message: 'Please input your city!' },
                        ]}
                    >
                        <Select
                            className='w-100'
                            showSearch
                            placeholder="Select a City"
                            optionFilterProp="children"
                            onChange={(value) => setCity(value)}
                            filterOption={filterOption}
                            options={
                                cities.map(city => ({
                                    value: city.name,
                                    label: city.name
                                }))
                            }
                        />
                    </Form.Item>
                }

                <Form.Item
                    name="phone"
                    rules={[
                        { required: true, message: 'Please input your phone number!' },
                        { pattern: /^\d{10}$/, message: 'Phone number must be 10 digits!' },
                    ]}
                >
                    <Input
                        className='text-center rounded-none'
                        placeholder="Phone"
                        prefix={<PhoneOutlined className="site-form-item-icon" style={{ color: '#1890FF' }} />}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </Form.Item>

                <Form.Item
                    name="email"
                    rules={[
                        { required: true, message: 'Please input your email!' },
                        { type: 'email', message: 'Please enter a valid email address!' },
                    ]}
                >
                    <Input
                        className='text-center rounded-none'
                        placeholder="Email"
                        prefix={<MailOutlined className="site-form-item-icon" style={{ color: '#1890FF' }} />}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Item>

                <Form.Item
                    name="Referral"
                    rules={[
                        { pattern: /^[a-zA-Z0-9]+$/, message: 'Referral code must contain only letters and digits!' },
                    ]}
                >
                    <Input
                        defaultValue={referralCode} 
                        className='text-center rounded-none'
                        placeholder="Referral Code"
                        prefix={<UserOutlined className="site-form-item-icon" style={{ color: '#1890FF' }} />}
                        value={referralCode}
                        onChange={(e) => setReferralCode(e.target.value)}
                    />
                </Form.Item>

                <Form.Item
                    name="Password"
                    rules={[
                        { required: true, message: 'Please input your password!' },
                        { min: 6, message: 'Password must be at least 6 characters!' },
                    ]}
                >
                    <Input.Password
                        className='text-center rounded-none'
                        placeholder="Password"
                        prefix={<LockOutlined className="site-form-item-icon" style={{ color: '#1890FF' }} />}
                        style={{ textAlign: 'center' }}
                        type="password"
                        value={newPassword}
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </Form.Item>

                <Form.Item
                    name="CPassword"
                    rules={[
                        { required: true, message: 'Please confirm your password!' },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (!value || getFieldValue('Password') === value) {
                              return Promise.resolve();
                            }
                            return Promise.reject(new Error('The passwords do not match!'));
                          },
                        }),
                    ]}
                >
                    <Input.Password
                        className='text-center rounded-none'
                        placeholder="Confirm Password"
                        prefix={<LockOutlined className="site-form-item-icon" style={{ color: '#1890FF' }} />}
                        style={{ textAlign: 'center' }}
                        type="password"
                        value={confirmPassword}
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </Form.Item>

                <Form.Item
                    name="termsAndConditions"
                    valuePropName="checked"
                    rules={[
                    { validator: (_, value) => value ? Promise.resolve() : Promise.reject('Please agree to the terms and conditions') }
                    ]}
                >
                    <Checkbox>
                    I agree to the <span className="text-blue-500 cursor-pointer" onClick={() => {setTermsModalVisible(true)}}>Terms and Conditions</span>
                    </Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button type='primary' className="bg-[#1890FF] primary-6 text-white px-6 rounded" htmlType="submit">
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

const Autentication: React.FC<mainProp> = () => {

    const { setActiveAuthTab, setUserAuthenticated, handleAuthCancel, otpPageOpen, method, inputEmailPageOpen, openOtpBox, closeOtpBox, closeInputEmailBox, openInputEmailBox } = Context();
    const [Email, setEmail] = useState<string>('');
    const {ref_code, activeTab} = Context();

    const setTheEmail = (email: string) => {
        setEmail(email);
    }

    const sendOtp = async (email: string, method: string) => {
        
        let url = 'https://13.232.115.59/generate-otp-reset-password/';
        if (method === 'register') {
            url = 'https://13.232.115.59/generate-otp-register/';
        }
        const headers = {
            'Content-Type': 'application/json',
        };

        // Define the JSON body data
        

        // Make the POST request with Axios
        axios.post(url, {email: email}, {
            headers: headers,
        })
            .then(_response => {
                // Handle the response data
                message.success("Otp Sent")
                setTheEmail(email)
                if (method === 'register') {
                    openOtpBox('register');
                } else {
                    openOtpBox('forgotPass')
                }
            })
            .catch(error => {
                if (error.response.status === 404) {
                    message.error(error.response.data.error)
                }
                else if (error.response.status === 400) {
                    message.error(error.response.data.error)
                }
                else{
                    message.error("Some error occurred")
                }
            });
    };

    const handleLogin = async (email: string, password: string) => {
        const url = 'https://13.232.115.59/auth/';
        const headers = {
            'Content-Type': 'application/json',
        };

        // Define the JSON body data
        const data = {
            username: email,
            password: password,
        };

        // Make the POST request with Axios
        axios.post(url, data, {
            headers: headers,
        })
            .then(response => {
                // Handle the response data
                // console.log('Response:', response.data);
                localStorage.setItem('thebrokershub-access-token', response.data.token)
                console.log(response.data.user)
                localStorage.setItem('share-coupon-user', JSON.stringify(response.data.user))
                message.success('login successfull!');
                setUserAuthenticated(true)
                handleAuthCancel();
            })
            .catch(_error => {
                message.error("Error logging in")
            });
    };

    const handleTabChange = (key: string) => {
        setActiveAuthTab(key);
    };

    return (
        <div className='w-full flex flex-col justify-center items-center'>
            {otpPageOpen ?
                <OtpVerification email={Email} method={method} handleLogin={handleLogin} closeOtpBox={closeOtpBox} />:
                inputEmailPageOpen ?
                    <InputEmail sendOtp={sendOtp} closeInputEmailBox={closeInputEmailBox} />:
                    <>
                        <div className='font-semibold text-3xl mt-5 flex items-center'>
                            <img src={logo} className='h-16 rounded-full me-2' alt="" />
                            <span>The Brokers Hub</span>
                        </div>
                        <div className='m-5'>
                            <Tabs
                                defaultActiveKey={ref_code === '' ? activeTab : '2'}
                                tabPosition="top"
                                onChange={handleTabChange}
                                activeKey={activeTab}
                                centered
                                >
                                <TabPane
                                    tab={
                                        <span>
                                            <UserOutlined /> Login
                                        </span>
                                    }
                                    key="1"
                                >
                                    <Login openInputEmailBox={openInputEmailBox} handleLogin={handleLogin} />
                                </TabPane>
                                <TabPane
                                    tab={
                                        <span>
                                            <UserAddOutlined /> Register
                                        </span>
                                    }
                                    key="2"
                                >
                                    <Register sendOtp={sendOtp} />
                                </TabPane>
                            </Tabs>
                        </div>
                    </>
                
            }
            
        </div>
    )
}

export default Autentication;