/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Input, InputNumber, Button, Select, Upload, Slider } from 'antd';
import { useFormik } from 'formik';
import ItemCard from '../components/ItemCard';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import '../components/Navbar.css';
import { UploadOutlined } from '@ant-design/icons';


const cities = [
    {
        value: '57802',
        label: "Bagra"
    },
    {
        value: '57878',
        label: "Barki Saria"
    },
    {
        value: '57880',
        label: "Barka Kana"
    },
    {
        value: '57889',
        label: "Barwadih"
    },
    {
        value: '57992',
        label: "Bhojudih"
    },
    {
        value: '58076',
        label: "Bokaro"
    },
    {
        value: '58163',
        label: "Bundu"
    },
    {
        value: '58175',
        label: "Chakradharpur"
    },
    {
        value: '131511',
        label: "Chatra"
    },
    {
        value: '131570',
        label: "Chiria"
    },
    {
        value: '131591',
        label: "Chakulia"
    },
    {
        value: '131598',
        label: "Chandil"
    },
    {
        value: '131606',
        label: "Chas"
    },
    {
        value: '131608',
        label: "Chaibasa"
    },
    {
        value: '131648',
        label: "Daltonganj"
    },
    {
        value: '131684',
        label: "Deogarh"
    },
    {
        value: '131715',
        label: "Dhanbad"
    },
    {
        value: '131718',
        label: "Dhanwar"
    },
    {
        value: '131794',
        label: "Dugda"
    },
    {
        value: '131797',
        label: "Dumka"
    },
    {
        value: '131922',
        label: "Garhwa"
    },
    {
        value: '131952',
        label: "Ghatsila"
    },
    {
        value: '131959',
        label: "Giridih"
    },
    {
        value: '131962',
        label: "Gobindpur"
    },
    {
        value: '131963',
        label: "Godda"
    },
    {
        value: '131980',
        label: "Gomoh"
    },
    {
        value: '131986',
        label: "Gopinathpur"
    },
    {
        value: '132006',
        label: "Gua"
    },
    {
        value: '132020',
        label: "Gumia"
    },
    {
        value: '132021',
        label: "Gumla"
    },
    {
        value: '132091',
        label: "Hazaribagh"
    },
    {
        value: '132092',
        label: "Hazaribag"
    },
    {
        value: '132094',
        label: "Hesla"
    },
    {
        value: '132131',
        label: "Husainabad"
    },
    {
        value: '132183',
        label: "Jagannathpur"
    },
    {
        value: '132231',
        label: "Jamshedpur"
    },
    {
        value: '132232',
        label: "Jamtara"
    },
    {
        value: '132246',
        label: "Jasidih"
    },
    {
        value: '132268',
        label: "Jharia"
    },
    {
        value: '132299',
        label: "Jugsalai"
    },
    {
        value: '132300',
        label: "Jumri Tilaiya"
    },
    {
        value: '132308',
        label: "Jamadoba"
    },
    {
        value: '132443',
        label: "Kenduadih"
    },
    {
        value: '132482',
        label: "Kharsawan"
    },
    {
        value: '132506',
        label: "Khunti"
    },
    {
        value: '132540',
        label: "Kodarma"
    },
    {
        value: '132630',
        label: "Kuju"
    },
    {
        value: '132680',
        label: "Kalikapur"
    },
    {
        value: '132699',
        label: "Kandra"
    },
    {
        value: '132703',
        label: "Kanke"
    },
    {
        value: '132727',
        label: "Katras"
    },
    {
        value: '132758',
        label: "Latehar"
    },
    {
        value: '132768',
        label: "Lohardaga"
    },
    {
        value: '132816',
        label: "Madhupur"
    },
    {
        value: '132873',
        label: "Malkera"
    },
    {
        value: '132923',
        label: "Manoharpur"
    },
    {
        value: '133015',
        label: "Mugma"
    },
    {
        value: '133044',
        label: "Mushabani"
    },
    {
        value: '133209',
        label: "Neturhat"
    },
    {
        value: '133223',
        label: "Nirsa"
    },
    {
        value: '133246',
        label: "Noamundi"
    },
    {
        value: '133320',
        label: "Pakur"
    },
    {
        value: '133339',
        label: "Palamu"
    },
    {
        value: '133374',
        label: "Pashchim Singhbhum"
    },
    {
        value: '133510',
        label: "Purba Singhbhum"
    },
    {
        value: '133557',
        label: "Pathardih"
    },
    {
        value: '133604',
        label: "Ramgarh"
    },
    {
        value: '133606',
        label: "Ranchi"
    },
    {
        value: '133727',
        label: "Ray"
    },
    {
        value: '133752',
        label: "Sahibganj"
    },
    {
        value: '133800',
        label: "Saraikela"
    },
    {
        value: '133927',
        label: "Sijua"
    },
    {
        value: '133939',
        label: "Simdega"
    },
    {
        value: '133952',
        label: "Sini"
    },
    {
        value: '134079',
        label: "Sarubera"
    },
    {
        value: '134209',
        label: "Topchanchi"
    },
    {
        value: '134446',
        label: "patamda"
    }
]

const PostAdd = () => {
    const [loading, setLoading] = useState(false);
    const [imageURL, setImageURL] = useState<string>('');

    useEffect(() => {
        setImageURL('');

        formik.resetForm({
            values: {
                image: null,
                title: 'Name',
                description: 'Describe your requirement',
                budget: 0,
                location: '',
                contact: '',
                mode: 'Sell',
                postType: 'Add',
            },
        });
    }, []);

    const formik = useFormik({
        initialValues: {
            image: null,
            title: 'Name',
            description: 'Describe your requirement',
            location: '',
            budget: 0,
            contact: '',
            mode: 'Sell',
            postType: 'Add',
        },

        onSubmit: async () => {

        },
    });

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

    const onSearch = (value: string) => {
        console.log('search:', value);
      };

    const filterOption = (input: string, option?: { label: string; value: string }) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

    return (
        <>
            <Navbar />
                <div className='d-flex justify-content-center bg-[#F5F5F5]'>
                    <div className='addMainContainer bg-[#FFF] col-9 border border-2 rounded-4 mt-5 mb-4 shadow flex justify-between items-center overflow-hidden'>
                        <Form
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 14 }}
                            layout='horizontal'
                            onFinish={formik.handleSubmit}
                            className='p-5 pe-4 addCardDetails'
                        >
                            <div className='text-4xl font-medium text-[#002766] mb-3'>Post Details</div>

                            <Form.Item
                                label='Image'
                                name='image'
                                valuePropName='fileList'
                                getValueFromEvent={normFile}
                            >
                                <Upload name='image' {...imageUploadProps}>
                                    <Button icon={<UploadOutlined />}>Upload</Button>
                                </Upload>
                            </Form.Item>

                            <Form.Item label='Title' rules={[{ required: true, message: 'Please enter the requirement title!' }]}>
                                <Input
                                    onChange={(e) => {
                                        formik.setFieldValue('title', e.target.value);
                                    }}
                                    value={formik.values.title}
                                />
                            </Form.Item>

                            <Form.Item label='Location' rules={[{ required: true, message: 'Please enter the location!' }]}>
                                <Select
                                    showSearch
                                    placeholder="Select a person"
                                    optionFilterProp="children"
                                    value={formik.values.location}
                                    onChange={(value) => {
                                        formik.setFieldValue('location', value);
                                    }}
                                    onSearch={onSearch}
                                    filterOption={filterOption}
                                    options={cities.map(city => ({ value: city.label, label: city.label }))}
                                />
                            </Form.Item>

                            <Form.Item
                                label='Description'
                                rules={[{ required: true, message: 'Please enter the description!' }]}
                            >
                                <Input.TextArea
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
                                label='Transaction Type'
                                rules={[{ required: true, message: 'Please enter the mode!' }]}
                            >
                                <Select
                                    defaultValue="Sell"
                                    style={{ width: 120 }}
                                    value={formik.values.mode}
                                    onChange={(value) => {
                                        formik.values.budget = 0;
                                        formik.setFieldValue('mode', value);
                                    }}
                                    options={[
                                        { value: 'Sell', label: 'Sell' },
                                        { value: 'Conversion', label: 'Conversion' },
                                        { value: 'Rent', label: 'Rent' },
                                    ]}
                                />
                            </Form.Item>

                            {
                                formik.values.mode == 'Sell' &&
                                <Form.Item
                                    label='Price'
                                    rules={[{ required: true, message: 'Please enter the budget!' }]}
                                >
                                    <InputNumber
                                        min={0}
                                        onChange={(value) => {
                                            formik.setFieldValue('budget', value);
                                        }}
                                        value={formik.values.budget}
                                    />
                                </Form.Item>
                            }
                            {
                                formik.values.mode == 'Conversion' &&
                                <Form.Item
                                    label='Down Payment'
                                    rules={[{ required: true, message: 'Please enter the budget!' }]}
                                >
                                    <Slider
                                        onChange={(value) => {
                                            formik.setFieldValue('budget', value);
                                        }}
                                        defaultValue={formik.values.budget} 
                                    />
                                    <p>Down payment: {formik.values.budget}%</p>
                                </Form.Item>
                            }
                            {
                                formik.values.mode == 'Rent' &&
                                <Form.Item
                                    label='Monthly Rent'
                                    rules={[{ required: true, message: 'Please enter the budget!' }]}
                                >
                                    <InputNumber
                                        min={0}
                                        onChange={(value) => {
                                            formik.setFieldValue('budget', value);
                                        }}
                                        value={formik.values.budget}
                                    />
                                </Form.Item>
                            }

                            <Form.Item label='Contact' rules={[{ required: true, message: 'Please enter the contact information!' }]}
                            >
                                <Input
                                    onChange={(e) => {
                                        formik.setFieldValue('contact', e.target.value);
                                    }}
                                    value={formik.values.contact}
                                />
                            </Form.Item>

                                <Button
                                    type='primary'
                                    className='bg-[#1890FF] w-full font-semibold'
                                    htmlType='submit'
                                    loading={loading}
                                >
                                    Submit
                                </Button>
                        </Form>
                        <div className='h-100 w-auto d-flex justify-content-center align-items-center bg-[#001529]'>
                            <div className='addCardShower'>
                                <ItemCard
                                    item = {
                                        {image: imageURL,
                                            title:formik.values.title,
                                            description:formik.values.description,
                                            contact:formik.values.contact,
                                            budget: formik.values.budget,
                                            transaction: formik.values.mode,
                                            postType: formik.values.postType,
                                            location: formik.values.location,
                                        }
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
};

export default PostAdd;
