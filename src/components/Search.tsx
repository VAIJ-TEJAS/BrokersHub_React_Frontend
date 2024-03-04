/* eslint-disable @typescript-eslint/no-explicit-any */
import { LeftOutlined, SwapOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { DatePicker, Select, Spin, Slider, Input  } from 'antd';
import { Option } from 'antd/es/mentions';
import dayjs, { Dayjs } from 'dayjs';
import { useLocation, useNavigate } from 'react-router-dom';

// import { generateTimeOptions } from '../utils/GenerateTimeOptions';

// import { City } from '../types/citys.types';
// import { ISettings } from '../types/settings.types';
// import { IRoute } from '../types/routes.types';
// import { TaxiType } from '../types/taxiTypes.types';
// import { generateDistanceOptions } from '../utils/GenerateDistanceOptions';

interface BillCardProps {
  routeDistance: number;
  tripRates: any;
}


const Search: React.FC = () => {

  const location = useLocation();
  const { state } = location;

  console.log(state)

  const navigate = useNavigate()

  const [tripType, setTripType] = useState<string>("One-Way Trip")
  const [pickupCity, setPickupCity] = useState<string>("Select City");
  const [pickupCityId, setPickupCityId] = useState<string | null>(null);
  const [Item, setItem] = useState<string>("Select Item");
  const [from, setFrom] = useState<string>("Select City");
  const [fromId, setFromId] = useState<string | null>(null);
  const [to, setTo] = useState("Year");
  const [toId, setToId] = useState<string | null>(null);
  const [pickupDate, setPickupDate] = useState<Dayjs | null>(dayjs());
  const [returnDate, setReturnDate] = useState<Dayjs | null>(dayjs());
  const [pickupTime, setPickupTime] = useState<string>('10:00 AM')
  const [hourlyPackage, setHourlyPackage] = useState<string>('1 hr 10 kms')

  const [tripTypeOpen, setTripTypeOpen] = useState<boolean>(false);
  const [pickupCityOpen, setPickupCityOpen] = useState<boolean>(false);
  const [fromOpen, setFromOpen] = useState<boolean>(false);
  const [toOpen, setToOpen] = useState<boolean>(false);
  const [pickupDateOpen, setPickupDateOpen] = useState<boolean>(false);
  const [returnDateOpen, setReturnDateOpen] = useState<boolean>(false);
  const [pickupTimeOpen, setPickupTimeOpen] = useState<boolean>(false);
  const [hourlyPackageOpen, setHourlyPackageOpen] = useState<boolean>(false);
  

  const [cities, setCities] = useState([{
    _id: '1',
    name: 'Mumbai',
  }]);

  const toggleTripType = () => {
    setTripTypeOpen(!tripTypeOpen)
  };

  const togglePickupCity = () => {
    setPickupCityOpen(!pickupCityOpen)
  };

  const toggleFrom = () => {
    setFromOpen(!fromOpen)
  };

  const toggleTo = () => {
    setToOpen(!toOpen)
  };

  const togglePickupDate = () => {
    setPickupDateOpen(!pickupDateOpen)
  };

  const toggleReturnDate = () => {
    if (tripType === 'One-Way Trip') {
      setTripType('Round Trip')
    }
    setReturnDateOpen(!returnDateOpen)
  };

  const togglePickupTime = () => {
    setPickupTimeOpen(!pickupTimeOpen)
  };

  const toggleHourlyPackage = () => {
    setHourlyPackageOpen(!hourlyPackageOpen)
  };

  const switchValues = () => {
    setFrom((prevFrom) => {
      const tempFrom = prevFrom;
      setFrom(to);
      setTo(tempFrom);

      const tempFromId = fromId;
      setFromId(toId);
      setToId(tempFromId);

      return to;
    });
  };

  const handleTripTypeChange = (value: string) => {
    setTripType(value)
  }

  const handlePickupCityChange = (value: string) => {
    setPickupCity(value)
    // setPickupCityId(cities.find((c: City) => c.name === value)?._id ?? null)
  }

  const handleFromChange = (value: string) => {
    setFrom(value)
    // setFromId(cities.find((c: City) => c.name === value)?._id ?? null)
  }

  const handleToChange = (value: string) => {
    setTo(value)
    // setToId(cities.find((c: City) => c.name === value)?._id ?? null)
  }

  const handlePickupDateChange = (date: Dayjs | null, dateString: string) => {
    console.log('Selected Date:', dateString);
    setPickupDate(date)
    togglePickupDate()
  }

  const handleReturnDateChange = (date: Dayjs | null, dateString: string) => {
    console.log('Selected Date:', dateString);
    setReturnDate(date)
    toggleReturnDate()
  }

  const handlePickupTimeChange = (value: string) => {
    setPickupTime(value)
  }

  const handleHourlyPackageChange = (value: string) => {
    setHourlyPackage(value)
  }

  const menuTimeOptions = [{
    key: '1',
    label: '4/3/24',
  }]

  const menuDistanceOptions = [{
    key: '1',
    label: '4/3/24',
  }]

  const postedOn = [
    {
      _id: 'Year',
      name: 'Year',
    },
    {
      _id: 'Month',
      name: 'Month',
    },
    {
      _id: 'Week',
      name: 'Week',
    },
    {
      _id: 'Day',
      name: 'Day',
    },
  ]

  const min = 0; // Set the minimum value
  const max = 100; // Set the maximum value

  const [rangeValue, setRangeValue] = useState<number[]>([min, max]);

  const handleRangeChange = (value: number[]) => {
    setRangeValue(value);
  };

  return (
    <>
      <div className='bg-[#001529]'>
        <div className='justify-center w-full
          hidden
          lg:flex
        '>
          <div className='container flex justify-center bg-[#001529] rounded-lg w-[1166px]'>
            <div className='flex items-center h-full py-2'>
              <div className='text-light relative bg-[#00396e] mx-1 p-2 rounded-lg text-sm hover:bg-gray-700 hover:cursor-pointer
                w-36
                xl:w-40' style={{minWidth: '240px'}}>
                  <Slider range defaultValue={rangeValue} className='my-1' disabled={false} min={min} max={max} onChange={handleRangeChange} />
                  <div style={{ marginTop: '5px' }}>
                    <span>Price Range: ${rangeValue[0]} - ${rangeValue[1]}</span>
                  </div>
                </div>

                <div className='relative bg-[#00396e] mx-1 py-2 rounded-lg text-sm hover:bg-gray-700 hover:cursor-pointer
                w-36
                xl:w-40
              ' onClick={toggleFrom}>
                    <div className='px-2'>
                      <div className='text-yellow-500'>Item</div>
                      <div className='text-white'>{Item}</div>
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

                <div className='relative bg-[#00396e] mx-1 py-2 rounded-lg text-sm hover:bg-gray-700 hover:cursor-pointer
                w-36
                xl:w-40
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
                          <Input placeholder="Enter location" onClick={e => e.stopPropagation()} style={{ width: '100%', marginBottom: 8 }} />
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

                  <div className='relative bg-[#00396e] mx-1 py-2 rounded-lg text-sm hover:bg-gray-700 hover:cursor-pointer
                w-36
                xl:w-40
              ' onClick={toggleTo}>
                    <div className='px-2'>
                      <div className='text-yellow-500'>Posted On</div>
                      <div className='text-white'>{to}</div>
                    </div>
                    <Select
                      open={toOpen}
                      className='absolute w-0 h-0'
                      defaultValue="Year"
                      style={{ visibility: 'hidden', width: '100%' }}
                      onChange={handleToChange}
                      onDropdownVisibleChange={(open) => setToOpen(open)}
                    >
                      
                      {postedOn.map((posted) => (
                        <Option key={posted._id} value={posted.name}>
                          {posted.name}
                        </Option>
                      ))}
                      {/* Add more options as needed */}
                    </Select>
                  </div>
              
                  {/* <div className='relative bg-[#404040] mx-1 py-2 rounded-lg text-sm hover:bg-gray-700 hover:cursor-pointer
                    w-36
                    xl:w-40
                  ' onClick={togglePickupCity}>
                    <div className='px-2'>
                      <div className='text-yellow-500'>PICKUP LOCATION</div>
                      <div className='text-white'>{pickupCity}</div>
                    </div>
                    <Select
                      open={pickupCityOpen}
                      className='absolute w-0 h-0'
                      defaultValue="One Way Trip"
                      style={{ visibility: 'hidden', width: '100%' }}
                      onChange={handlePickupCityChange}
                      onDropdownVisibleChange={(open) => setPickupCityOpen(open)}
                    >
                      {cities.map((city) => (
                        <Option key={city._id} value={city.name}>
                          {city.name}
                        </Option>
                      ))}
                    </Select>
                  </div> */}

              {/* <div className='relative bg-[#404040] mx-1 py-2 rounded-lg text-sm hover:bg-gray-700 hover:cursor-pointer
                w-32
                xl:w-36
              ' onClick={togglePickupDate}>
                <div className='px-2'>
                  <div className='text-yellow-500'>PICKUP DATE</div>
                  <div className='text-white'>{pickupDate?.format('D MMM YYYY')}</div>
                </div>
                <DatePicker
                  open={pickupDateOpen}
                  onOpenChange={(open) => setPickupDateOpen(open)}
                //   onChange={handlePickupDateChange}
                  className='absolute bottom-0 left-0 w-0 h-0'
                  style={{
                    visibility: 'hidden'
                  }}
                  disabledDate={(current: Dayjs | null) =>
                    current ? current.isBefore(dayjs().startOf('day')) || current.isAfter(dayjs().add(30, 'days')) : false
                  }
                />
              </div> */}

              {/* <div className='relative bg-[#404040] mx-1 py-2 rounded-lg text-sm hover:bg-gray-700 hover:cursor-pointer
                w-32
                xl:w-36
              ' onClick={togglePickupTime}>
                <div className='px-2'>
                  <div className='text-yellow-500'>PICKUP TIME</div>
                  <div className='text-white'>{pickupTime}</div>
                </div>
                <Select
                  open={pickupTimeOpen}
                  className='absolute w-0 h-0'
                  defaultValue="One Way Trip"
                  style={{ visibility: 'hidden', width: '100%' }}
                  onChange={handlePickupTimeChange}
                  onDropdownVisibleChange={(open) => setPickupTimeOpen(open)}
                >
                  {menuTimeOptions.map((time) => (
                    <Option key={time.key} value={time.label}>
                      {time.label}
                    </Option>
                  ))}
                </Select>
              </div> */}

                {/* <div className='relative bg-[#404040] mx-1 p-2 rounded-lg text-sm hover:bg-gray-700 hover:cursor-pointer
                w-32
                xl:w-36
              ' onClick={toggleReturnDate}>
                  <div className='text-yellow-500'>RETURN DATE</div>
                  {tripType === 'Round Trip' ?
                    (
                      <>
                        <div className='text-white'>{returnDate?.format('D MMM YYYY')}</div>
                        <DatePicker
                          open={returnDateOpen}
                          onOpenChange={(open) => setReturnDateOpen(open)}
                        //   onChange={handleReturnDateChange}
                          className='absolute bottom-0 left-0 w-0 h-0'
                          style={{
                            visibility: 'hidden'
                          }}
                          disabledDate={(current: Dayjs | null) =>
                            current ? current.isBefore(dayjs().startOf('day')) || current.isAfter(dayjs().add(30, 'days')) : false
                          }
                        />
                      </>
                    ) :
                    (
                      <>
                        <div className='text-white text-center'>--- --- ---</div>
                      </>
                    )
                  }
                </div> */}

                  {/* <div className='relative bg-[#404040] mx-1 py-2 rounded-lg text-sm hover:bg-gray-700 hover:cursor-pointer
                w-32
                xl:w-36
              ' onClick={toggleHourlyPackage}>
                    <div className='px-2'>
                      <div className='text-yellow-500'>SELECT PACKAGE</div>
                      <div className='text-white'>{hourlyPackage}</div>
                    </div>
                    <Select
                      open={hourlyPackageOpen}
                      className='absolute w-0 h-0'
                      defaultValue="One Way Trip"
                      style={{ visibility: 'hidden', width: '100%' }}
                      onChange={handleHourlyPackageChange}
                      onDropdownVisibleChange={(open) => setHourlyPackageOpen(open)}
                    >
                      {menuDistanceOptions.map((distance) => (
                        <Option key={distance.key} value={distance.label}>
                          {distance.label}
                        </Option>
                      ))}
                    </Select>
                  </div> */}

              {/* <div className='w-32 bg-[#404040] mx-1 p-2 rounded-lg text-sm'>
                <div className='text-yellow-500'>DROP TIME</div>
                <div className='text-white'>24:00</div>
              </div> */}

              <button className='bg-yellow-500 hover:bg-yellow-400 mx-1 h-full rounded-lg flex justify-center items-center font-medium
                w-32
                xl:w-36
              '>
                SEARCH
              </button>

            </div>
          </div>
        </div >
      </div >
    </ >
  );
};

export default Search;
