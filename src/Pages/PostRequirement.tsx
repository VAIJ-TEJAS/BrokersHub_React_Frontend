import { Form, Input, Button, Select, message, Tag, Spin } from 'antd';
import { useFormik } from 'formik';
import ItemCard from '../components/ItemCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../components/Navbar.css'
import { useParams, useNavigate } from 'react-router-dom';
import BackgroundImg from '../assets/images/1215543_7.jpg'
import { Context } from '../context/context.provider';
import Navbar from '../components/Navbar';

interface OptionType {
    id: number;
    name: string;
    iso2: string;
}

interface Location {
    places: string;
}

const PostRequirement:React.FC = () => {
    const { showAuthModal } = Context();
    const { postId } = useParams();
    if(!postId){
        localStorage.removeItem('thebrokerhub-item')
    }

    const [form] = Form.useForm();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({});
    const [placesStr, setPlacesStr] = useState<string>('');
    const [stateList, setStateList] = useState<OptionType[]>([]);
    const [cities, setcities] = useState<OptionType[]>([]);
    const [loading, setLoading] = useState(false);
    const [selectedLocations, setSelectedLocations] = useState<Location[]>([]);

    console.log(selectedLocations)

    useEffect(() => {
        formik.resetForm({
            values: {
                monthly_rent: '0',
                title: '',
                description: '',
                contact: '0',
                city: '',
                state: '',
                budget: '0',
                transaction_type: 'Buy',
                downpayment: '0',
                ratio_x: '0',
                ratio_y: '0',
                area: 0,
                places: '',
            },
        });
    }, []);

    const formik = useFormik({
        initialValues: {
            monthly_rent: '0',
            title: '',
            description: '',
            contact: '',
            city: '',
            state: '',
            budget: '0',
            transaction_type: 'Buy',
            downpayment: '0',
            ratio_x: '0',
            ratio_y: '0',
            area: 0,
            places: ''
        },

        onSubmit: async (values) => {

            if (selectedLocations.length <= 0) {
                message.error("Add at least one location.")
                return;
            }

            values.places = placesStr;
            const token = localStorage.getItem('thebrokershub-access-token');

            if (!token) {
                showAuthModal()
                return
            }
            console.log(values)
            // return

            
            if (values.transaction_type == 'Conversion' && (parseInt(values.downpayment) <= 0 || parseInt(values.ratio_x) < 0 || parseInt(values.ratio_x) > 100)) {
                message.error("Please enter a valid conversion details.")
                return;
            }

            let url = 'https://13.232.115.59/requirements/';
            if (postId) {
                url = `https://13.232.115.59/my-requirements/${postId}/`;
                axios.put(url, values, {
                    headers: {
                        'Authorization': `Token ${token}`,
                        'Content-Type': 'application/json'
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
                    if (error.response?.data) {
                        let errorMessage = error.response?.data
                        let firstKey = Object.keys(errorMessage)[0];
                        // let firstValue = errorMessage[firstKey];
                        message.error('Field ' + firstKey + ' is required.')
                    }
                    else{
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
            
            axios.post(url, values, {
                headers: {
                    'Authorization': `Token ${token}`,
                    'Content-Type': 'application/json'
                    // Add other headers as needed
                }
            })
            .then(response => {
                console.log('Response:', response.data); // Handle the response
                message.success('You requirement has been posted!')
                navigate('/requirementslisting/')
                // Optionally, you can perform any actions after successful response
            })
            .catch(error => {
                if (error.response?.data) {
                    let errorMessage = error.response?.data
                    let firstKey = Object.keys(errorMessage)[0];
                    // let firstValue = errorMessage[firstKey];
                    message.error('Field ' + firstKey + ' is required.')
                }
                else{
                    let errorMessage = error.message;
                    message.error(errorMessage)
                }
                // Optionally, you can perform any actions after error
            })
            .finally(() => {
                setLoading(false); // Set loading state to false after request completion
            });

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
            setStateList(response.data);
        })
        .catch((_err: any) => {
            console.log("error in city")
            console.log(_err)
        })

        const localStorageItem = localStorage.getItem('thebrokerhub-item');
        const placesFromLocalStorage = localStorageItem ? JSON.parse(localStorageItem).places.toString() : '';
        // Split city and state strings by ','
        const placesArr = placesFromLocalStorage.split(',');

        // Map city and state arrays to create an array of Location objects
        const locations = placesArr.map((place: string) => ({
            places: place || '', // Use empty string if state is not available
        }));
        
        setSelectedLocations(locations);
        if (localStorageItem !== null && postId) {
            setFormData(JSON.parse(localStorageItem));
            form.setFieldsValue(JSON.parse(localStorageItem));
            formik.setFieldValue('monthly_rent' , JSON.parse(localStorageItem).monthly_rent);
            formik.setFieldValue('title' , JSON.parse(localStorageItem).title);
            formik.setFieldValue('description' , JSON.parse(localStorageItem).description);
            formik.setFieldValue('contact' , JSON.parse(localStorageItem).contact);
            formik.setFieldValue('city' , JSON.parse(localStorageItem).city);
            formik.setFieldValue('state' , JSON.parse(localStorageItem).state);
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
            setcities(response.data);
        })
    }, [formik.values.state])

    const filterOption = (input: string, option?: { label: string; value: string }) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

    const handleAddLocation = () => {
        if (!formik.values.places) {
            message.error("Please enter a place name.")
            return;
        }

        const newLocation: Location = { places: formik.values.places };
        // Check if location already exists
        if (selectedLocations.some(loc => loc.places === newLocation.places)) {
            return; // Do not add if location already exists
        }
        // Check if max locations already added
        if (selectedLocations.length >= 4) {
            return; // Do not add if max locations reached
        }
        console.log(selectedLocations)
        setSelectedLocations([newLocation, ...selectedLocations]);
    };

    const handleTagClose = (index: number) => {
        const newLocations = [...selectedLocations];
        newLocations.splice(index, 1);
        setSelectedLocations(newLocations);
    };

    useEffect(() => {
        let places = '';
        selectedLocations.forEach((location, index) => {
            places += index === 0 ? location.places : `, ${location.places}`;
        });
        setPlacesStr(places)
        // console.log(selectedLocations)
    }, [selectedLocations])

    return (
        <>
            <Navbar />
            {/* <div className='h-full d-flex justify-content-center '> */}
            <div className='flex justify-center' style={{backgroundImage: `url(${BackgroundImg})`, backgroundSize:'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                <div className='w-full flex justify-center bg-[black]/50'>
                    <div className='bg-white/80 w-full sm:w-3/4 border rounded-4 mt-5 mb-4 shadow flex justify-between items-center overflow-hidden'>
                        <Form
                            form={form}
                            initialValues={formData}
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 14 }}
                            layout='horizontal'
                            onFinish={formik.handleSubmit}
                            className='p-5 pe-4 w-full lg:w-3/5 space-y-7 sm:space-y-9'
                        >
                            <div className='sm:text-4xl text-2xl font-medium text-[#002766] mb-5'>Requirement Details</div>

                            <Form.Item name="title" label='Title' rules={[{ required: true, message: 'Please enter the requirement title!' }]}>
                                <Input
                                    placeholder='Title'
                                    value={formik.values.title}
                                    onChange={(e) => {
                                        formik.setFieldValue('title', e.target.value);
                                    }}
                                />
                            </Form.Item>

                            <Form.Item name='contact' label='Contact' rules={[
                                { required: true, message: 'Please input your phone number!' },
                                { pattern: /^\d{10}$/, message: 'Phone number must be 10 digits!' },
                            ]}>
                                <Input
                                    onChange={(e) => {
                                        formik.setFieldValue('contact', e.target.value);
                                    }}
                                    value={formik.values.contact}
                                />
                            </Form.Item>

                            <Form.Item name='state' label='State' className="">
                                <Select
                                    showSearch
                                    placeholder="Select a state"
                                    optionFilterProp="children"
                                    value={formik.values.state}
                                    onChange={(value) => {
                                        formik.setFieldValue('state', stateList.find(st => st.iso2 === value)?.name);
                                        formik.setFieldValue('city', '');
                                    }}
                                    filterOption={filterOption}
                                    options={stateList.map(city => ({
                                        value: city.iso2,
                                        label: city.name
                                    }))}
                                />
                            </Form.Item>

                            <Form.Item name='city' label='City'>
                                <Select
                                    showSearch
                                    className='mb-2'
                                    placeholder="Select a city"
                                    optionFilterProp="children"
                                    // value={formik.values.city}
                                    onChange={(value) => {
                                        formik.setFieldValue('city', value);
                                    }}
                                    filterOption={filterOption}
                                    options={cities.map(city => ({
                                        value: city.name,
                                        label: city.name
                                    }))}
                                />
                            </Form.Item>

                            <Form.Item name="place" label='Preffered Location'>
                                <Input
                                    className='mb-3'
                                    placeholder='Enter preffered places name'
                                    onChange={(e) => {
                                        formik.setFieldValue('places', e.target.value);
                                    }}
                                />
                                <Button type="primary" onClick={handleAddLocation}>Add</Button>
                            </Form.Item>

                            {/* Display selected locations */}
                            {selectedLocations.length > 0  &&
                                <div className='flex justify-center items-center'>
                                    {selectedLocations.slice(0, -1).map((location, index) => (
                                        <Tag onClose={() => handleTagClose(index)} closable key={index}>{`${location.places}`}</Tag>
                                    ))}
                                </div>
                            }

                            <Form.Item
                                label='Description'
                                name='description'
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

                            <Form.Item name='area' label='Area (In sqft)' rules={[{ required: true, message: 'Please enter the area!' }, { pattern: /^\d*\.?\d+$/, message: 'Please enter a valid area' }]}>
                                <Input
                                    placeholder='In sqft'
                                    value={formik.values.area}
                                    onChange={(e) => {
                                        if (!Number.isNaN(parseInt(e.target.value))) {
                                            formik.setFieldValue('area', parseInt(e.target.value));
                                        }
                                    }}
                                />
                            </Form.Item>

                            <Form.Item
                                label='Transaction Type'
                                name='transaction_type'
                            >
                                <Select
                                    style={{ width: 120 }}
                                    value={formik.values.transaction_type}
                                    onChange={(value) => {
                                        formik.setFieldValue('transaction_type', value);
                                    }}
                                    options={[
                                        { value: 'Buy', label: 'Buy' },
                                        { value: 'Conversion', label: 'Conversion' },
                                        { value: 'Rent', label: 'Rent' },
                                    ]}
                                />
                            </Form.Item>

                            {
                                formik.values.transaction_type == 'Buy' &&
                                <Form.Item
                                    label='Budget (₹)'
                                    name='budget'
                                    rules={[{ required: true, message: 'Please enter the budget!' }, { pattern: /^\d*\.?\d+$/, message: 'Please enter a valid price' }]}
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
                                    label='Down Payment (₹)'
                                    name='downpayment'
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
                                <div className=''>
                                <Form.Item
                                    label='Ratio'
                                    name='Ratio'
                                >
                                    <Input
                                        min={0}
                                        max={100}
                                        className='me-2 w-20'
                                        onChange={(e: any) => {
                                            if (!Number.isNaN(parseInt(e.target.value))) {
                                                formik.setFieldValue('ratio_x', e.target.value);
                                                formik.setFieldValue('ratio_y', (100 - parseInt(e.target.value)).toString());
                                            }
                                        }}
                                        value={parseInt(formik.values.ratio_x)}
                                    />
                                    <Input
                                        min={0}
                                        max={100}
                                        className='ms-2 w-20'
                                        onChange={(value: any) => {
                                            formik.setFieldValue('ratio_y', value);
                                        }}
                                        value={100 - parseInt(formik.values.ratio_x)}
                                    />
                                </Form.Item>
                                </div>
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
                                    onClick={() => {console.log("Loading");setLoading(true);}}
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
                                    page = "requirements"
                                    item = {
                                        {
                                            id: 0,
                                            monthly_rent: formik.values.monthly_rent,
                                            contact: formik.values.contact,
                                            downpayment: formik.values.downpayment,
                                            ratio_y: formik.values.ratio_y,
                                            image: '',
                                            title:formik.values.title,
                                            description:formik.values.description,
                                            budget: formik.values.budget,
                                            transaction_type: formik.values.transaction_type,
                                            city: formik.values.city,
                                            state: formik.values.state,
                                            ratio_x: formik.values.ratio_x,
                                            area: formik.values.area,
                                            places: placesStr || '',
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

export default PostRequirement;
