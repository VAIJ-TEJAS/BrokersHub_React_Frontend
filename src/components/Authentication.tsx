/* eslint-disable @typescript-eslint/no-explicit-any */
import { Tabs, Input, Button } from 'antd';
import { UserOutlined, UserAddOutlined, LockOutlined, EyeOutlined, MailOutlined } from '@ant-design/icons';
import { useState } from 'react';
// import axios from "../api/axios"
// import { Context } from '../context/context.provider';

const { TabPane } = Tabs;

interface AuthenticationProps {
    defaultTab?: string | null;
  }

const Login: React.FC = () => {

    // const { setUserAuthenticated, setAuthModalOpen } = Context();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        // try {
        //     const response = await axios.post('/users/signin', { username, password });
        //     console.log(response.data);
        //     localStorage.setItem('auction-user-token', response.data.user._id);
        //     localStorage.setItem('auction-user-name', response.data.user.name);
        //     message.success('Sign in successful');
        //     setUserAuthenticated(true)
        //     setAuthModalOpen(false)
            
        // } catch (error: any) {
        //     console.error(error.response.data);
        //     message.error('Invalid credentials');
        // }
    };

    return (
        <div className='space-y-6 w-[300px]'>
            <div>
                <Input
                    className='text-center rounded-none'
                    placeholder="Username"
                    prefix={<UserOutlined className="site-form-item-icon" style={{ color: '#1890FF' }} />}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <Input
                    className='text-center rounded-none'
                    placeholder="Password"
                    prefix={<LockOutlined className="site-form-item-icon" style={{ color: '#1890FF' }} />}
                    suffix={<EyeOutlined style={{ color: '#1890FF' }} />}
                    style={{ textAlign: 'center' }}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            {/* <div className='flex justify-between items-center'>
                <div>
                    <Checkbox>Remember me</Checkbox>
                </div>
                <div className='text-sky-600'>Forgot password?</div>
            </div> */}
            <div>
                <Button className="bg-[#1890FF] primary-6 text-white px-6 rounded-sm" onClick={handleLogin}>
                    Sign in
                </Button>
            </div>
        </div>
    );
};

const Register: React.FC = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [newUsername, setNewUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = async () => {
        // try {
        //     const response = await axios.post('/users/signup', {
        //         username: newUsername,
        //         password: newPassword,
        //         name: `${firstName} ${lastName}`,
        //         email_id: email,
        //     });
        //     console.log(response.data);
        //     message.success('Registration successful');
        //     // Add any additional logic you need after successful registration
        // } catch (error: any) {
        //     console.error(error.response.data);
        //     message.error('Registration failed');
        // }
    };

    return (
        <div className='space-y-6 w-[300px]'>
            <div className='flex space-x-6'>
                <div>
                    <Input
                        className='text-center rounded-none'
                        placeholder="First Name"
                        prefix={<UserOutlined className="site-form-item-icon" style={{ color: '#1890FF' }} />}
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div>
                    <Input
                        className='text-center rounded-none'
                        placeholder="Last Name"
                        prefix={<UserOutlined className="site-form-item-icon" style={{ color: '#1890FF' }} />}
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
            </div>
            <div>
                <Input
                    className='text-center rounded-none'
                    placeholder="Email"
                    prefix={<MailOutlined className="site-form-item-icon" style={{ color: '#1890FF' }} />}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <Input
                    className='text-center rounded-none'
                    placeholder="Username"
                    prefix={<UserOutlined className="site-form-item-icon" style={{ color: '#1890FF' }} />}
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                />
            </div>
            <div>
                <Input
                    className='text-center rounded-none'
                    placeholder="Password"
                    prefix={<LockOutlined className="site-form-item-icon" style={{ color: '#1890FF' }} />}
                    style={{ textAlign: 'center' }}
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
            </div>
            <div>
                <Input
                    className='text-center rounded-none'
                    placeholder="Confirm Password"
                    prefix={<LockOutlined className="site-form-item-icon" style={{ color: '#1890FF' }} />}
                    style={{ textAlign: 'center' }}
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>
            <div>
                <Button className="bg-[#1890FF] primary-6 text-white px-6 rounded-sm" onClick={handleRegister}>
                    Register
                </Button>
            </div>
        </div>
    )
}

const Autentication: React.FC<AuthenticationProps> = () => {

    const [activeTab, setActiveTab] = useState<string>('1');

    const handleTabChange = (key: string) => {
        // Do something based on the selected tab key
        console.log(`Tab changed to: ${key}`);
        setActiveTab(key);
        console.log(activeTab);
    };

    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <div className='font-semibold text-3xl mt-5'>
                AUCTION
            </div>
            <div className='m-5'>
                <Tabs
                    defaultActiveKey="1"
                    tabPosition="top"
                    onChange={handleTabChange}
                >
                    <TabPane
                        tab={
                            <span>
                                <UserOutlined /> Login
                            </span>
                        }
                        key="1"
                    />
                    <TabPane
                        tab={
                            <span>
                                <UserAddOutlined /> Register
                            </span>
                        }
                        key="2"
                    />
                </Tabs>
            </div>
            <div className='mb-10'>
                {activeTab === '1' ?
                    <Login /> :
                    <Register />
                }
            </div>
        </div>
    )
}

export default Autentication;