/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Input, InputNumber, Button, Select, Upload } from 'antd';
import { useFormik } from 'formik';
import ItemCard from '../components/ItemCard';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import '../components/Navbar.css';
import { UploadOutlined } from '@ant-design/icons';


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
                                options={[
                                {
                                    value: 'Mumbai',
                                    label: 'Mumbai',
                                },
                                {
                                    value: 'Pune',
                                    label: 'Pune',
                                },
                                {
                                    value: 'Delhi',
                                    label: 'Delhi',
                                },
                                ]}
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
                                label='Budget'
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
                                            budget: formik.values.budget
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
