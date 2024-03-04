/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Input, DatePicker, InputNumber, Upload, Button, message, Space } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useFormik } from 'formik';
import ItemCard from './ItemCard';
import Navbar from './Navbar';
import { useEffect, useState } from 'react';


const AddAuction = () => {
    const [id, setId] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [imageURL, setImageURL] = useState<string>('');

    useEffect(() => {
        setId(null);
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
        onSubmit: async (values, { resetForm }) => {
            // try {
            //     setLoading(true);

            //     const durationMilliseconds = (values.durationMinutes * 60 + values.durationHours * 60 * 60) * 1000;
            //     const formData = new FormData();

            //     if (values.image && Array.isArray(values.image)) {
            //         const imageFile = values.image[0];
            //         console.log(imageFile);
            //         formData.append('image', imageFile);
            //     }

            //     formData.append('title', values.title);
            //     formData.append('description', values.description);
            //     formData.append('start_datetime', values.start_datetime.toString());
            //     formData.append('duration', durationMilliseconds.toString());
            //     formData.append('durationHours', values.durationHours.toString());
            //     formData.append('durationMinutes', values.durationMinutes.toString());
            //     formData.append('opening_bid_amount', values.opening_bid_amount.toString());
            //     formData.append('raise_options', JSON.stringify({
            //         '1': values.raise_option1.toString(),
            //         '2': values.raise_option2.toString(),
            //         '3': values.raise_option3.toString(),
            //         '4': values.raise_option4.toString(),
            //     }));

            //     let response;

            //     if (editedAuction?._id) {
            //         // Edit existing auction
            //         response = await axios.put(`/auctions/${id}/update`, formData);
            //     } else {
            //         // Add new auction
            //         response = await axios.post('/auctions/create', formData);
            //     }

            //     if (response.status === 201 || response.status === 200) {
            //         const editedAuction = response.data;
            //         message.success('Auction saved successfully!');
            //         onAuctionEdited(editedAuction);
            //         resetForm({
            //             values: {
            //                 image: null,
            //                 title: 'Title',
            //                 description: 'Description',
            //                 start_datetime: new Date(),
            //                 durationHours: 0,
            //                 durationMinutes: 15,
            //                 opening_bid_amount: 1000,
            //                 raise_option1: 100,
            //                 raise_option2: 500,
            //                 raise_option3: 1000,
            //                 raise_option4: 2000,
            //             },
            //         });
            //     } else {
            //         console.error('Auction creation/updation failed. Unexpected response:', response);
            //         message.error('Failed to save auction. Please try again.');
            //     }

            //     setLoading(false);
            // } catch (error) {
            //     console.error('Error saving auction:', error);
            //     message.error('Failed to save auction. Please try again.');
            //     setLoading(false);
            // }
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
            <div className='container'>
                <div className='d-flex justify-content-center'>
                    <div className='border border-2 rounded my-5 p-5 flex justify-between items-center'>
                        <Form
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 14 }}
                            layout='horizontal'
                            onFinish={formik.handleSubmit}
                        >
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
                        <div>
                            <div className='text-4xl font-medium text-center text-[#002766] p-5'>Item Card</div>
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
            </div>
        </>
    );
};

export default AddAuction;
