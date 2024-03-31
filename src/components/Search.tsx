/* eslint-disable @typescript-eslint/no-explicit-any */
// import { LeftOutlined, SwapOutlined } from '@ant-design/icons';

import React, { useState, useEffect } from 'react';
import { Select, Input, Button, Tag  } from 'antd';
import './Navbar.css';
import { Item } from '../types/item.types';
import axios from 'axios';
import { CloseOutlined } from '@ant-design/icons';

interface props {
    page: string;
    setFilteredItems: (filteredItems: Item[]) => void;
    items: Item[];
}

interface OptionType {
    id: number;
    name: string;
    iso2: string;
}

interface cityType{
    id: number;
    name: string;
}

interface City {
    state: string;
    city: string;
}

const Search: React.FC<props> = ({page, setFilteredItems, items}) => {
  
    const [stateList, setStateList] = useState<OptionType[]>([]);
    const [cities, setcities] = useState<OptionType[]>([]);
    const [range, setRange] = useState<string>("Select Range");
    const [city, setCity] = useState<string>("Select City");
    const [state, setState] = useState<string>("Select State");
    const [rangeValue, setRangeValue] = useState<number[]>([0, 0]);
  
    const [rangeOpen, setRangeOpen] = useState<boolean>(false);
    const [CityOpen, setCityOpen] = useState<boolean>(false);
    const [stateOpen, setStateOpen] = useState<boolean>(false);
    
    const [inputState, setInputState] = useState<string>('');
    const [inputCity, setInputCity] = useState<string>('');
    const [filteredStates, setFilteredStates] = useState<OptionType[]>([]);
    const [filteredCity, setFilteredCity] = useState<cityType[]>(cities);
    const [selectedCities, setSelectedCities] = useState<City>();

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
            setFilteredStates(response.data);
        })
    }, [])

    useEffect(() => {
        axios.get(`https://api.countrystatecity.in/v1/countries/IN/states/${state}/cities`, {
          headers: {
            'X-CSCAPI-KEY': `NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA==`,
            'Content-Type': 'application/json'
          }
        })
        .then((response) => {
            setcities(response.data);
            setFilteredCity(response.data);
        })
    }, [state])

    const toggleCity = () => {
        setCityOpen(!CityOpen)
    };

    const toggleRange = () => {
        setRangeOpen(!rangeOpen)
    };

    const toggleState = () => {
        setStateOpen(!stateOpen)
    };

    const handleFromChange = (value: string) => {
        setCity(value)
    }

    const handleStateChange = (value: string) => {
        setState(value);
        setCity('Select City'); // Reset the city selection when state changes
    }

    const handleRangeChange = (value: string) => {
        console.log(value);
        setRange(value)
        let maxVal = value.split(' ');
        if(maxVal[0] === '>'){
            setRangeValue([0, 0]);
            return;
        }
        let numSelected = parseFloat(maxVal[1].replace(/,/g, ''));
        setRangeValue([0, numSelected]);
    };

    const handleClose = () => {
        setSelectedCities({state: '', city: ''});
    };

    const handleCityChange = (value: City) => {
          setSelectedCities({ state: value.state, city: value.city });
    };

    const handleFilter = () => {
        if (state === 'Select State' && (city === 'Select City' || city === '')) {
            setSelectedCities(selectedCities);
            return
        }
        if (city === 'Select City') {
            handleCityChange({ state: stateList.find(st => st.iso2 === state)?.name || '', city: '' });
            return
        }
        handleCityChange({ state: stateList.find(st => st.iso2 === state)?.name || '', city: city });
    }

    useEffect(() => {
        let filteringLocation = items
        console.log(filteringLocation.length)
        console.log(selectedCities)
        if (selectedCities) {
            filteringLocation = items.filter(item => item.state.includes(selectedCities.state)  && item.city.includes(selectedCities.city));
        }

        console.log(filteringLocation)

        const filteredItems = filteringLocation.filter(item => {
            if (rangeValue[1] !== 0 && parseInt(item.budget) > rangeValue[1]) {
                return false;
            }
            return true;
        });
        setFilteredItems(filteredItems);
    }, [selectedCities])

    const rangeList = [
        {
        value: '< 1,00,000',
        label: '< 1,00,000'
        },
        {
        value: '< 2,00,000',
        label: '< 2,00,000'
        },
        {
        value: '< 5,00,000',
        label: '< 5,00,000'
        },
        {
        value: '< 10,00,000',
        label: '< 10,00,000'
        },
        {
        value: '< 20,00,000',
        label: '< 20,00,000'
        },
        {
        value: '> 20,00,000',
        label: '> 20,00,000'
        },
    ]

//   useEffect(() => {
//     console.log(rangeValue);
//   }, [rangeValue]);

    return (
        <>
            <div className='justify-center flex flex-col sm:w-auto w-full'>
                <div className='lg:p-0 px-2 flex justify-center bg-[#001529] rounded min-w-80 border'>
                    <div className='sm:flex-row d-flex flex-col justify-content-evenly align-items-center w-full h-full py-2'>

                    {/* price range  */}
                    {
                        page === 'Add' &&
                        <div className='w-full text-light relative bg-[#00396e] border mx-1 mb-1 p-2 rounded-lg text-sm hover:bg-gray-700 hover:cursor-pointer sm:w-60' style={{minWidth: '240px'}} onClick={toggleRange}>
                            <div className='px-2'>
                                <div className='text-yellow-500'>Price Range</div>
                                <div className='text-white'>{range}</div>
                                </div>
                                <Select
                                    open={rangeOpen}
                                    className='absolute w-0 h-0'
                                    defaultValue="One Way Trip"
                                    value={range}
                                    style={{ visibility: 'hidden', width: '100%' }}
                                    onChange={handleRangeChange}
                                    onDropdownVisibleChange={(open) => setRangeOpen(open)}
                                    options={rangeList.map((item) => {
                                        return {
                                        value: item.value,
                                        label: item.label,
                                        };
                                    })}
                                />
                        </div>
                    }

                    {/* select state  */}
                    <div className={`w-full relative bg-[#00396e] border mx-1 mb-1 py-2 rounded-lg text-sm hover:bg-gray-700 hover:cursor-pointer ${page === 'Add' ? 'sm:w-60': 'sm:w-80'} `}
                            onClick={toggleState}>
                        <div className='px-2'>
                            <div className='text-yellow-500'>State</div>
                            <div className='text-white'>{state !== 'Select State' ? stateList.find(st => st.iso2 === state)?.name : 'Select State'}</div>
                            </div>
                            
                            <Select
                            open={stateOpen}
                            className='absolute w-0 h-0'
                            style={{ visibility: 'hidden', width: '100%' }}
                            onChange={handleStateChange}
                            onDropdownVisibleChange={(open) => setStateOpen(open)}
                            options={
                                filteredStates.map(option => {
                                    return {
                                    value: option.iso2,
                                    label: option.name,
                                    };
                                })
                            }
                            dropdownRender={menu => (
                                <div>
                                <Input 
                                    placeholder="State Name" 
                                    onChange={(e) => {
                                    setInputState(e.target.value)
                                    let filtered = stateList.filter((option: any) => option.name.toLowerCase().includes(inputState.toLowerCase()))
                                                            .map((option: any) => ({ id: option.id, iso2: option.iso2, name: option.name }));
                                    setFilteredStates(filtered);
                                    }} 
                                    onClick={e => e.stopPropagation()} 
                                    style={{ width: '100%', marginBottom: 8 }} 
                                />
                                {menu}
                                </div>
                            )}
                            />
                    </div>

                    {/* select city  */}
                    {state !== 'Select State' && 
                        <div className={`w-full relative bg-[#00396e] border mx-1 py-2 rounded-lg text-sm hover:bg-gray-700 hover:cursor-pointer ${page === 'Add' ? 'sm:w-60': 'xl:w-80'} `} onClick={toggleCity}>
                        <div className='px-2'>
                            <div className='text-yellow-500'>City</div>
                            <div className='text-white'>{city}</div>
                            </div>
                            <Select
                            open={CityOpen}
                            className='absolute w-0 h-0'
                            defaultValue="One Way Trip"
                            style={{ visibility: 'hidden', width: '100%' }}
                            onChange={handleFromChange}
                            onDropdownVisibleChange={(open) => setCityOpen(open)}
                            options={
                                    filteredCity.map(option => {
                                        return {
                                        value: option.name,
                                        label: option.name,
                                        };
                                    })
                            }
                            dropdownRender={menu => (
                                <div>
                                <Input 
                                    placeholder="City Name"
                                    onChange={(e) => {
                                    setInputCity(e.target.value)
                                    let filtered = cities.filter(option => option.name.toLowerCase().includes(inputCity.toLowerCase()))
                                                            .map(option => (option));
                                                            setFilteredCity(filtered);
                                    }} 
                                    onClick={e => e.stopPropagation()}
                                    style={{ width: '100%', marginBottom: 8 }}
                                />
                                    {menu}
                                </div>
                            )}
                            />
                        </div>
                    }

                    <Button onClick={handleFilter} className='w-full md:p-0 py-3 mt-1 border bg-yellow-500 hover:bg-yellow-400 mx-1 h-full rounded-lg flex justify-center items-center font-medium sm:w-36 '>
                        SEARCH
                    </Button>

                    </div>
                </div>
                <div className='ms-auto mt-2 text-white'>
                    <div className='flex sm:flex-row flex-wrap sm:justify-end justify-center'>
                        {selectedCities && selectedCities.state !== '' &&
                            <Tag
                                key={`${selectedCities.state}-${selectedCities.city}`}
                                closable
                                className=' px-3 py-1 mx-2 my-1 bg-[#00396e] text-white'
                                onClose={() => handleClose()}
                                closeIcon={<CloseOutlined className='ms-auto' style={{ color: 'white' }} />}
                            >
                                <strong className='my-auto text-center pe-2'>{selectedCities.state} {selectedCities.city !== '' ? `, ${selectedCities.city}`: ''}</strong>
                            </Tag>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Search;
