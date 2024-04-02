/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Input, Button, Select, Upload, message, Spin } from 'antd';
import { useFormik } from 'formik';
import ItemCard from '../components/ItemCard';
import { useEffect, useState } from 'react';
import '../components/Navbar.css';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Context } from '../context/context.provider';
import BackgroundImg from '../assets/images/1215543_7.jpg'
import Navbar from '../components/Navbar';

interface OptionType {
    id: number;
    name: string;
    iso2: string;
}

const PostAdd: React.FC = () => {

    const { postId } = useParams();
    const [form] = Form.useForm();

    if(!postId){
        localStorage.removeItem('thebrokerhub-item')
    }

    const navigate = useNavigate();
    const { showAuthModal } = Context();

    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);
    const [stateList, setStateList] = useState<OptionType[]>([]);
    const [cities, setcities] = useState<OptionType[]>([]);

    const [imageURL, setImageURL] = useState<string>('');

    useEffect(() => {

        formik.resetForm({
            values: {
                monthly_rent: '0',
                image: null,
                title: '',
                description: '',
                contact: '',
                city: '',
                state: '',
                budget: '0',
                transaction_type: 'Sell',
                downpayment: '0',
                ratio_x: '0',
                ratio_y: '0',
                area: 0,
            },
        });
    }, []);

    const formik = useFormik({
        initialValues: {
            monthly_rent: '0',
            image: null,
            title: '',
            description: '',
            contact: '',
            city: '',
            state: '',
            budget: '0',
            transaction_type: 'Sell',
            downpayment: '0',
            ratio_x: '0',
            ratio_y: '0',
            area: 0,
        },

        onSubmit: async (values) => {
            setLoading(true);
            const token = localStorage.getItem('thebrokershub-access-token');

            if (!token) {
                showAuthModal()
                return
            }

            if (values.transaction_type == 'Conversion' && (parseInt(values.downpayment) <= 0 || parseInt(values.ratio_x) < 0 || parseInt(values.ratio_x) > 100)) {
                message.error("Please enter a valid conversion details.")
                return;
            }

            const formData = new FormData();

            if (values.image && Array.isArray(values.image)) {
                const imageFile = values.image[0];
                console.log(imageFile);
                formData.append('image', imageFile);
            }

            formData.append('title', values.title);
            formData.append('area', values.area.toString());
            formData.append('state', values.state);
            formData.append('city', values.city);
            formData.append('description', values.description);
            formData.append('contact', values.contact);
            formData.append('budget', values.budget);
            formData.append('transaction_type', values.transaction_type);
            formData.append('downpayment', values.downpayment);
            formData.append('ratio_x', values.ratio_x.toString());
            formData.append('ratio_y', values.ratio_y.toString());
            formData.append('monthly_rent', values.monthly_rent);

            let url = 'https://13.232.115.59/advertisements/';
            if (postId) {
                url = `https://13.232.115.59/my-advertisements/${postId}/`;
                axios.put(url, formData, {
                    headers: {
                        'Authorization': `Token ${token}`,
                        'Content-Type': 'multipart/form-data'
                        // Add other headers as needed
                    }
                })
                    .then(response => {
                        console.log('Response:', response.data); // Handle the response
                        message.success('You requirement has been updated!')
                        navigate('/profile/')

                        // Optionally, you can perform any actions after successful response
                    })
                    .catch(error => {
                        console.log(error)
                        if (error.response?.data) {
                            let errorMessage = error.response?.data
                            let firstKey = Object.keys(errorMessage)[0];
                            // let firstValue = errorMessage[firstKey];
                            message.error('Field ' + firstKey + ' is required.')
                        }
                        else {

                            let errorMessage = error.message;
                            message.error(errorMessage)
                        }
                        // Optionally, you can perform any actions after error
                    })
                    .finally(() => {
                        setLoading(false); // Set loading state to false after request completion
                    });
                return;

            }

            axios.post(url, formData, {
                headers: {
                    'Authorization': `Token ${token}`,
                    'Content-Type': 'multipart/form-data'
                    // Add other headers as needed
                }
            })
                .then(response => {
                    console.log('Response:', response.data); // Handle the response
                    message.success('You requirement has been posted!');
                    navigate('/addslisting/')
                    // Optionally, you can perform any actions after successful response
                })
                .catch(error => {
                    console.log(error)
                    if (error.response?.data) {
                        let errorMessage = error.response?.data
                        let firstKey = Object.keys(errorMessage)[0];
                        // let firstValue = errorMessage[firstKey];
                        message.error('Field ' + firstKey + ' is required.')
                    }
                    else {

                        let errorMessage = error.message;
                        message.error(errorMessage)
                    }
                    // Optionally, you can perform any actions after error
                })
                .finally(() => {
                    setLoading(false); // Set loading state to false after request completion
                });
            return;
        },
    });

    useEffect(() => {
        axios.get('https://api.countrystatecity.in/v1/countries/IN/states/', {
          headers: {
            'X-CSCAPI-KEY': `NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA==`,
            'Content-Type': 'application/json'
          }
        })
        .then((response) => {
          console.log(response.data)
            setStateList(response.data);
        })

        const localStorageItem = localStorage.getItem('thebrokerhub-item');

        if (localStorageItem !== null && postId) {
            setFormData(JSON.parse(localStorageItem));
            form.setFieldsValue(JSON.parse(localStorageItem))
            setImageURL(JSON.parse(localStorageItem).image);
            formik.setFieldValue('monthly_rent' , JSON.parse(localStorageItem).monthly_rent);
            formik.setFieldValue('title' , JSON.parse(localStorageItem).title);
            formik.setFieldValue('description' , JSON.parse(localStorageItem).description);
            formik.setFieldValue('contact' , JSON.parse(localStorageItem).contact);
            formik.setFieldValue('city' , JSON.parse(localStorageItem).city);
            formik.setFieldValue('state' , JSON.parse(localStorageItem).state );
            formik.setFieldValue('budget' , JSON.parse(localStorageItem).budget);
            formik.setFieldValue('transaction_type' , JSON.parse(localStorageItem).transaction_type);
            formik.setFieldValue('downpayment' , JSON.parse(localStorageItem).downpayment);
            formik.setFieldValue('ratio_x' , JSON.parse(localStorageItem).ratio_x);
            formik.setFieldValue('ratio_y' , JSON.parse(localStorageItem).ratio_y);
            formik.setFieldValue('area' , JSON.parse(localStorageItem).area);
            formik.setFieldValue('places' , JSON.parse(localStorageItem).places);
        }
    }, [])

    useEffect(() => {
        axios.get(`https://api.countrystatecity.in/v1/countries/IN/states/${stateList.find(st => st.name === formik.values.state)?.iso2}/cities`, {
          headers: {
            'X-CSCAPI-KEY': `NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA==`,
            'Content-Type': 'application/json'
          }
        })
        .then((response) => {
            console.log(response.data)
            setcities(response.data);
        })
    }, [formik.values.state])

    const imageUploadProps = {
        beforeUpload: (_file: File) => {
            const reader = new FileReader();
            reader.onload = (event) => {
                const dataUrl = event.target?.result as string;
                setImageURL(dataUrl);
                console.log(dataUrl)
                formik.setFieldValue('image', [_file]);
            };
            reader.readAsDataURL(_file);
            return false;
        },
    };

    const normFile = (e: any) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
        message.error("Please fill all the fields")
    };

    const filterOption = (input: string, option?: { label: string; value: string }) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

    return (
        <>
            <Navbar />
            <div className='d-flex justify-content-center' style={{backgroundImage: `url(${BackgroundImg})`, backgroundSize:'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                <div className='w-full flex justify-center bg-[black]/50'>
                    <div className='bg-white/80 w-full sm:w-3/4 border rounded-4 mt-5 mb-4 shadow flex justify-between items-center overflow-hidden'>
                        <Form
                            form={form}
                            initialValues={formData}
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 14 }}
                            layout='horizontal'
                            onFinish={formik.handleSubmit}
                            onFinishFailed={onFinishFailed}
                            className='p-5 pe-4 w-full lg:w-3/5 space-y-7 sm:space-y-9'
                        >
                            <div className='sm:text-4xl text-2xl font-medium text-[#002766] mb-3'>Advertisement Details</div>

                            <Form.Item
                                label='Image'
                                name='mage'
                                valuePropName='fileList'
                                getValueFromEvent={normFile}
                                rules={[{ required: true, message: 'Please upload an image!' }]}
                            >
                                <Upload  name='image' {...imageUploadProps}>
                                    <Button className='bg-[white]' icon={<UploadOutlined />}>Upload</Button>
                                </Upload>
                            </Form.Item>

                            <Form.Item
                                name="title"
                                label='Title'
                                rules={[
                                    { required: true, message: 'Please enter the title.' }
                                ]}
                            >
                                <Input
                                    placeholder='Title'
                                    value={formik.values.title}
                                    onChange={(e) => {
                                        formik.setFieldValue('title', e.target.value);
                                    }}
                                />
                            </Form.Item>

                            <Form.Item
                                name='contact'
                                label='Contact'
                                rules={[
                                    { required: true, message: 'Please input your phone number!' },
                                    { pattern: /^\d{10}$/, message: 'Phone number must be 10 digits!' },
                                ]}
                            >
                                <Input
                                    onChange={(e) => {
                                        formik.setFieldValue('contact', e.target.value);
                                    }}
                                    value={formik.values.contact}
                                />
                            </Form.Item>

                            <Form.Item
                                name='state'
                                label='State'
                                rules={[
                                    { required: true, message: 'Please select a state.' }
                                ]}
                            >
                                <Select
                                    showSearch
                                    placeholder="Select a state"
                                    optionFilterProp="children"
                                    value={formik.values.state}
                                    onChange={(value) => {
                                        formik.setFieldValue('state',stateList.find(st => st.iso2 === value)?.name );
                                        formik.setFieldValue('city', '');
                                    }}
                                    filterOption={filterOption}
                                    options={stateList.map(city => {
                                        return {
                                            value: city.iso2,
                                            label: city.name
                                        };
                                    })}
                                />
                            </Form.Item>

                            {
                                formik.values.state &&
                                <Form.Item
                                    name='city'
                                    label='City'
                                    rules={[
                                        { required: true, message: 'Please select a city.' }
                                    ]}
                                >
                                    <Select
                                        showSearch
                                        placeholder="Select a city"
                                        optionFilterProp="children"
                                        value={formik.values.city}
                                        onChange={(value) => {
                                            formik.setFieldValue('city', value);
                                        }}
                                        filterOption={filterOption}
                                        // options={cities}
                                        options={cities
                                            .map(city => ({
                                                value: city.name,
                                                label: city.name
                                            }))
                                        }
                                    />
                                </Form.Item>
                            }

                            <Form.Item
                                name='description'
                                label='Description'
                                rules={[{ required: true, message: 'Please enter the description!' }]}
                            >
                                <Input.TextArea
                                    placeholder="Describe your requirement"
                                    onChange={(e) => {
                                        formik.setFieldValue('description', e.target.value);
                                    }}
                                    value={formik.values.description}
                                    style={{
                                        height: "120px"
                                    }}
                                />
                            </Form.Item>

                            <Form.Item
                                name='area'
                                label='Area (In sqft)'
                                rules={[{ required: true, message: 'Please enter the requirement area!' }, { pattern: /^\d*\.?\d+$/, message: 'Please enter a valid area' }]}
                            >
                                <Input
                                    value={formik.values.area}
                                    placeholder='In sqft'
                                    onChange={(e) => {
                                        if (!Number.isNaN(parseInt(e.target.value))) {
                                            formik.setFieldValue('area', parseInt(e.target.value));
                                        }
                                    }}
                                />
                            </Form.Item>

                            <Form.Item
                                name='transaction_type'
                                label='Transaction Type'
                            >
                                <Select
                                    style={{ width: 120 }}
                                    value={formik.values.transaction_type}
                                    onChange={(value) => {
                                        formik.setFieldValue('transaction_type', value);
                                    }}
                                    options={[
                                        { value: 'Sell', label: 'Sell' },
                                        { value: 'Conversion', label: 'Conversion' },
                                        { value: 'Rent', label: 'Rent' },
                                    ]}
                                />
                            </Form.Item>

                            {
                                formik.values.transaction_type == 'Sell' &&
                                <Form.Item
                                    name='budget'
                                    label='Price (₹)'
                                    rules={[{ required: true, message: 'Please enter the price!' }, { pattern: /^\d*\.?\d+$/, message: 'Please enter a valid price' }]}
                                >
                                    <Input
                                        onChange={(e) => {
                                            if (!Number.isNaN(parseInt(e.target.value))) {
                                                formik.setFieldValue('budget', parseInt(e.target.value));
                                            }
                                        }}
                                        value={formik.values.budget}
                                    />
                                </Form.Item>
                            }
                            {
                                formik.values.transaction_type == 'Conversion' &&
                                <Form.Item
                                    name='downpayment'
                                    label='Down Payment (₹)'
                                    rules={[{ required: true, message: 'Please enter the down payment!' }, { pattern: /^\d*\.?\d+$/, message: 'Please enter a valid price' }]}
                                >
                                    <Input
                                        onChange={(e) => {
                                            if (!Number.isNaN(parseInt(e.target.value))) {
                                                formik.setFieldValue('downpayment', parseInt(e.target.value));
                                            }
                                        }}
                                        value={formik.values.downpayment}
                                    />
                                </Form.Item>
                            }
                            {
                                formik.values.transaction_type == 'Conversion' &&
                                <Form.Item
                                    name='Ratio'
                                    label='Ratio'
                                >
                                    <Input
                                        className='me-2 w-20'
                                        min={0}
                                        max={100}
                                        onChange={(e: any) => {
                                            if (!Number.isNaN(parseInt(e.target.value))) {
                                                formik.setFieldValue('ratio_x', e.target.value);
                                                formik.setFieldValue('ratio_y', (100 - parseInt(e.target.value)).toString());
                                            }
                                        }}
                                        value={parseInt(formik.values.ratio_x)}
                                    /> :
                                    <Input
                                        className='ms-2 w-20 bg-[white]'
                                        min={0}
                                        max={100}
                                        onChange={(value) => {
                                            console.log(value);
                                            formik.setFieldValue('ratio_y', value?.toString());
                                        }}
                                        value={100 - parseInt(formik.values.ratio_x)}
                                    />
                                </Form.Item>
                            }
                            {
                                formik.values.transaction_type == 'Rent' &&
                                <Form.Item
                                    label='Monthly Rent (₹)'
                                    name='monthly_rent'
                                    rules={[{ required: true, message: 'Please enter the monthly rent!' }, { pattern: /^\d*\.?\d+$/, message: 'Please enter a valid price' }]}
                                >
                                    <Input
                                        onChange={(e) => {
                                            if (!Number.isNaN(parseInt(e.target.value))) {
                                                formik.setFieldValue('monthly_rent', parseInt(e.target.value));
                                            }
                                        }}
                                        value={formik.values.monthly_rent}
                                    />
                                </Form.Item>
                            }

                            <Spin spinning={loading}>
                                {/* Content to show when loading */}
                                <Button
                                    type='primary'
                                    className='bg-[#1890FF] w-full font-semibold'
                                    htmlType='submit'
                                >
                                    Submit
                                </Button>
                            </Spin>

                        </Form>
                        <div className='lg:flex hidden h-full w-auto justify-center items-center bg-[#001529]'>
                            <div className='addCardShower'>
                                <ItemCard
                                    page='home'
                                    item={
                                        {
                                            id: 0,
                                            monthly_rent: formik.values.monthly_rent,
                                            contact: formik.values.contact,
                                            downpayment: formik.values.downpayment,
                                            ratio_y: formik.values.ratio_x,
                                            image: imageURL,
                                            title: formik.values.title,
                                            description: formik.values.description,
                                            budget: formik.values.budget,
                                            transaction_type: formik.values.transaction_type,
                                            city: formik.values.city,
                                            state: formik.values.state,
                                            ratio_x: formik.values.ratio_x,
                                            area: formik.values.area,
                                            places: '',
                                        }
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PostAdd;
