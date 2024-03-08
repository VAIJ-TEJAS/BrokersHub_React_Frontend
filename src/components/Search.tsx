/* eslint-disable @typescript-eslint/no-explicit-any */
// import { LeftOutlined, SwapOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Select, Slider, Input  } from 'antd';
import { Option } from 'antd/es/mentions';
import './Navbar.css';


const Search: React.FC = () => {

  const [Item, setItem] = useState<string>("Select Item");
  const [from, setFrom] = useState<string>("Select City");
  const [to, setTo] = useState("Year");

  const [itemOpen, setItemOpen] = useState<boolean>(false);
  const [fromOpen, setFromOpen] = useState<boolean>(false);
  const [toOpen, setToOpen] = useState<boolean>(false);
  

  const [cities] = useState([{
    _id: '1',
    name: 'Mumbai',
  }]);

  const toggleFrom = () => {
    setFromOpen(!fromOpen)
  };

  const toggleItem = () => {
    setItemOpen(!itemOpen)
  };

  const toggleTo = () => {
    setToOpen(!toOpen)
  };

  const handleFromChange = (value: string) => {
    setFrom(value)
  }

  const handleItemChange = (value: string) => {
    setItem(value)
  }

  const handleToChange = (value: string) => {
    setTo(value)
  }

  const itemsList = [ 'Property', 'Laptop', 'Car']

  const min = 0; // Set the minimum value
  const max = 100; // Set the maximum value

  const [rangeValue, setRangeValue] = useState<number[]>([min, max]);

  const handleRangeChange = (value: number[]) => {
    setRangeValue(value);
  };

  return (
    <>
        <div className='justify-center w-full d-flex '>
          <div className='filter-container flex justify-center bg-[#001529] rounded'>
            <div className='d-flex justify-content-evenly align-items-center w-100 h-full py-2 filter-box'>
              <div className='filter-field text-light relative bg-[#00396e] mx-1 p-2 rounded-lg text-sm hover:bg-gray-700 hover:cursor-pointer
                w-36
                xl:w-60' style={{minWidth: '240px'}}>
                  <Slider range defaultValue={rangeValue} className='my-1' disabled={false} min={min} max={max} onChange={handleRangeChange} />
                  <div style={{ marginTop: '5px' }}>
                    <span>Price Range: ₹{rangeValue[0]} - ₹{rangeValue[1]}</span>
                  </div>
              </div>

              <div className='filter-field relative bg-[#00396e] mx-1 py-2 rounded-lg text-sm hover:bg-gray-700 hover:cursor-pointer
                w-36
                xl:w-60
              ' onClick={toggleFrom}>
                    <div className='px-2'>
                      <div className='text-yellow-500'>Location</div>
                      <div className='text-white'>{from}</div>
                    </div>
                    <Select
                      open={fromOpen}
                      className='absolute w-0 h-0'
                      defaultValue="One Way Trip"
                      style={{ visibility: 'hidden', width: '100%' }}
                      onChange={handleFromChange}
                      onDropdownVisibleChange={(open) => setFromOpen(open)}
                      dropdownRender={menu => (
                        <div>
                          <Input placeholder="Item Name" onClick={e => e.stopPropagation()} style={{ width: '100%', marginBottom: 8 }} />
                          {menu}
                        </div>
                      )}
                    >
                      {cities.map((city) => (
                        <Option key={city._id} value={city.name}>
                          {city.name}
                        </Option>
                      ))}
                      {/* Add more options as needed */}
                    </Select>
              </div>

              <div className='filter-field relative bg-[#00396e] mx-1 py-2 rounded-lg text-sm hover:bg-gray-700 hover:cursor-pointer
                w-36
                xl:w-40
              ' onClick={toggleItem}>
                    <div className='px-2'>
                      <div className='text-yellow-500'>Item</div>
                      <div className='text-white'>{Item}</div>
                    </div>
                    <Select
                      open={itemOpen}
                      className='absolute w-0 h-0'
                      defaultValue="One Way Trip"
                      style={{ visibility: 'hidden', width: '100%' }}
                      onChange={handleItemChange}
                      onDropdownVisibleChange={(open) => setItemOpen(open)}
                      dropdownRender={menu => (
                        <div>
                          <Input placeholder="Enter location" onClick={e => e.stopPropagation()} style={{ width: '100%', marginBottom: 8 }} />
                          {menu}
                        </div>
                      )}
                    >
                      {itemsList.map((item) => (
                        <Option key={item} value={item}>
                          {item}
                        </Option>
                      ))}
                      {/* Add more options as needed */}
                    </Select>
              </div>

              <button className='filter-field bg-yellow-500 hover:bg-yellow-400 mx-1 h-full rounded-lg flex justify-center items-center font-medium
                w-32
                xl:w-36
              '>
                SEARCH
              </button>

            </div>
          </div>
        </div >
    </ >
  );
};

export default Search;
