/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Input, InputNumber, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useFormik } from 'formik';
import ItemCard from './ItemCard';
import Navbar from './Navbar';
import { useEffect, useState } from 'react';


const AddAuction = () => {
    const [loading, setLoading] = useState(false);
    const [imageURL, setImageURL] = useState<string>('');

    useEffect(() => {
        setImageURL('');

        formik.resetForm({
            values: {
                image: null,
                title: 'Name',
                description: 'Description',
                price: 0,
                location: '',
            },
        });
    }, []);

    const formik = useFormik({
        initialValues: {
            image: null,
            title: 'Name',
            description: 'Description',
            location: '',
            price: 0,
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

    return (
        <>
            <Navbar />
                <div className='d-flex justify-content-center'>
                    <div className='col-md-8 border border-2 rounded-4 my-4 shadow flex justify-between items-center overflow-hidden'>
                        <Form
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 14 }}
                            layout='horizontal'
                            onFinish={formik.handleSubmit}
                            className='p-5 col-7'
                        >
                            <div className='text-4xl font-medium text-[#002766] mb-1'>Item Details</div>
                            <hr className='mb-1' />
                            <hr className='mb-4' />
                            <Form.Item
                                label='Image'
                                name='image'
                                valuePropName='fileList'
                                getValueFromEvent={normFile}
                                rules={[{ required: true, message: 'Please upload an Image!' }]}
                            >
                                <Upload name='image' {...imageUploadProps}>
                                    <Button icon={<UploadOutlined />}>Upload</Button>
                                </Upload>
                            </Form.Item>

                            <Form.Item label='Item Name' rules={[{ required: true, message: 'Please enter the item name!' }]}>
                                <Input
                                    onChange={(e) => {
                                        formik.setFieldValue('title', e.target.value);
                                    }}
                                    value={formik.values.title}
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
                                label='Price'
                                rules={[{ required: true, message: 'Please enter the price!' }]}
                            >
                                <InputNumber
                                    min={0}
                                    onChange={(value) => {
                                        formik.setFieldValue('price', value);
                                    }}
                                    value={formik.values.price}
                                />
                            </Form.Item>


                            <Form.Item label='Item Location' rules={[{ required: true, message: 'Please enter the location!' }]}>
                                <Input
                                    onChange={(e) => {
                                        formik.setFieldValue('location', e.target.value);
                                    }}
                                    value={formik.values.location}
                                />
                            </Form.Item>

                            <Form.Item wrapperCol={{ offset: 8, span: 14 }}>
                                <Button
                                    type='primary'
                                    className='bg-[#1890FF] w-full font-semibold'
                                    htmlType='submit'
                                    loading={loading}
                                >
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                        <div className='h-100 col-5 d-flex justify-content-center align-items-center bg-[#001529]'>
                            <ItemCard
                                item = {
                                    {image: imageURL,
                                    title:formik.values.title,
                                    description:formik.values.description,
                                    price: formik.values.price}
                                }
                            />
                        </div>
                    </div>
                </div>
        </>
    );
};

export default AddAuction;
