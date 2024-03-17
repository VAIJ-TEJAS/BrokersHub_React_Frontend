/* eslint-disable @typescript-eslint/no-explicit-any */
// import { LeftOutlined, SwapOutlined } from '@ant-design/icons';

import React, { useState, useEffect } from 'react';
import { Select, Input, Button  } from 'antd';
// import { Option } from 'antd/es/mentions';
import './Navbar.css';

interface Item {
    id: number,
    title: string,
    state: string,
    city: string,
    description: string,
    contact: string,
    transaction_type: string,
    price: string,
    downpayment: string,
    ratio_x: string,
    ratio_y: string,
    monthly_rent: string,
    image: string,
    budget: string;
    area: number;
}

interface props {
    page: string;
    setFilteredItems: (filteredItems: Item[]) => void;
    items: Item[];
}

interface OptionType {
  value: string;
  label: string;
}

interface cityType{
  value: string;
  name: string;
  state: string;
}

const Search: React.FC<props> = ({page, setFilteredItems, items}) => {
  
  const [range, setRange] = useState<string>("Select Range");
  const [city, setCity] = useState<string>("Select City");
  const [state, setState] = useState<string>("Select State");
  
  const [rangeOpen, setRangeOpen] = useState<boolean>(false);
  const [CityOpen, setCityOpen] = useState<boolean>(false);
  const [stateOpen, setStateOpen] = useState<boolean>(false);
  
  const [stateList] = useState<OptionType[]>([
    {
    label: "AN",
    value: "Andaman and Nicobar Islands"
    },
    {
    label: "AP",
    value: "Andhra Pradesh"
    },
    {
    label: "AR",
    value: "Arunachal Pradesh"
    },
    {
    label: "AS",
    value: "Assam"
    },
    {
    label: "BR",
    value: "Bihar"
    },
    {
    label: "CG",
    value: "Chandigarh"
    },
    {
    label: "CH",
    value: "Chhattisgarh"
    },
    {
    label: "DH",
    value: "Dadra and Nagar Haveli"
    },
    {
    label: "DD",
    value: "Daman and Diu"
    },
    {
    label: "DL",
    value: "Delhi"
    },
    {
    label: "GA",
    value: "Goa"
    },
    {
    label: "GJ",
    value: "Gujarat"
    },
    {
    label: "HR",
    value: "Haryana"
    },
    {
    label: "HP",
    value: "Himachal Pradesh"
    },
    {
    label: "JK",
    value: "Jammu and Kashmir"
    },
    {
    label: "JH",
    value: "Jharkhand"
    },
    {
    label: "KA",
    value: "Karnataka"
    },
    {
    label: "KL",
    value: "Kerala"
    },
    {
    label: "LD",
    value: "Lakshadweep"
    },
    {
    label: "MP",
    value: "Madhya Pradesh"
    },
    {
    label: "MH",
    value: "Maharashtra"
    },
    {
    label: "MN",
    value: "Manipur"
    },
    {
    label: "ML",
    value: "Meghalaya"
    },
    {
    label: "MZ",
    value: "Mizoram"
    },
    {
    label: "NL",
    value: "Nagaland"
    },
    {
    label: "OR",
    value: "Odisha"
    },
    {
    label: "PY",
    value: "Puducherry"
    },
    {
    label: "PB",
    value: "Punjab"
    },
    {
    label: "RJ",
    value: "Rajasthan"
    },
    {
    label: "SK",
    value: "Sikkim"
    },
    {
    label: "TN",
    value: "Tamil Nadu"
    },
    {
    label: "TS",
    value: "Telangana"
    },
    {
    label: "TR",
    value: "Tripura"
    },
    {
    label: "UK",
    value: "Uttar Pradesh"
    },
    {
    label: "UP",
    value: "Uttarakhand"
    },
    {
    label: "WB",
    value: "West Bengal"
    }
    ]);
  
    const [cities] = useState<cityType[]>([
      {
          value: "Mumbai",
          name: "Mumbai",
          state: "Maharashtra",
      },
      {
          value: "Delhi",
          name: "Delhi",
          state: "Delhi",
      },
      {
          value: "Bengaluru",
          name: "Bengaluru",
          state: "Karnataka",
      },
      {
          value: "Ahmedabad",
          name: "Ahmedabad",
          state: "Gujarat",
      },
      {
          value: "Hyderabad",
          name: "Hyderabad",
          state: "Telangana",
      },
      {
          value: "Chennai",
          name: "Chennai",
          state: "Tamil Nadu",
      },
      {
          value: "Kolkata",
          name: "Kolkata",
          state: "West Bengal",
      },
      {
          value: "Pune",
          name: "Pune",
          state: "Maharashtra",
      },
      {
          value: "Jaipur",
          name: "Jaipur",
          state: "Rajasthan",
      },
      {
          value: "Surat",
          name: "Surat",
          state: "Gujarat",
      },
      {
          value: "Lucknow",
          name: "Lucknow",
          state: "Uttar Pradesh",
      },
      {
          value: "Kanpur",
          name: "Kanpur",
          state: "Uttar Pradesh",
      },
      {
          value: "Nagpur",
          name: "Nagpur",
          state: "Maharashtra",
      },
      {
          value: "Patna",
          name: "Patna",
          state: "Bihar",
      },
      {
          value: "Indore",
          name: "Indore",
          state: "Madhya Pradesh",
      },
      {
          value: "Thane",
          name: "Thane",
          state: "Maharashtra",
      },
      {
          value: "Bhopal",
          name: "Bhopal",
          state: "Madhya Pradesh",
      },
      {
          value: "Visakhapatnam",
          name: "Visakhapatnam",
          state: "Andhra Pradesh",
      },
      {
          value: "Vadodara",
          name: "Vadodara",
          state: "Gujarat",
      },
      {
          value: "Firozabad",
          name: "Firozabad",
          state: "Uttar Pradesh",
      },
      {
          value: "Ludhiana",
          name: "Ludhiana",
          state: "Punjab",
      },
      {
          value: "Rajkot",
          name: "Rajkot",
          state: "Gujarat",
      },
      {
          value: "Agra",
          name: "Agra",
          state: "Uttar Pradesh",
      },
      {
          value: "Siliguri",
          name: "Siliguri",
          state: "West Bengal",
      },
      {
          value: "Nashik",
          name: "Nashik",
          state: "Maharashtra",
      },
      {
          value: "Faridabad",
          name: "Faridabad",
          state: "Haryana",
      },
      {
          value: "Patiala",
          name: "Patiala",
          state: "Punjab",
      },
      {
          value: "Meerut",
          name: "Meerut",
          state: "Uttar Pradesh",
      },
      {
          value: "Kalyan-Dombivali",
          name: "Kalyan-Dombivali",
          state: "Maharashtra",
      },
      {
          value: "Vasai-Virar",
          name: "Vasai-Virar",
          state: "Maharashtra",
      },
      {
          value: "Varanasi",
          name: "Varanasi",
          state: "Uttar Pradesh",
      },
      {
          value: "Srinagar",
          name: "Srinagar",
          state: "Jammu and Kashmir",
      },
      {
          value: "Dhanbad",
          name: "Dhanbad",
          state: "Jharkhand",
      },
      {
          value: "Jodhpur",
          name: "Jodhpur",
          state: "Rajasthan",
      },
      {
          value: "Amritsar",
          name: "Amritsar",
          state: "Punjab",
      },
      {
          value: "Raipur",
          name: "Raipur",
          state: "Chhattisgarh",
      },
      {
          value: "Allahabad",
          name: "Allahabad",
          state: "Uttar Pradesh",
      },
      {
          value: "Coimbatore",
          name: "Coimbatore",
          state: "Tamil Nadu",
      },
      {
          value: "Jabalpur",
          name: "Jabalpur",
          state: "Madhya Pradesh",
      },
      {
          value: "Gwalior",
          name: "Gwalior",
          state: "Madhya Pradesh",
      },
      {
          value: "Vijayawada",
          name: "Vijayawada",
          state: "Andhra Pradesh",
      },
      {
          value: "Madurai",
          name: "Madurai",
          state: "Tamil Nadu",
      },
      {
          value: "Guwahati",
          name: "Guwahati",
          state: "Assam",
      },
      {
          value: "Chandigarh",
          name: "Chandigarh",
          state: "Chandigarh",
      },
      {
          value: "Hubli-Dharwad",
          name: "Hubli-Dharwad",
          state: "Karnataka",
      },
      {
          value: "Amroha",
          name: "Amroha",
          state: "Uttar Pradesh",
      },
      {
          value: "Moradabad",
          name: "Moradabad",
          state: "Uttar Pradesh",
      },
      {
          value: "Gurgaon",
          name: "Gurgaon",
          state: "Haryana",
      },
      {
          value: "Aligarh",
          name: "Aligarh",
          state: "Uttar Pradesh",
      },
      {
          value: "Solapur",
          name: "Solapur",
          state: "Maharashtra",
      },
      {
          value: "Ranchi",
          name: "Ranchi",
          state: "Jharkhand",
      },
      {
          value: "Jalandhar",
          name: "Jalandhar",
          state: "Punjab",
      },
      {
          value: "Tiruchirappalli",
          name: "Tiruchirappalli",
          state: "Tamil Nadu",
      },
      {
          value: "Bhubaneswar",
          name: "Bhubaneswar",
          state: "Odisha",
      },
      {
          value: "Salem",
          name: "Salem",
          state: "Tamil Nadu",
      },
      {
          value: "Warangal",
          name: "Warangal",
          state: "Telangana",
      },
      {
          value: "Mira-Bhayandar",
          name: "Mira-Bhayandar",
          state: "Maharashtra",
      },
      {
          value: "Thiruvananthapuram",
          name: "Thiruvananthapuram",
          state: "Kerala",
      },
      {
          value: "Bhiwandi",
          name: "Bhiwandi",
          state: "Maharashtra",
      },
      {
          value: "Saharanpur",
          name: "Saharanpur",
          state: "Uttar Pradesh",
      },
      {
          value: "Guntur",
          name: "Guntur",
          state: "Andhra Pradesh",
      },
      {
          value: "Amravati",
          name: "Amravati",
          state: "Maharashtra",
      },
      {
          value: "Bikaner",
          name: "Bikaner",
          state: "Rajasthan",
      },
      {
          value: "Noida",
          name: "Noida",
          state: "Uttar Pradesh",
      },
      {
          value: "Jamshedpur",
          name: "Jamshedpur",
          state: "Jharkhand",
      },
      {
          value: "Bhilai Nagar",
          name: "Bhilai Nagar",
          state: "Chhattisgarh",
      },
      {
          value: "Cuttack",
          name: "Cuttack",
          state: "Odisha",
      },
      {
          value: "Kochi",
          name: "Kochi",
          state: "Kerala",
      },
      {
          value: "Udaipur",
          name: "Udaipur",
          state: "Rajasthan",
      },
      {
          value: "Bhavnagar",
          name: "Bhavnagar",
          state: "Gujarat",
      },
      {
          value: "Dehradun",
          name: "Dehradun",
          state: "Uttarakhand",
      },
      {
          value: "Asansol",
          name: "Asansol",
          state: "West Bengal",
      },
      {
          value: "Nanded-Waghala",
          name: "Nanded-Waghala",
          state: "Maharashtra",
      },
      {
          value: "Ajmer",
          name: "Ajmer",
          state: "Rajasthan",
      },
      {
          value: "Jamnagar",
          name: "Jamnagar",
          state: "Gujarat",
      },
      {
          value: "Ujjain",
          name: "Ujjain",
          state: "Madhya Pradesh",
      },
      {
          value: "Sangli",
          name: "Sangli",
          state: "Maharashtra",
      },
      {
          value: "Loni",
          name: "Loni",
          state: "Uttar Pradesh",
      },
      {
          value: "Jhansi",
          name: "Jhansi",
          state: "Uttar Pradesh",
      },
      {
          value: "Pondicherry",
          name: "Pondicherry",
          state: "Puducherry",
      },
      {
          value: "Nellore",
          name: "Nellore",
          state: "Andhra Pradesh",
      },
      {
          value: "Jammu",
          name: "Jammu",
          state: "Jammu and Kashmir",
      },
      {
          value: "Belagavi",
          name: "Belagavi",
          state: "Karnataka",
      },
      {
          value: "Raurkela",
          name: "Raurkela",
          state: "Odisha",
      },
      {
          value: "Mangaluru",
          name: "Mangaluru",
          state: "Karnataka",
      },
      {
          value: "Tirunelveli",
          name: "Tirunelveli",
          state: "Tamil Nadu",
      },
      {
          value: "Malegaon",
          name: "Malegaon",
          state: "Maharashtra",
      },
      {
          value: "Gaya",
          name: "Gaya",
          state: "Bihar",
      },
      {
          value: "Tiruppur",
          name: "Tiruppur",
          state: "Tamil Nadu",
      },
      {
          value: "Davanagere",
          name: "Davanagere",
          state: "Karnataka",
      },
      {
          value: "Kozhikode",
          name: "Kozhikode",
          state: "Kerala",
      },
      {
          value: "Akola",
          name: "Akola",
          state: "Maharashtra",
      },
      {
          value: "Kurnool",
          name: "Kurnool",
          state: "Andhra Pradesh",
      },
      {
          value: "Bokaro Steel City",
          name: "Bokaro Steel City",
          state: "Jharkhand",
      },
      {
          value: "Rajahmundry",
          name: "Rajahmundry",
          state: "Andhra Pradesh",
      },
      {
          value: "Ballari",
          name: "Ballari",
          state: "Karnataka",
      },
      {
          value: "Agartala",
          name: "Agartala",
          state: "Tripura",
      },
      {
          value: "Bhagalpur",
          name: "Bhagalpur",
          state: "Bihar",
      },
      {
          value: "Latur",
          name: "Latur",
          state: "Maharashtra",
      },
      {
          value: "Dhule",
          name: "Dhule",
          state: "Maharashtra",
      },
      {
          value: "Korba",
          name: "Korba",
          state: "Chhattisgarh",
      },
      {
          value: "Bhilwara",
          name: "Bhilwara",
          state: "Rajasthan",
      },
      {
          value: "Brahmapur",
          name: "Brahmapur",
          state: "Odisha",
      },
      {
          value: "Mysore",
          name: "Mysore",
          state: "Karnataka",
      },
      {
          value: "Muzaffarpur",
          name: "Muzaffarpur",
          state: "Bihar",
      },
      {
          value: "Ahmednagar",
          name: "Ahmednagar",
          state: "Maharashtra",
      },
      {
          value: "Kollam",
          name: "Kollam",
          state: "Kerala",
      },
      {
          value: "Raghunathganj",
          name: "Raghunathganj",
          state: "West Bengal",
      },
      {
          value: "Bilaspur",
          name: "Bilaspur",
          state: "Chhattisgarh",
      },
      {
          value: "Shahjahanpur",
          name: "Shahjahanpur",
          state: "Uttar Pradesh",
      },
      {
          value: "Thrissur",
          name: "Thrissur",
          state: "Kerala",
      },
      {
          value: "Alwar",
          name: "Alwar",
          state: "Rajasthan",
      },
      {
          value: "Kakinada",
          name: "Kakinada",
          state: "Andhra Pradesh",
      },
      {
          value: "Nizamabad",
          name: "Nizamabad",
          state: "Telangana",
      },
      {
          value: "Sagar",
          name: "Sagar",
          state: "Madhya Pradesh",
      },
      {
          value: "Tumkur",
          name: "Tumkur",
          state: "Karnataka",
      },
      {
          value: "Hisar",
          name: "Hisar",
          state: "Haryana",
      },
      {
          value: "Rohtak",
          name: "Rohtak",
          state: "Haryana",
      },
      {
          value: "Panipat",
          name: "Panipat",
          state: "Haryana",
      },
      {
          value: "Darbhanga",
          name: "Darbhanga",
          state: "Bihar",
      },
      {
          value: "Kharagpur",
          name: "Kharagpur",
          state: "West Bengal",
      },
      {
          value: "Aizawl",
          name: "Aizawl",
          state: "Mizoram",
      },
      {
          value: "Ichalkaranji",
          name: "Ichalkaranji",
          state: "Maharashtra",
      },
      {
          value: "Tirupati",
          name: "Tirupati",
          state: "Andhra Pradesh",
      },
      {
          value: "Karnal",
          name: "Karnal",
          state: "Haryana",
      },
      {
          value: "Bathinda",
          name: "Bathinda",
          state: "Punjab",
      },
      {
          value: "Rampur",
          name: "Rampur",
          state: "Uttar Pradesh",
      },
      {
          value: "Shivamogga",
          name: "Shivamogga",
          state: "Karnataka",
      },
      {
          value: "Ratlam",
          name: "Ratlam",
          state: "Madhya Pradesh",
      },
      {
          value: "Modinagar",
          name: "Modinagar",
          state: "Uttar Pradesh",
      },
      {
          value: "Durg",
          name: "Durg",
          state: "Chhattisgarh",
      },
      {
          value: "Shillong",
          name: "Shillong",
          state: "Meghalaya",
      },
      {
          value: "Imphal",
          name: "Imphal",
          state: "Manipur",
      },
      {
          value: "Hapur",
          name: "Hapur",
          state: "Uttar Pradesh",
      },
      {
          value: "Ranipet",
          name: "Ranipet",
          state: "Tamil Nadu",
      },
      {
          value: "Anantapur",
          name: "Anantapur",
          state: "Andhra Pradesh",
      },
      {
          value: "Arrah",
          name: "Arrah",
          state: "Bihar",
      },
      {
          value: "Karimnagar",
          name: "Karimnagar",
          state: "Telangana",
      },
      {
          value: "Parbhani",
          name: "Parbhani",
          state: "Maharashtra",
      },
      {
          value: "Etawah",
          name: "Etawah",
          state: "Uttar Pradesh",
      },
      {
          value: "Bharatpur",
          name: "Bharatpur",
          state: "Rajasthan",
      },
      {
          value: "Begusarai",
          name: "Begusarai",
          state: "Bihar",
      },
      {
          value: "New Delhi",
          name: "New Delhi",
          state: "Delhi",
      },
      {
          value: "Chhapra",
          name: "Chhapra",
          state: "Bihar",
      },
      {
          value: "Kadapa",
          name: "Kadapa",
          state: "Andhra Pradesh",
      },
      {
          value: "Ramagundam",
          name: "Ramagundam",
          state: "Telangana",
      },
      {
          value: "Pali",
          name: "Pali",
          state: "Rajasthan",
      },
      {
          value: "Satna",
          name: "Satna",
          state: "Madhya Pradesh",
      },
      {
          value: "Vizianagaram",
          name: "Vizianagaram",
          state: "Andhra Pradesh",
      },
      {
          value: "Katihar",
          name: "Katihar",
          state: "Bihar",
      },
      {
          value: "Hardwar",
          name: "Hardwar",
          state: "Uttarakhand",
      },
      {
          value: "Sonipat",
          name: "Sonipat",
          state: "Haryana",
      },
      {
          value: "Nagercoil",
          name: "Nagercoil",
          state: "Tamil Nadu",
      },
      {
          value: "Thanjavur",
          name: "Thanjavur",
          state: "Tamil Nadu",
      },
      {
          value: "Murwara (Katni)",
          name: "Murwara (Katni)",
          state: "Madhya Pradesh",
      },
      {
          value: "Naihati",
          name: "Naihati",
          state: "West Bengal",
      },
      {
          value: "Sambhal",
          name: "Sambhal",
          state: "Uttar Pradesh",
      },
      {
          value: "Nadiad",
          name: "Nadiad",
          state: "Gujarat",
      },
      {
          value: "Yamunanagar",
          name: "Yamunanagar",
          state: "Haryana",
      },
      {
          value: "English Bazar",
          name: "English Bazar",
          state: "West Bengal",
      },
      {
          value: "Eluru",
          name: "Eluru",
          state: "Andhra Pradesh",
      },
      {
          value: "Munger",
          name: "Munger",
          state: "Bihar",
      },
      {
          value: "Panchkula",
          name: "Panchkula",
          state: "Haryana",
      },
      {
          value: "Raayachuru",
          name: "Raayachuru",
          state: "Karnataka",
      },
      {
          value: "Panvel",
          name: "Panvel",
          state: "Maharashtra",
      },
      {
          value: "Deoghar",
          name: "Deoghar",
          state: "Jharkhand",
      },
      {
          value: "Ongole",
          name: "Ongole",
          state: "Andhra Pradesh",
      },
      {
          value: "Nandyal",
          name: "Nandyal",
          state: "Andhra Pradesh",
      },
      {
          value: "Morena",
          name: "Morena",
          state: "Madhya Pradesh",
      },
      {
          value: "Bhiwani",
          name: "Bhiwani",
          state: "Haryana",
      },
      {
          value: "Porbandar",
          name: "Porbandar",
          state: "Gujarat",
      },
      {
          value: "Palakkad",
          name: "Palakkad",
          state: "Kerala",
      },
      {
          value: "Anand",
          name: "Anand",
          state: "Gujarat",
      },
      {
          value: "Purnia",
          name: "Purnia",
          state: "Bihar",
      },
      {
          value: "Baharampur",
          name: "Baharampur",
          state: "West Bengal",
      },
      {
          value: "Barmer",
          name: "Barmer",
          state: "Rajasthan",
      },
      {
          value: "Morvi",
          name: "Morvi",
          state: "Gujarat",
      },
      {
          value: "Orai",
          name: "Orai",
          state: "Uttar Pradesh",
      },
      {
          value: "Bahraich",
          name: "Bahraich",
          state: "Uttar Pradesh",
      },
      {
          value: "Sikar",
          name: "Sikar",
          state: "Rajasthan",
      },
      {
          value: "Vellore",
          name: "Vellore",
          state: "Tamil Nadu",
      },
      {
          value: "Singrauli",
          name: "Singrauli",
          state: "Madhya Pradesh",
      },
      {
          value: "Khammam",
          name: "Khammam",
          state: "Telangana",
      },
      {
          value: "Mahesana",
          name: "Mahesana",
          state: "Gujarat",
      },
      {
          value: "Silchar",
          name: "Silchar",
          state: "Assam",
      },
      {
          value: "Sambalpur",
          name: "Sambalpur",
          state: "Odisha",
      },
      {
          value: "Rewa",
          name: "Rewa",
          state: "Madhya Pradesh",
      },
      {
          value: "Unnao",
          name: "Unnao",
          state: "Uttar Pradesh",
      },
      {
          value: "Hugli-Chinsurah",
          name: "Hugli-Chinsurah",
          state: "West Bengal",
      },
      {
          value: "Raiganj",
          name: "Raiganj",
          state: "West Bengal",
      },
      {
          value: "Phusro",
          name: "Phusro",
          state: "Jharkhand",
      },
      {
          value: "Adityapur",
          name: "Adityapur",
          state: "Jharkhand",
      },
      {
          value: "Alappuzha",
          name: "Alappuzha",
          state: "Kerala",
      },
      {
          value: "Bahadurgarh",
          name: "Bahadurgarh",
          state: "Haryana",
      },
      {
          value: "Machilipatnam",
          name: "Machilipatnam",
          state: "Andhra Pradesh",
      },
      {
          value: "Rae Bareli",
          name: "Rae Bareli",
          state: "Uttar Pradesh",
      },
      {
          value: "Jalpaiguri",
          name: "Jalpaiguri",
          state: "West Bengal",
      },
      {
          value: "Bharuch",
          name: "Bharuch",
          state: "Gujarat",
      },
      {
          value: "Pathankot",
          name: "Pathankot",
          state: "Punjab",
      },
      {
          value: "Hoshiarpur",
          name: "Hoshiarpur",
          state: "Punjab",
      },
      {
          value: "Baramula",
          name: "Baramula",
          state: "Jammu and Kashmir",
      },
      {
          value: "Adoni",
          name: "Adoni",
          state: "Andhra Pradesh",
      },
      {
          value: "Jind",
          name: "Jind",
          state: "Haryana",
      },
      {
          value: "Tonk",
          name: "Tonk",
          state: "Rajasthan",
      },
      {
          value: "Tenali",
          name: "Tenali",
          state: "Andhra Pradesh",
      },
      {
          value: "Kancheepuram",
          name: "Kancheepuram",
          state: "Tamil Nadu",
      },
      {
          value: "Vapi",
          name: "Vapi",
          state: "Gujarat",
      },
      {
          value: "Sirsa",
          name: "Sirsa",
          state: "Haryana",
      },
      {
          value: "Navsari",
          name: "Navsari",
          state: "Gujarat",
      },
      {
          value: "Mahbubnagar",
          name: "Mahbubnagar",
          state: "Telangana",
      },
      {
          value: "Puri",
          name: "Puri",
          state: "Odisha",
      },
      {
          value: "Robertson Pet",
          name: "Robertson Pet",
          state: "Karnataka",
      },
      {
          value: "Erode",
          name: "Erode",
          state: "Tamil Nadu",
      },
      {
          value: "Batala",
          name: "Batala",
          state: "Punjab",
      },
      {
          value: "Haldwani-cum-Kathgodam",
          name: "Haldwani-cum-Kathgodam",
          state: "Uttarakhand",
      },
      {
          value: "Vidisha",
          name: "Vidisha",
          state: "Madhya Pradesh",
      },
      {
          value: "Saharsa",
          name: "Saharsa",
          state: "Bihar",
      },
      {
          value: "Thanesar",
          name: "Thanesar",
          state: "Haryana",
      },
      {
          value: "Chittoor",
          name: "Chittoor",
          state: "Andhra Pradesh",
      },
      {
          value: "Veraval",
          name: "Veraval",
          state: "Gujarat",
      },
      {
          value: "Lakhimpur",
          name: "Lakhimpur",
          state: "Uttar Pradesh",
      },
      {
          value: "Sitapur",
          name: "Sitapur",
          state: "Uttar Pradesh",
      },
      {
          value: "Hindupur",
          name: "Hindupur",
          state: "Andhra Pradesh",
      },
      {
          value: "Santipur",
          name: "Santipur",
          state: "West Bengal",
      },
      {
          value: "Balurghat",
          name: "Balurghat",
          state: "West Bengal",
      },
      {
          value: "Ganjbasoda",
          name: "Ganjbasoda",
          state: "Madhya Pradesh",
      },
      {
          value: "Moga",
          name: "Moga",
          state: "Punjab",
      },
      {
          value: "Proddatur",
          name: "Proddatur",
          state: "Andhra Pradesh",
      },
      {
          value: "Srinagar",
          name: "Srinagar",
          state: "Uttarakhand",
      },
      {
          value: "Medinipur",
          name: "Medinipur",
          state: "West Bengal",
      },
      {
          value: "Habra",
          name: "Habra",
          state: "West Bengal",
      },
      {
          value: "Sasaram",
          name: "Sasaram",
          state: "Bihar",
      },
      {
          value: "Hajipur",
          name: "Hajipur",
          state: "Bihar",
      },
      {
          value: "Bhuj",
          name: "Bhuj",
          state: "Gujarat",
      },
      {
          value: "Shivpuri",
          name: "Shivpuri",
          state: "Madhya Pradesh",
      },
      {
          value: "Ranaghat",
          name: "Ranaghat",
          state: "West Bengal",
      },
      {
          value: "Shimla",
          name: "Shimla",
          state: "Himachal Pradesh",
      },
      {
          value: "Tiruvannamalai",
          name: "Tiruvannamalai",
          state: "Tamil Nadu",
      },
      {
          value: "Kaithal",
          name: "Kaithal",
          state: "Haryana",
      },
      {
          value: "Rajnandgaon",
          name: "Rajnandgaon",
          state: "Chhattisgarh",
      },
      {
          value: "Godhra",
          name: "Godhra",
          state: "Gujarat",
      },
      {
          value: "Hazaribag",
          name: "Hazaribag",
          state: "Jharkhand",
      },
      {
          value: "Bhimavaram",
          name: "Bhimavaram",
          state: "Andhra Pradesh",
      },
      {
          value: "Mandsaur",
          name: "Mandsaur",
          state: "Madhya Pradesh",
      },
      {
          value: "Dibrugarh",
          name: "Dibrugarh",
          state: "Assam",
      },
      {
          value: "Kolar",
          name: "Kolar",
          state: "Karnataka",
      },
      {
          value: "Bankura",
          name: "Bankura",
          state: "West Bengal",
      },
      {
          value: "Mandya",
          name: "Mandya",
          state: "Karnataka",
      },
      {
          value: "Dehri-on-Sone",
          name: "Dehri-on-Sone",
          state: "Bihar",
      },
      {
          value: "Madanapalle",
          name: "Madanapalle",
          state: "Andhra Pradesh",
      },
      {
          value: "Malerkotla",
          name: "Malerkotla",
          state: "Punjab",
      },
      {
          value: "Lalitpur",
          name: "Lalitpur",
          state: "Uttar Pradesh",
      },
      {
          value: "Bettiah",
          name: "Bettiah",
          state: "Bihar",
      },
      {
          value: "Pollachi",
          name: "Pollachi",
          state: "Tamil Nadu",
      },
      {
          value: "Khanna",
          name: "Khanna",
          state: "Punjab",
      },
      {
          value: "Neemuch",
          name: "Neemuch",
          state: "Madhya Pradesh",
      },
      {
          value: "Palwal",
          name: "Palwal",
          state: "Haryana",
      },
      {
          value: "Palanpur",
          name: "Palanpur",
          state: "Gujarat",
      },
      {
          value: "Guntakal",
          name: "Guntakal",
          state: "Andhra Pradesh",
      },
      {
          value: "Nabadwip",
          name: "Nabadwip",
          state: "West Bengal",
      },
      {
          value: "Udupi",
          name: "Udupi",
          state: "Karnataka",
      },
      {
          value: "Jagdalpur",
          name: "Jagdalpur",
          state: "Chhattisgarh",
      },
      {
          value: "Motihari",
          name: "Motihari",
          state: "Bihar",
      },
      {
          value: "Pilibhit",
          name: "Pilibhit",
          state: "Uttar Pradesh",
      },
      {
          value: "Dimapur",
          name: "Dimapur",
          state: "Nagaland",
      },
      {
          value: "Mohali",
          name: "Mohali",
          state: "Punjab",
      },
      {
          value: "Sadulpur",
          name: "Sadulpur",
          state: "Rajasthan",
      },
      {
          value: "Rajapalayam",
          name: "Rajapalayam",
          state: "Tamil Nadu",
      },
      {
          value: "Dharmavaram",
          name: "Dharmavaram",
          state: "Andhra Pradesh",
      },
      {
          value: "Kashipur",
          name: "Kashipur",
          state: "Uttarakhand",
      },
      {
          value: "Sivakasi",
          name: "Sivakasi",
          state: "Tamil Nadu",
      },
      {
          value: "Darjiling",
          name: "Darjiling",
          state: "West Bengal",
      },
      {
          value: "Chikkamagaluru",
          name: "Chikkamagaluru",
          state: "Karnataka",
      },
      {
          value: "Gudivada",
          name: "Gudivada",
          state: "Andhra Pradesh",
      },
      {
          value: "Baleshwar Town",
          name: "Baleshwar Town",
          state: "Odisha",
      },
      {
          value: "Mancherial",
          name: "Mancherial",
          state: "Telangana",
      },
      {
          value: "Srikakulam",
          name: "Srikakulam",
          state: "Andhra Pradesh",
      },
      {
          value: "Adilabad",
          name: "Adilabad",
          state: "Telangana",
      },
      {
          value: "Yavatmal",
          name: "Yavatmal",
          state: "Maharashtra",
      },
      {
          value: "Barnala",
          name: "Barnala",
          state: "Punjab",
      },
      {
          value: "Nagaon",
          name: "Nagaon",
          state: "Assam",
      },
      {
          value: "Narasaraopet",
          name: "Narasaraopet",
          state: "Andhra Pradesh",
      },
      {
          value: "Raigarh",
          name: "Raigarh",
          state: "Chhattisgarh",
      },
      {
          value: "Roorkee",
          name: "Roorkee",
          state: "Uttarakhand",
      },
      {
          value: "Valsad",
          name: "Valsad",
          state: "Gujarat",
      },
      {
          value: "Ambikapur",
          name: "Ambikapur",
          state: "Chhattisgarh",
      },
      {
          value: "Giridih",
          name: "Giridih",
          state: "Jharkhand",
      },
      {
          value: "Chandausi",
          name: "Chandausi",
          state: "Uttar Pradesh",
      },
      {
          value: "Purulia",
          name: "Purulia",
          state: "West Bengal",
      },
      {
          value: "Patan",
          name: "Patan",
          state: "Gujarat",
      },
      {
          value: "Bagaha",
          name: "Bagaha",
          state: "Bihar",
      },
      {
          value: "Hardoi ",
          name: "Hardoi ",
          state: "Uttar Pradesh",
      },
      {
          value: "Achalpur",
          name: "Achalpur",
          state: "Maharashtra",
      },
      {
          value: "Osmanabad",
          name: "Osmanabad",
          state: "Maharashtra",
      },
      {
          value: "Deesa",
          name: "Deesa",
          state: "Gujarat",
      },
      {
          value: "Nandurbar",
          name: "Nandurbar",
          state: "Maharashtra",
      },
      {
          value: "Azamgarh",
          name: "Azamgarh",
          state: "Uttar Pradesh",
      },
      {
          value: "Ramgarh",
          name: "Ramgarh",
          state: "Jharkhand",
      },
      {
          value: "Firozpur",
          name: "Firozpur",
          state: "Punjab",
      },
      {
          value: "Baripada Town",
          name: "Baripada Town",
          state: "Odisha",
      },
      {
          value: "Karwar",
          name: "Karwar",
          state: "Karnataka",
      },
      {
          value: "Siwan",
          name: "Siwan",
          state: "Bihar",
      },
      {
          value: "Rajampet",
          name: "Rajampet",
          state: "Andhra Pradesh",
      },
      {
          value: "Pudukkottai",
          name: "Pudukkottai",
          state: "Tamil Nadu",
      },
      {
          value: "Anantnag",
          name: "Anantnag",
          state: "Jammu and Kashmir",
      },
      {
          value: "Tadpatri",
          name: "Tadpatri",
          state: "Andhra Pradesh",
      },
      {
          value: "Satara",
          name: "Satara",
          state: "Maharashtra",
      },
      {
          value: "Bhadrak",
          name: "Bhadrak",
          state: "Odisha",
      },
      {
          value: "Kishanganj",
          name: "Kishanganj",
          state: "Bihar",
      },
      {
          value: "Suryapet",
          name: "Suryapet",
          state: "Telangana",
      },
      {
          value: "Wardha",
          name: "Wardha",
          state: "Maharashtra",
      },
      {
          value: "Ranebennuru",
          name: "Ranebennuru",
          state: "Karnataka",
      },
      {
          value: "Amreli",
          name: "Amreli",
          state: "Gujarat",
      },
      {
          value: "Neyveli (TS)",
          name: "Neyveli (TS)",
          state: "Tamil Nadu",
      },
      {
          value: "Jamalpur",
          name: "Jamalpur",
          state: "Bihar",
      },
      {
          value: "Marmagao",
          name: "Marmagao",
          state: "Goa",
      },
      {
          value: "Udgir",
          name: "Udgir",
          state: "Maharashtra",
      },
      {
          value: "Tadepalligudem",
          name: "Tadepalligudem",
          state: "Andhra Pradesh",
      },
      {
          value: "Nagapattinam",
          name: "Nagapattinam",
          state: "Tamil Nadu",
      },
      {
          value: "Buxar",
          name: "Buxar",
          state: "Bihar",
      },
      {
          value: "Aurangabad",
          name: "Aurangabad",
          state: "Maharashtra",
      },
      {
          value: "Jehanabad",
          name: "Jehanabad",
          state: "Bihar",
      },
      {
          value: "Phagwara",
          name: "Phagwara",
          state: "Punjab",
      },
      {
          value: "Khair",
          name: "Khair",
          state: "Uttar Pradesh",
      },
      {
          value: "Sawai Madhopur",
          name: "Sawai Madhopur",
          state: "Rajasthan",
      },
      {
          value: "Kapurthala",
          name: "Kapurthala",
          state: "Punjab",
      },
      {
          value: "Chilakaluripet",
          name: "Chilakaluripet",
          state: "Andhra Pradesh",
      },
      {
          value: "Aurangabad",
          name: "Aurangabad",
          state: "Bihar",
      },
      {
          value: "Malappuram",
          name: "Malappuram",
          state: "Kerala",
      },
      {
          value: "Rewari",
          name: "Rewari",
          state: "Haryana",
      },
      {
          value: "Nagaur",
          name: "Nagaur",
          state: "Rajasthan",
      },
      {
          value: "Sultanpur",
          name: "Sultanpur",
          state: "Uttar Pradesh",
      },
      {
          value: "Nagda",
          name: "Nagda",
          state: "Madhya Pradesh",
      },
      {
          value: "Port Blair",
          name: "Port Blair",
          state: "Andaman and Nicobar Islands",
      },
      {
          value: "Lakhisarai",
          name: "Lakhisarai",
          state: "Bihar",
      },
      {
          value: "Panaji",
          name: "Panaji",
          state: "Goa",
      },
      {
          value: "Tinsukia",
          name: "Tinsukia",
          state: "Assam",
      },
      {
          value: "Itarsi",
          name: "Itarsi",
          state: "Madhya Pradesh",
      },
      {
          value: "Kohima",
          name: "Kohima",
          state: "Nagaland",
      },
      {
          value: "Balangir",
          name: "Balangir",
          state: "Odisha",
      },
      {
          value: "Nawada",
          name: "Nawada",
          state: "Bihar",
      },
      {
          value: "Jharsuguda",
          name: "Jharsuguda",
          state: "Odisha",
      },
      {
          value: "Jagtial",
          name: "Jagtial",
          state: "Telangana",
      },
      {
          value: "Viluppuram",
          name: "Viluppuram",
          state: "Tamil Nadu",
      },
      {
          value: "Amalner",
          name: "Amalner",
          state: "Maharashtra",
      },
      {
          value: "Zirakpur",
          name: "Zirakpur",
          state: "Punjab",
      },
      {
          value: "Tanda",
          name: "Tanda",
          state: "Uttar Pradesh",
      },
      {
          value: "Tiruchengode",
          name: "Tiruchengode",
          state: "Tamil Nadu",
      },
      {
          value: "Nagina",
          name: "Nagina",
          state: "Uttar Pradesh",
      },
      {
          value: "Yemmiganur",
          name: "Yemmiganur",
          state: "Andhra Pradesh",
      },
      {
          value: "Vaniyambadi",
          name: "Vaniyambadi",
          state: "Tamil Nadu",
      },
      {
          value: "Sarni",
          name: "Sarni",
          state: "Madhya Pradesh",
      },
      {
          value: "Theni Allinagaram",
          name: "Theni Allinagaram",
          state: "Tamil Nadu",
      },
      {
          value: "Margao",
          name: "Margao",
          state: "Goa",
      },
      {
          value: "Akot",
          name: "Akot",
          state: "Maharashtra",
      },
      {
          value: "Sehore",
          name: "Sehore",
          state: "Madhya Pradesh",
      },
      {
          value: "Mhow Cantonment",
          name: "Mhow Cantonment",
          state: "Madhya Pradesh",
      },
      {
          value: "Kot Kapura",
          name: "Kot Kapura",
          state: "Punjab",
      },
      {
          value: "Makrana",
          name: "Makrana",
          state: "Rajasthan",
      },
      {
          value: "Pandharpur",
          name: "Pandharpur",
          state: "Maharashtra",
      },
      {
          value: "Miryalaguda",
          name: "Miryalaguda",
          state: "Telangana",
      },
      {
          value: "Shamli",
          name: "Shamli",
          state: "Uttar Pradesh",
      },
      {
          value: "Seoni",
          name: "Seoni",
          state: "Madhya Pradesh",
      },
      {
          value: "Ranibennur",
          name: "Ranibennur",
          state: "Karnataka",
      },
      {
          value: "Kadiri",
          name: "Kadiri",
          state: "Andhra Pradesh",
      },
      {
          value: "Shrirampur",
          name: "Shrirampur",
          state: "Maharashtra",
      },
      {
          value: "Rudrapur",
          name: "Rudrapur",
          state: "Uttarakhand",
      },
      {
          value: "Parli",
          name: "Parli",
          state: "Maharashtra",
      },
      {
          value: "Najibabad",
          name: "Najibabad",
          state: "Uttar Pradesh",
      },
      {
          value: "Nirmal",
          name: "Nirmal",
          state: "Telangana",
      },
      {
          value: "Udhagamandalam",
          name: "Udhagamandalam",
          state: "Tamil Nadu",
      },
      {
          value: "Shikohabad",
          name: "Shikohabad",
          state: "Uttar Pradesh",
      },
      {
          value: "Jhumri Tilaiya",
          name: "Jhumri Tilaiya",
          state: "Jharkhand",
      },
      {
          value: "Aruppukkottai",
          name: "Aruppukkottai",
          state: "Tamil Nadu",
      },
      {
          value: "Ponnani",
          name: "Ponnani",
          state: "Kerala",
      },
      {
          value: "Jamui",
          name: "Jamui",
          state: "Bihar",
      },
      {
          value: "Sitamarhi",
          name: "Sitamarhi",
          state: "Bihar",
      },
      {
          value: "Chirala",
          name: "Chirala",
          state: "Andhra Pradesh",
      },
      {
          value: "Anjar",
          name: "Anjar",
          state: "Gujarat",
      },
      {
          value: "Karaikal",
          name: "Karaikal",
          state: "Puducherry",
      },
      {
          value: "Hansi",
          name: "Hansi",
          state: "Haryana",
      },
      {
          value: "Anakapalle",
          name: "Anakapalle",
          state: "Andhra Pradesh",
      },
      {
          value: "Mahasamund",
          name: "Mahasamund",
          state: "Chhattisgarh",
      },
      {
          value: "Faridkot",
          name: "Faridkot",
          state: "Punjab",
      },
      {
          value: "Saunda",
          name: "Saunda",
          state: "Jharkhand",
      },
      {
          value: "Dhoraji",
          name: "Dhoraji",
          state: "Gujarat",
      },
      {
          value: "Paramakudi",
          name: "Paramakudi",
          state: "Tamil Nadu",
      },
      {
          value: "Balaghat",
          name: "Balaghat",
          state: "Madhya Pradesh",
      },
      {
          value: "Sujangarh",
          name: "Sujangarh",
          state: "Rajasthan",
      },
      {
          value: "Khambhat",
          name: "Khambhat",
          state: "Gujarat",
      },
      {
          value: "Muktsar",
          name: "Muktsar",
          state: "Punjab",
      },
      {
          value: "Rajpura",
          name: "Rajpura",
          state: "Punjab",
      },
      {
          value: "Kavali",
          name: "Kavali",
          state: "Andhra Pradesh",
      },
      {
          value: "Dhamtari",
          name: "Dhamtari",
          state: "Chhattisgarh",
      },
      {
          value: "Ashok Nagar",
          name: "Ashok Nagar",
          state: "Madhya Pradesh",
      },
      {
          value: "Sardarshahar",
          name: "Sardarshahar",
          state: "Rajasthan",
      },
      {
          value: "Mahuva",
          name: "Mahuva",
          state: "Gujarat",
      },
      {
          value: "Bargarh",
          name: "Bargarh",
          state: "Odisha",
      },
      {
          value: "Kamareddy",
          name: "Kamareddy",
          state: "Telangana",
      },
      {
          value: "Sahibganj",
          name: "Sahibganj",
          state: "Jharkhand",
      },
      {
          value: "Kothagudem",
          name: "Kothagudem",
          state: "Telangana",
      },
      {
          value: "Ramanagaram",
          name: "Ramanagaram",
          state: "Karnataka",
      },
      {
          value: "Gokak",
          name: "Gokak",
          state: "Karnataka",
      },
      {
          value: "Tikamgarh",
          name: "Tikamgarh",
          state: "Madhya Pradesh",
      },
      {
          value: "Araria",
          name: "Araria",
          state: "Bihar",
      },
      {
          value: "Rishikesh",
          name: "Rishikesh",
          state: "Uttarakhand",
      },
      {
          value: "Shahdol",
          name: "Shahdol",
          state: "Madhya Pradesh",
      },
      {
          value: "Medininagar (Daltonganj)",
          name: "Medininagar (Daltonganj)",
          state: "Jharkhand",
      },
      {
          value: "Arakkonam",
          name: "Arakkonam",
          state: "Tamil Nadu",
      },
      {
          value: "Washim",
          name: "Washim",
          state: "Maharashtra",
      },
      {
          value: "Sangrur",
          name: "Sangrur",
          state: "Punjab",
      },
      {
          value: "Bodhan",
          name: "Bodhan",
          state: "Telangana",
      },
      {
          value: "Fazilka",
          name: "Fazilka",
          state: "Punjab",
      },
      {
          value: "Palacole",
          name: "Palacole",
          state: "Andhra Pradesh",
      },
      {
          value: "Keshod",
          name: "Keshod",
          state: "Gujarat",
      },
      {
          value: "Sullurpeta",
          name: "Sullurpeta",
          state: "Andhra Pradesh",
      },
      {
          value: "Wadhwan",
          name: "Wadhwan",
          state: "Gujarat",
      },
      {
          value: "Gurdaspur",
          name: "Gurdaspur",
          state: "Punjab",
      },
      {
          value: "Vatakara",
          name: "Vatakara",
          state: "Kerala",
      },
      {
          value: "Tura",
          name: "Tura",
          state: "Meghalaya",
      },
      {
          value: "Narnaul",
          name: "Narnaul",
          state: "Haryana",
      },
      {
          value: "Kharar",
          name: "Kharar",
          state: "Punjab",
      },
      {
          value: "Yadgir",
          name: "Yadgir",
          state: "Karnataka",
      },
      {
          value: "Ambejogai",
          name: "Ambejogai",
          state: "Maharashtra",
      },
      {
          value: "Ankleshwar",
          name: "Ankleshwar",
          state: "Gujarat",
      },
      {
          value: "Savarkundla",
          name: "Savarkundla",
          state: "Gujarat",
      },
      {
          value: "Paradip",
          name: "Paradip",
          state: "Odisha",
      },
      {
          value: "Virudhachalam",
          name: "Virudhachalam",
          state: "Tamil Nadu",
      },
      {
          value: "Kanhangad",
          name: "Kanhangad",
          state: "Kerala",
      },
      {
          value: "Kadi",
          name: "Kadi",
          state: "Gujarat",
      },
      {
          value: "Srivilliputhur",
          name: "Srivilliputhur",
          state: "Tamil Nadu",
      },
      {
          value: "Gobindgarh",
          name: "Gobindgarh",
          state: "Punjab",
      },
      {
          value: "Tindivanam",
          name: "Tindivanam",
          state: "Tamil Nadu",
      },
      {
          value: "Mansa",
          name: "Mansa",
          state: "Punjab",
      },
      {
          value: "Taliparamba",
          name: "Taliparamba",
          state: "Kerala",
      },
      {
          value: "Manmad",
          name: "Manmad",
          state: "Maharashtra",
      },
      {
          value: "Tanuku",
          name: "Tanuku",
          state: "Andhra Pradesh",
      },
      {
          value: "Rayachoti",
          name: "Rayachoti",
          state: "Andhra Pradesh",
      },
      {
          value: "Virudhunagar",
          name: "Virudhunagar",
          state: "Tamil Nadu",
      },
      {
          value: "Koyilandy",
          name: "Koyilandy",
          state: "Kerala",
      },
      {
          value: "Jorhat",
          name: "Jorhat",
          state: "Assam",
      },
      {
          value: "Karur",
          name: "Karur",
          state: "Tamil Nadu",
      },
      {
          value: "Valparai",
          name: "Valparai",
          state: "Tamil Nadu",
      },
      {
          value: "Srikalahasti",
          name: "Srikalahasti",
          state: "Andhra Pradesh",
      },
      {
          value: "Neyyattinkara",
          name: "Neyyattinkara",
          state: "Kerala",
      },
      {
          value: "Bapatla",
          name: "Bapatla",
          state: "Andhra Pradesh",
      },
      {
          value: "Fatehabad",
          name: "Fatehabad",
          state: "Haryana",
      },
      {
          value: "Malout",
          name: "Malout",
          state: "Punjab",
      },
      {
          value: "Sankarankovil",
          name: "Sankarankovil",
          state: "Tamil Nadu",
      },
      {
          value: "Tenkasi",
          name: "Tenkasi",
          state: "Tamil Nadu",
      },
      {
          value: "Ratnagiri",
          name: "Ratnagiri",
          state: "Maharashtra",
      },
      {
          value: "Rabkavi Banhatti",
          name: "Rabkavi Banhatti",
          state: "Karnataka",
      },
      {
          value: "Sikandrabad",
          name: "Sikandrabad",
          state: "Uttar Pradesh",
      },
      {
          value: "Chaibasa",
          name: "Chaibasa",
          state: "Jharkhand",
      },
      {
          value: "Chirmiri",
          name: "Chirmiri",
          state: "Chhattisgarh",
      },
      {
          value: "Palwancha",
          name: "Palwancha",
          state: "Telangana",
      },
      {
          value: "Bhawanipatna",
          name: "Bhawanipatna",
          state: "Odisha",
      },
      {
          value: "Kayamkulam",
          name: "Kayamkulam",
          state: "Kerala",
      },
      {
          value: "Pithampur",
          name: "Pithampur",
          state: "Madhya Pradesh",
      },
      {
          value: "Nabha",
          name: "Nabha",
          state: "Punjab",
      },
      {
          value: "Shahabad, Hardoi",
          name: "Shahabad, Hardoi",
          state: "Uttar Pradesh",
      },
      {
          value: "Dhenkanal",
          name: "Dhenkanal",
          state: "Odisha",
      },
      {
          value: "Uran Islampur",
          name: "Uran Islampur",
          state: "Maharashtra",
      },
      {
          value: "Gopalganj",
          name: "Gopalganj",
          state: "Bihar",
      },
      {
          value: "Bongaigaon City",
          name: "Bongaigaon City",
          state: "Assam",
      },
      {
          value: "Palani",
          name: "Palani",
          state: "Tamil Nadu",
      },
      {
          value: "Pusad",
          name: "Pusad",
          state: "Maharashtra",
      },
      {
          value: "Sopore",
          name: "Sopore",
          state: "Jammu and Kashmir",
      },
      {
          value: "Pilkhuwa",
          name: "Pilkhuwa",
          state: "Uttar Pradesh",
      },
      {
          value: "Tarn Taran",
          name: "Tarn Taran",
          state: "Punjab",
      },
      {
          value: "Renukoot",
          name: "Renukoot",
          state: "Uttar Pradesh",
      },
      {
          value: "Mandamarri",
          name: "Mandamarri",
          state: "Telangana",
      },
      {
          value: "Shahabad",
          name: "Shahabad",
          state: "Karnataka",
      },
      {
          value: "Barbil",
          name: "Barbil",
          state: "Odisha",
      },
      {
          value: "Koratla",
          name: "Koratla",
          state: "Telangana",
      },
      {
          value: "Madhubani",
          name: "Madhubani",
          state: "Bihar",
      },
      {
          value: "Arambagh",
          name: "Arambagh",
          state: "West Bengal",
      },
      {
          value: "Gohana",
          name: "Gohana",
          state: "Haryana",
      },
      {
          value: "Ladnu",
          name: "Ladnu",
          state: "Rajasthan",
      },
      {
          value: "Pattukkottai",
          name: "Pattukkottai",
          state: "Tamil Nadu",
      },
      {
          value: "Sirsi",
          name: "Sirsi",
          state: "Karnataka",
      },
      {
          value: "Sircilla",
          name: "Sircilla",
          state: "Telangana",
      },
      {
          value: "Tamluk",
          name: "Tamluk",
          state: "West Bengal",
      },
      {
          value: "Jagraon",
          name: "Jagraon",
          state: "Punjab",
      },
      {
          value: "AlipurdUrban Agglomerationr",
          name: "AlipurdUrban Agglomerationr",
          state: "West Bengal",
      },
      {
          value: "Alirajpur",
          name: "Alirajpur",
          state: "Madhya Pradesh",
      },
      {
          value: "Tandur",
          name: "Tandur",
          state: "Telangana",
      },
      {
          value: "Naidupet",
          name: "Naidupet",
          state: "Andhra Pradesh",
      },
      {
          value: "Tirupathur",
          name: "Tirupathur",
          state: "Tamil Nadu",
      },
      {
          value: "Tohana",
          name: "Tohana",
          state: "Haryana",
      },
      {
          value: "Ratangarh",
          name: "Ratangarh",
          state: "Rajasthan",
      },
      {
          value: "Dhubri",
          name: "Dhubri",
          state: "Assam",
      },
      {
          value: "Masaurhi",
          name: "Masaurhi",
          state: "Bihar",
      },
      {
          value: "Visnagar",
          name: "Visnagar",
          state: "Gujarat",
      },
      {
          value: "Vrindavan",
          name: "Vrindavan",
          state: "Uttar Pradesh",
      },
      {
          value: "Nokha",
          name: "Nokha",
          state: "Rajasthan",
      },
      {
          value: "Nagari",
          name: "Nagari",
          state: "Andhra Pradesh",
      },
      {
          value: "Narwana",
          name: "Narwana",
          state: "Haryana",
      },
      {
          value: "Ramanathapuram",
          name: "Ramanathapuram",
          state: "Tamil Nadu",
      },
      {
          value: "Ujhani",
          name: "Ujhani",
          state: "Uttar Pradesh",
      },
      {
          value: "Samastipur",
          name: "Samastipur",
          state: "Bihar",
      },
      {
          value: "Laharpur",
          name: "Laharpur",
          state: "Uttar Pradesh",
      },
      {
          value: "Sangamner",
          name: "Sangamner",
          state: "Maharashtra",
      },
      {
          value: "Nimbahera",
          name: "Nimbahera",
          state: "Rajasthan",
      },
      {
          value: "Siddipet",
          name: "Siddipet",
          state: "Telangana",
      },
      {
          value: "Suri",
          name: "Suri",
          state: "West Bengal",
      },
      {
          value: "Diphu",
          name: "Diphu",
          state: "Assam",
      },
      {
          value: "Jhargram",
          name: "Jhargram",
          state: "West Bengal",
      },
      {
          value: "Shirpur-Warwade",
          name: "Shirpur-Warwade",
          state: "Maharashtra",
      },
      {
          value: "Tilhar",
          name: "Tilhar",
          state: "Uttar Pradesh",
      },
      {
          value: "Sindhnur",
          name: "Sindhnur",
          state: "Karnataka",
      },
      {
          value: "Udumalaipettai",
          name: "Udumalaipettai",
          state: "Tamil Nadu",
      },
      {
          value: "Malkapur",
          name: "Malkapur",
          state: "Maharashtra",
      },
      {
          value: "Wanaparthy",
          name: "Wanaparthy",
          state: "Telangana",
      },
      {
          value: "Gudur",
          name: "Gudur",
          state: "Andhra Pradesh",
      },
      {
          value: "Kendujhar",
          name: "Kendujhar",
          state: "Odisha",
      },
      {
          value: "Mandla",
          name: "Mandla",
          state: "Madhya Pradesh",
      },
      {
          value: "Mandi",
          name: "Mandi",
          state: "Himachal Pradesh",
      },
      {
          value: "Nedumangad",
          name: "Nedumangad",
          state: "Kerala",
      },
      {
          value: "North Lakhimpur",
          name: "North Lakhimpur",
          state: "Assam",
      },
      {
          value: "Vinukonda",
          name: "Vinukonda",
          state: "Andhra Pradesh",
      },
      {
          value: "Tiptur",
          name: "Tiptur",
          state: "Karnataka",
      },
      {
          value: "Gobichettipalayam",
          name: "Gobichettipalayam",
          state: "Tamil Nadu",
      },
      {
          value: "Sunabeda",
          name: "Sunabeda",
          state: "Odisha",
      },
      {
          value: "Wani",
          name: "Wani",
          state: "Maharashtra",
      },
      {
          value: "Upleta",
          name: "Upleta",
          state: "Gujarat",
      },
      {
          value: "Narasapuram",
          name: "Narasapuram",
          state: "Andhra Pradesh",
      },
      {
          value: "Nuzvid",
          name: "Nuzvid",
          state: "Andhra Pradesh",
      },
      {
          value: "Tezpur",
          name: "Tezpur",
          state: "Assam",
      },
      {
          value: "Una",
          name: "Una",
          state: "Gujarat",
      },
      {
          value: "Markapur",
          name: "Markapur",
          state: "Andhra Pradesh",
      },
      {
          value: "Sheopur",
          name: "Sheopur",
          state: "Madhya Pradesh",
      },
      {
          value: "Thiruvarur",
          name: "Thiruvarur",
          state: "Tamil Nadu",
      },
      {
          value: "Sidhpur",
          name: "Sidhpur",
          state: "Gujarat",
      },
      {
          value: "Sahaswan",
          name: "Sahaswan",
          state: "Uttar Pradesh",
      },
      {
          value: "Suratgarh",
          name: "Suratgarh",
          state: "Rajasthan",
      },
      {
          value: "Shajapur",
          name: "Shajapur",
          state: "Madhya Pradesh",
      },
      {
          value: "Rayagada",
          name: "Rayagada",
          state: "Odisha",
      },
      {
          value: "Lonavla",
          name: "Lonavla",
          state: "Maharashtra",
      },
      {
          value: "Ponnur",
          name: "Ponnur",
          state: "Andhra Pradesh",
      },
      {
          value: "Kagaznagar",
          name: "Kagaznagar",
          state: "Telangana",
      },
      {
          value: "Gadwal",
          name: "Gadwal",
          state: "Telangana",
      },
      {
          value: "Bhatapara",
          name: "Bhatapara",
          state: "Chhattisgarh",
      },
      {
          value: "Kandukur",
          name: "Kandukur",
          state: "Andhra Pradesh",
      },
      {
          value: "Sangareddy",
          name: "Sangareddy",
          state: "Telangana",
      },
      {
          value: "Unjha",
          name: "Unjha",
          state: "Gujarat",
      },
      {
          value: "Lunglei",
          name: "Lunglei",
          state: "Mizoram",
      },
      {
          value: "Karimganj",
          name: "Karimganj",
          state: "Assam",
      },
      {
          value: "Kannur",
          name: "Kannur",
          state: "Kerala",
      },
      {
          value: "Bobbili",
          name: "Bobbili",
          state: "Andhra Pradesh",
      },
      {
          value: "Mokameh",
          name: "Mokameh",
          state: "Bihar",
      },
      {
          value: "Talegaon Dabhade",
          name: "Talegaon Dabhade",
          state: "Maharashtra",
      },
      {
          value: "Anjangaon",
          name: "Anjangaon",
          state: "Maharashtra",
      },
      {
          value: "Mangrol",
          name: "Mangrol",
          state: "Gujarat",
      },
      {
          value: "Sunam",
          name: "Sunam",
          state: "Punjab",
      },
      {
          value: "Gangarampur",
          name: "Gangarampur",
          state: "West Bengal",
      },
      {
          value: "Thiruvallur",
          name: "Thiruvallur",
          state: "Tamil Nadu",
      },
      {
          value: "Tirur",
          name: "Tirur",
          state: "Kerala",
      },
      {
          value: "Rath",
          name: "Rath",
          state: "Uttar Pradesh",
      },
      {
          value: "Jatani",
          name: "Jatani",
          state: "Odisha",
      },
      {
          value: "Viramgam",
          name: "Viramgam",
          state: "Gujarat",
      },
      {
          value: "Rajsamand",
          name: "Rajsamand",
          state: "Rajasthan",
      },
      {
          value: "Yanam",
          name: "Yanam",
          state: "Puducherry",
      },
      {
          value: "Kottayam",
          name: "Kottayam",
          state: "Kerala",
      },
      {
          value: "Panruti",
          name: "Panruti",
          state: "Tamil Nadu",
      },
      {
          value: "Dhuri",
          name: "Dhuri",
          state: "Punjab",
      },
      {
          value: "Namakkal",
          name: "Namakkal",
          state: "Tamil Nadu",
      },
      {
          value: "Kasaragod",
          name: "Kasaragod",
          state: "Kerala",
      },
      {
          value: "Modasa",
          name: "Modasa",
          state: "Gujarat",
      },
      {
          value: "Rayadurg",
          name: "Rayadurg",
          state: "Andhra Pradesh",
      },
      {
          value: "Supaul",
          name: "Supaul",
          state: "Bihar",
      },
      {
          value: "Kunnamkulam",
          name: "Kunnamkulam",
          state: "Kerala",
      },
      {
          value: "Umred",
          name: "Umred",
          state: "Maharashtra",
      },
      {
          value: "Bellampalle",
          name: "Bellampalle",
          state: "Telangana",
      },
      {
          value: "Sibsagar",
          name: "Sibsagar",
          state: "Assam",
      },
      {
          value: "Mandi Dabwali",
          name: "Mandi Dabwali",
          state: "Haryana",
      },
      {
          value: "Ottappalam",
          name: "Ottappalam",
          state: "Kerala",
      },
      {
          value: "Dumraon",
          name: "Dumraon",
          state: "Bihar",
      },
      {
          value: "Samalkot",
          name: "Samalkot",
          state: "Andhra Pradesh",
      },
      {
          value: "Jaggaiahpet",
          name: "Jaggaiahpet",
          state: "Andhra Pradesh",
      },
      {
          value: "Goalpara",
          name: "Goalpara",
          state: "Assam",
      },
      {
          value: "Tuni",
          name: "Tuni",
          state: "Andhra Pradesh",
      },
      {
          value: "Lachhmangarh",
          name: "Lachhmangarh",
          state: "Rajasthan",
      },
      {
          value: "Bhongir",
          name: "Bhongir",
          state: "Telangana",
      },
      {
          value: "Amalapuram",
          name: "Amalapuram",
          state: "Andhra Pradesh",
      },
      {
          value: "Firozpur Cantt.",
          name: "Firozpur Cantt.",
          state: "Punjab",
      },
      {
          value: "Vikarabad",
          name: "Vikarabad",
          state: "Telangana",
      },
      {
          value: "Thiruvalla",
          name: "Thiruvalla",
          state: "Kerala",
      },
      {
          value: "Sherkot",
          name: "Sherkot",
          state: "Uttar Pradesh",
      },
      {
          value: "Palghar",
          name: "Palghar",
          state: "Maharashtra",
      },
      {
          value: "Shegaon",
          name: "Shegaon",
          state: "Maharashtra",
      },
      {
          value: "Jangaon",
          name: "Jangaon",
          state: "Telangana",
      },
      {
          value: "Bheemunipatnam",
          name: "Bheemunipatnam",
          state: "Andhra Pradesh",
      },
      {
          value: "Panna",
          name: "Panna",
          state: "Madhya Pradesh",
      },
      {
          value: "Thodupuzha",
          name: "Thodupuzha",
          state: "Kerala",
      },
      {
          value: "KathUrban Agglomeration",
          name: "KathUrban Agglomeration",
          state: "Jammu and Kashmir",
      },
      {
          value: "Palitana",
          name: "Palitana",
          state: "Gujarat",
      },
      {
          value: "Arwal",
          name: "Arwal",
          state: "Bihar",
      },
      {
          value: "Venkatagiri",
          name: "Venkatagiri",
          state: "Andhra Pradesh",
      },
      {
          value: "Kalpi",
          name: "Kalpi",
          state: "Uttar Pradesh",
      },
      {
          value: "Rajgarh (Churu)",
          name: "Rajgarh (Churu)",
          state: "Rajasthan",
      },
      {
          value: "Sattenapalle",
          name: "Sattenapalle",
          state: "Andhra Pradesh",
      },
      {
          value: "Arsikere",
          name: "Arsikere",
          state: "Karnataka",
      },
      {
          value: "Ozar",
          name: "Ozar",
          state: "Maharashtra",
      },
      {
          value: "Thirumangalam",
          name: "Thirumangalam",
          state: "Tamil Nadu",
      },
      {
          value: "Petlad",
          name: "Petlad",
          state: "Gujarat",
      },
      {
          value: "Nasirabad",
          name: "Nasirabad",
          state: "Rajasthan",
      },
      {
          value: "Phaltan",
          name: "Phaltan",
          state: "Maharashtra",
      },
      {
          value: "Rampurhat",
          name: "Rampurhat",
          state: "West Bengal",
      },
      {
          value: "Nanjangud",
          name: "Nanjangud",
          state: "Karnataka",
      },
      {
          value: "Forbesganj",
          name: "Forbesganj",
          state: "Bihar",
      },
      {
          value: "Tundla",
          name: "Tundla",
          state: "Uttar Pradesh",
      },
      {
          value: "BhabUrban Agglomeration",
          name: "BhabUrban Agglomeration",
          state: "Bihar",
      },
      {
          value: "Sagara",
          name: "Sagara",
          state: "Karnataka",
      },
      {
          value: "Pithapuram",
          name: "Pithapuram",
          state: "Andhra Pradesh",
      },
      {
          value: "Sira",
          name: "Sira",
          state: "Karnataka",
      },
      {
          value: "Bhadrachalam",
          name: "Bhadrachalam",
          state: "Telangana",
      },
      {
          value: "Charkhi Dadri",
          name: "Charkhi Dadri",
          state: "Haryana",
      },
      {
          value: "Chatra",
          name: "Chatra",
          state: "Jharkhand",
      },
      {
          value: "Palasa Kasibugga",
          name: "Palasa Kasibugga",
          state: "Andhra Pradesh",
      },
      {
          value: "Nohar",
          name: "Nohar",
          state: "Rajasthan",
      },
      {
          value: "Yevla",
          name: "Yevla",
          state: "Maharashtra",
      },
      {
          value: "Sirhind Fatehgarh Sahib",
          name: "Sirhind Fatehgarh Sahib",
          state: "Punjab",
      },
      {
          value: "Bhainsa",
          name: "Bhainsa",
          state: "Telangana",
      },
      {
          value: "Parvathipuram",
          name: "Parvathipuram",
          state: "Andhra Pradesh",
      },
      {
          value: "Shahade",
          name: "Shahade",
          state: "Maharashtra",
      },
      {
          value: "Chalakudy",
          name: "Chalakudy",
          state: "Kerala",
      },
      {
          value: "Narkatiaganj",
          name: "Narkatiaganj",
          state: "Bihar",
      },
      {
          value: "Kapadvanj",
          name: "Kapadvanj",
          state: "Gujarat",
      },
      {
          value: "Macherla",
          name: "Macherla",
          state: "Andhra Pradesh",
      },
      {
          value: "Raghogarh-Vijaypur",
          name: "Raghogarh-Vijaypur",
          state: "Madhya Pradesh",
      },
      {
          value: "Rupnagar",
          name: "Rupnagar",
          state: "Punjab",
      },
      {
          value: "Naugachhia",
          name: "Naugachhia",
          state: "Bihar",
      },
      {
          value: "Sendhwa",
          name: "Sendhwa",
          state: "Madhya Pradesh",
      },
      {
          value: "Byasanagar",
          name: "Byasanagar",
          state: "Odisha",
      },
      {
          value: "Sandila",
          name: "Sandila",
          state: "Uttar Pradesh",
      },
      {
          value: "Gooty",
          name: "Gooty",
          state: "Andhra Pradesh",
      },
      {
          value: "Salur",
          name: "Salur",
          state: "Andhra Pradesh",
      },
      {
          value: "Nanpara",
          name: "Nanpara",
          state: "Uttar Pradesh",
      },
      {
          value: "Sardhana",
          name: "Sardhana",
          state: "Uttar Pradesh",
      },
      {
          value: "Vita",
          name: "Vita",
          state: "Maharashtra",
      },
      {
          value: "Gumia",
          name: "Gumia",
          state: "Jharkhand",
      },
      {
          value: "Puttur",
          name: "Puttur",
          state: "Karnataka",
      },
      {
          value: "Jalandhar Cantt.",
          name: "Jalandhar Cantt.",
          state: "Punjab",
      },
      {
          value: "Nehtaur",
          name: "Nehtaur",
          state: "Uttar Pradesh",
      },
      {
          value: "Changanassery",
          name: "Changanassery",
          state: "Kerala",
      },
      {
          value: "Mandapeta",
          name: "Mandapeta",
          state: "Andhra Pradesh",
      },
      {
          value: "Dumka",
          name: "Dumka",
          state: "Jharkhand",
      },
      {
          value: "Seohara",
          name: "Seohara",
          state: "Uttar Pradesh",
      },
      {
          value: "Umarkhed",
          name: "Umarkhed",
          state: "Maharashtra",
      },
      {
          value: "Madhupur",
          name: "Madhupur",
          state: "Jharkhand",
      },
      {
          value: "Vikramasingapuram",
          name: "Vikramasingapuram",
          state: "Tamil Nadu",
      },
      {
          value: "Punalur",
          name: "Punalur",
          state: "Kerala",
      },
      {
          value: "Kendrapara",
          name: "Kendrapara",
          state: "Odisha",
      },
      {
          value: "Sihor",
          name: "Sihor",
          state: "Gujarat",
      },
      {
          value: "Nellikuppam",
          name: "Nellikuppam",
          state: "Tamil Nadu",
      },
      {
          value: "Samana",
          name: "Samana",
          state: "Punjab",
      },
      {
          value: "Warora",
          name: "Warora",
          state: "Maharashtra",
      },
      {
          value: "Nilambur",
          name: "Nilambur",
          state: "Kerala",
      },
      {
          value: "Rasipuram",
          name: "Rasipuram",
          state: "Tamil Nadu",
      },
      {
          value: "Ramnagar",
          name: "Ramnagar",
          state: "Uttarakhand",
      },
      {
          value: "Jammalamadugu",
          name: "Jammalamadugu",
          state: "Andhra Pradesh",
      },
      {
          value: "Nawanshahr",
          name: "Nawanshahr",
          state: "Punjab",
      },
      {
          value: "Thoubal",
          name: "Thoubal",
          state: "Manipur",
      },
      {
          value: "Athni",
          name: "Athni",
          state: "Karnataka",
      },
      {
          value: "Cherthala",
          name: "Cherthala",
          state: "Kerala",
      },
      {
          value: "Sidhi",
          name: "Sidhi",
          state: "Madhya Pradesh",
      },
      {
          value: "Farooqnagar",
          name: "Farooqnagar",
          state: "Telangana",
      },
      {
          value: "Peddapuram",
          name: "Peddapuram",
          state: "Andhra Pradesh",
      },
      {
          value: "Chirkunda",
          name: "Chirkunda",
          state: "Jharkhand",
      },
      {
          value: "Pachora",
          name: "Pachora",
          state: "Maharashtra",
      },
      {
          value: "Madhepura",
          name: "Madhepura",
          state: "Bihar",
      },
      {
          value: "Pithoragarh",
          name: "Pithoragarh",
          state: "Uttarakhand",
      },
      {
          value: "Tumsar",
          name: "Tumsar",
          state: "Maharashtra",
      },
      {
          value: "Phalodi",
          name: "Phalodi",
          state: "Rajasthan",
      },
      {
          value: "Tiruttani",
          name: "Tiruttani",
          state: "Tamil Nadu",
      },
      {
          value: "Rampura Phul",
          name: "Rampura Phul",
          state: "Punjab",
      },
      {
          value: "Perinthalmanna",
          name: "Perinthalmanna",
          state: "Kerala",
      },
      {
          value: "Padrauna",
          name: "Padrauna",
          state: "Uttar Pradesh",
      },
      {
          value: "Pipariya",
          name: "Pipariya",
          state: "Madhya Pradesh",
      },
      {
          value: "Dalli-Rajhara",
          name: "Dalli-Rajhara",
          state: "Chhattisgarh",
      },
      {
          value: "Punganur",
          name: "Punganur",
          state: "Andhra Pradesh",
      },
      {
          value: "Mattannur",
          name: "Mattannur",
          state: "Kerala",
      },
      {
          value: "Mathura",
          name: "Mathura",
          state: "Uttar Pradesh",
      },
      {
          value: "Thakurdwara",
          name: "Thakurdwara",
          state: "Uttar Pradesh",
      },
      {
          value: "Nandivaram-Guduvancheri",
          name: "Nandivaram-Guduvancheri",
          state: "Tamil Nadu",
      },
      {
          value: "Mulbagal",
          name: "Mulbagal",
          state: "Karnataka",
      },
      {
          value: "Manjlegaon",
          name: "Manjlegaon",
          state: "Maharashtra",
      },
      {
          value: "Wankaner",
          name: "Wankaner",
          state: "Gujarat",
      },
      {
          value: "Sillod",
          name: "Sillod",
          state: "Maharashtra",
      },
      {
          value: "Nidadavole",
          name: "Nidadavole",
          state: "Andhra Pradesh",
      },
      {
          value: "Surapura",
          name: "Surapura",
          state: "Karnataka",
      },
      {
          value: "Rajagangapur",
          name: "Rajagangapur",
          state: "Odisha",
      },
      {
          value: "Sheikhpura",
          name: "Sheikhpura",
          state: "Bihar",
      },
      {
          value: "Parlakhemundi",
          name: "Parlakhemundi",
          state: "Odisha",
      },
      {
          value: "Kalimpong",
          name: "Kalimpong",
          state: "West Bengal",
      },
      {
          value: "Siruguppa",
          name: "Siruguppa",
          state: "Karnataka",
      },
      {
          value: "Arvi",
          name: "Arvi",
          state: "Maharashtra",
      },
      {
          value: "Limbdi",
          name: "Limbdi",
          state: "Gujarat",
      },
      {
          value: "Barpeta",
          name: "Barpeta",
          state: "Assam",
      },
      {
          value: "Manglaur",
          name: "Manglaur",
          state: "Uttarakhand",
      },
      {
          value: "Repalle",
          name: "Repalle",
          state: "Andhra Pradesh",
      },
      {
          value: "Mudhol",
          name: "Mudhol",
          state: "Karnataka",
      },
      {
          value: "Shujalpur",
          name: "Shujalpur",
          state: "Madhya Pradesh",
      },
      {
          value: "Mandvi",
          name: "Mandvi",
          state: "Gujarat",
      },
      {
          value: "Thangadh",
          name: "Thangadh",
          state: "Gujarat",
      },
      {
          value: "Sironj",
          name: "Sironj",
          state: "Madhya Pradesh",
      },
      {
          value: "Nandura",
          name: "Nandura",
          state: "Maharashtra",
      },
      {
          value: "Shoranur",
          name: "Shoranur",
          state: "Kerala",
      },
      {
          value: "Nathdwara",
          name: "Nathdwara",
          state: "Rajasthan",
      },
      {
          value: "Periyakulam",
          name: "Periyakulam",
          state: "Tamil Nadu",
      },
      {
          value: "Sultanganj",
          name: "Sultanganj",
          state: "Bihar",
      },
      {
          value: "Medak",
          name: "Medak",
          state: "Telangana",
      },
      {
          value: "Narayanpet",
          name: "Narayanpet",
          state: "Telangana",
      },
      {
          value: "Raxaul Bazar",
          name: "Raxaul Bazar",
          state: "Bihar",
      },
      {
          value: "Rajauri",
          name: "Rajauri",
          state: "Jammu and Kashmir",
      },
      {
          value: "Pernampattu",
          name: "Pernampattu",
          state: "Tamil Nadu",
      },
      {
          value: "Nainital",
          name: "Nainital",
          state: "Uttarakhand",
      },
      {
          value: "Ramachandrapuram",
          name: "Ramachandrapuram",
          state: "Andhra Pradesh",
      },
      {
          value: "Vaijapur",
          name: "Vaijapur",
          state: "Maharashtra",
      },
      {
          value: "Nangal",
          name: "Nangal",
          state: "Punjab",
      },
      {
          value: "Sidlaghatta",
          name: "Sidlaghatta",
          state: "Karnataka",
      },
      {
          value: "Punch",
          name: "Punch",
          state: "Jammu and Kashmir",
      },
      {
          value: "Pandhurna",
          name: "Pandhurna",
          state: "Madhya Pradesh",
      },
      {
          value: "Wadgaon Road",
          name: "Wadgaon Road",
          state: "Maharashtra",
      },
      {
          value: "Talcher",
          name: "Talcher",
          state: "Odisha",
      },
      {
          value: "Varkala",
          name: "Varkala",
          state: "Kerala",
      },
      {
          value: "Pilani",
          name: "Pilani",
          state: "Rajasthan",
      },
      {
          value: "Nowgong",
          name: "Nowgong",
          state: "Madhya Pradesh",
      },
      {
          value: "Naila Janjgir",
          name: "Naila Janjgir",
          state: "Chhattisgarh",
      },
      {
          value: "Mapusa",
          name: "Mapusa",
          state: "Goa",
      },
      {
          value: "Vellakoil",
          name: "Vellakoil",
          state: "Tamil Nadu",
      },
      {
          value: "Merta City",
          name: "Merta City",
          state: "Rajasthan",
      },
      {
          value: "Sivaganga",
          name: "Sivaganga",
          state: "Tamil Nadu",
      },
      {
          value: "Mandideep",
          name: "Mandideep",
          state: "Madhya Pradesh",
      },
      {
          value: "Sailu",
          name: "Sailu",
          state: "Maharashtra",
      },
      {
          value: "Vyara",
          name: "Vyara",
          state: "Gujarat",
      },
      {
          value: "Kovvur",
          name: "Kovvur",
          state: "Andhra Pradesh",
      },
      {
          value: "Vadalur",
          name: "Vadalur",
          state: "Tamil Nadu",
      },
      {
          value: "Nawabganj",
          name: "Nawabganj",
          state: "Uttar Pradesh",
      },
      {
          value: "Padra",
          name: "Padra",
          state: "Gujarat",
      },
      {
          value: "Sainthia",
          name: "Sainthia",
          state: "West Bengal",
      },
      {
          value: "Siana",
          name: "Siana",
          state: "Uttar Pradesh",
      },
      {
          value: "Shahpur",
          name: "Shahpur",
          state: "Karnataka",
      },
      {
          value: "Sojat",
          name: "Sojat",
          state: "Rajasthan",
      },
      {
          value: "Noorpur",
          name: "Noorpur",
          state: "Uttar Pradesh",
      },
      {
          value: "Paravoor",
          name: "Paravoor",
          state: "Kerala",
      },
      {
          value: "Murtijapur",
          name: "Murtijapur",
          state: "Maharashtra",
      },
      {
          value: "Ramnagar",
          name: "Ramnagar",
          state: "Bihar",
      },
      {
          value: "Sundargarh",
          name: "Sundargarh",
          state: "Odisha",
      },
      {
          value: "Taki",
          name: "Taki",
          state: "West Bengal",
      },
      {
          value: "Saundatti-Yellamma",
          name: "Saundatti-Yellamma",
          state: "Karnataka",
      },
      {
          value: "Pathanamthitta",
          name: "Pathanamthitta",
          state: "Kerala",
      },
      {
          value: "Wadi",
          name: "Wadi",
          state: "Karnataka",
      },
      {
          value: "Rameshwaram",
          name: "Rameshwaram",
          state: "Tamil Nadu",
      },
      {
          value: "Tasgaon",
          name: "Tasgaon",
          state: "Maharashtra",
      },
      {
          value: "Sikandra Rao",
          name: "Sikandra Rao",
          state: "Uttar Pradesh",
      },
      {
          value: "Sihora",
          name: "Sihora",
          state: "Madhya Pradesh",
      },
      {
          value: "Tiruvethipuram",
          name: "Tiruvethipuram",
          state: "Tamil Nadu",
      },
      {
          value: "Tiruvuru",
          name: "Tiruvuru",
          state: "Andhra Pradesh",
      },
      {
          value: "Mehkar",
          name: "Mehkar",
          state: "Maharashtra",
      },
      {
          value: "Peringathur",
          name: "Peringathur",
          state: "Kerala",
      },
      {
          value: "Perambalur",
          name: "Perambalur",
          state: "Tamil Nadu",
      },
      {
          value: "Manvi",
          name: "Manvi",
          state: "Karnataka",
      },
      {
          value: "Zunheboto",
          name: "Zunheboto",
          state: "Nagaland",
      },
      {
          value: "Mahnar Bazar",
          name: "Mahnar Bazar",
          state: "Bihar",
      },
      {
          value: "Attingal",
          name: "Attingal",
          state: "Kerala",
      },
      {
          value: "Shahbad",
          name: "Shahbad",
          state: "Haryana",
      },
      {
          value: "Puranpur",
          name: "Puranpur",
          state: "Uttar Pradesh",
      },
      {
          value: "Nelamangala",
          name: "Nelamangala",
          state: "Karnataka",
      },
      {
          value: "Nakodar",
          name: "Nakodar",
          state: "Punjab",
      },
      {
          value: "Lunawada",
          name: "Lunawada",
          state: "Gujarat",
      },
      {
          value: "Murshidabad",
          name: "Murshidabad",
          state: "West Bengal",
      },
      {
          value: "Mahe",
          name: "Mahe",
          state: "Puducherry",
      },
      {
          value: "Lanka",
          name: "Lanka",
          state: "Assam",
      },
      {
          value: "Rudauli",
          name: "Rudauli",
          state: "Uttar Pradesh",
      },
      {
          value: "Tuensang",
          name: "Tuensang",
          state: "Nagaland",
      },
      {
          value: "Lakshmeshwar",
          name: "Lakshmeshwar",
          state: "Karnataka",
      },
      {
          value: "Zira",
          name: "Zira",
          state: "Punjab",
      },
      {
          value: "Yawal",
          name: "Yawal",
          state: "Maharashtra",
      },
      {
          value: "Thana Bhawan",
          name: "Thana Bhawan",
          state: "Uttar Pradesh",
      },
      {
          value: "Ramdurg",
          name: "Ramdurg",
          state: "Karnataka",
      },
      {
          value: "Pulgaon",
          name: "Pulgaon",
          state: "Maharashtra",
      },
      {
          value: "Sadasivpet",
          name: "Sadasivpet",
          state: "Telangana",
      },
      {
          value: "Nargund",
          name: "Nargund",
          state: "Karnataka",
      },
      {
          value: "Neem-Ka-Thana",
          name: "Neem-Ka-Thana",
          state: "Rajasthan",
      },
      {
          value: "Memari",
          name: "Memari",
          state: "West Bengal",
      },
      {
          value: "Nilanga",
          name: "Nilanga",
          state: "Maharashtra",
      },
      {
          value: "Naharlagun",
          name: "Naharlagun",
          state: "Arunachal Pradesh",
      },
      {
          value: "Pakaur",
          name: "Pakaur",
          state: "Jharkhand",
      },
      {
          value: "Wai",
          name: "Wai",
          state: "Maharashtra",
      },
      {
          value: "Tarikere",
          name: "Tarikere",
          state: "Karnataka",
      },
      {
          value: "Malavalli",
          name: "Malavalli",
          state: "Karnataka",
      },
      {
          value: "Raisen",
          name: "Raisen",
          state: "Madhya Pradesh",
      },
      {
          value: "Lahar",
          name: "Lahar",
          state: "Madhya Pradesh",
      },
      {
          value: "Uravakonda",
          name: "Uravakonda",
          state: "Andhra Pradesh",
      },
      {
          value: "Savanur",
          name: "Savanur",
          state: "Karnataka",
      },
      {
          value: "Sirohi",
          name: "Sirohi",
          state: "Rajasthan",
      },
      {
          value: "Udhampur",
          name: "Udhampur",
          state: "Jammu and Kashmir",
      },
      {
          value: "Umarga",
          name: "Umarga",
          state: "Maharashtra",
      },
      {
          value: "Pratapgarh",
          name: "Pratapgarh",
          state: "Rajasthan",
      },
      {
          value: "Lingsugur",
          name: "Lingsugur",
          state: "Karnataka",
      },
      {
          value: "Usilampatti",
          name: "Usilampatti",
          state: "Tamil Nadu",
      },
      {
          value: "Palia Kalan",
          name: "Palia Kalan",
          state: "Uttar Pradesh",
      },
      {
          value: "Wokha",
          name: "Wokha",
          state: "Nagaland",
      },
      {
          value: "Rajpipla",
          name: "Rajpipla",
          state: "Gujarat",
      },
      {
          value: "Vijayapura",
          name: "Vijayapura",
          state: "Karnataka",
      },
      {
          value: "Rawatbhata",
          name: "Rawatbhata",
          state: "Rajasthan",
      },
      {
          value: "Sangaria",
          name: "Sangaria",
          state: "Rajasthan",
      },
      {
          value: "Paithan",
          name: "Paithan",
          state: "Maharashtra",
      },
      {
          value: "Rahuri",
          name: "Rahuri",
          state: "Maharashtra",
      },
      {
          value: "Patti",
          name: "Patti",
          state: "Punjab",
      },
      {
          value: "Zaidpur",
          name: "Zaidpur",
          state: "Uttar Pradesh",
      },
      {
          value: "Lalsot",
          name: "Lalsot",
          state: "Rajasthan",
      },
      {
          value: "Maihar",
          name: "Maihar",
          state: "Madhya Pradesh",
      },
      {
          value: "Vedaranyam",
          name: "Vedaranyam",
          state: "Tamil Nadu",
      },
      {
          value: "Nawapur",
          name: "Nawapur",
          state: "Maharashtra",
      },
      {
          value: "Solan",
          name: "Solan",
          state: "Himachal Pradesh",
      },
      {
          value: "Vapi",
          name: "Vapi",
          state: "Gujarat",
      },
      {
          value: "Sanawad",
          name: "Sanawad",
          state: "Madhya Pradesh",
      },
      {
          value: "Warisaliganj",
          name: "Warisaliganj",
          state: "Bihar",
      },
      {
          value: "Revelganj",
          name: "Revelganj",
          state: "Bihar",
      },
      {
          value: "Sabalgarh",
          name: "Sabalgarh",
          state: "Madhya Pradesh",
      },
      {
          value: "Tuljapur",
          name: "Tuljapur",
          state: "Maharashtra",
      },
      {
          value: "Simdega",
          name: "Simdega",
          state: "Jharkhand",
      },
      {
          value: "Musabani",
          name: "Musabani",
          state: "Jharkhand",
      },
      {
          value: "Kodungallur",
          name: "Kodungallur",
          state: "Kerala",
      },
      {
          value: "Phulabani",
          name: "Phulabani",
          state: "Odisha",
      },
      {
          value: "Umreth",
          name: "Umreth",
          state: "Gujarat",
      },
      {
          value: "Narsipatnam",
          name: "Narsipatnam",
          state: "Andhra Pradesh",
      },
      {
          value: "Nautanwa",
          name: "Nautanwa",
          state: "Uttar Pradesh",
      },
      {
          value: "Rajgir",
          name: "Rajgir",
          state: "Bihar",
      },
      {
          value: "Yellandu",
          name: "Yellandu",
          state: "Telangana",
      },
      {
          value: "Sathyamangalam",
          name: "Sathyamangalam",
          state: "Tamil Nadu",
      },
      {
          value: "Pilibanga",
          name: "Pilibanga",
          state: "Rajasthan",
      },
      {
          value: "Morshi",
          name: "Morshi",
          state: "Maharashtra",
      },
      {
          value: "Pehowa",
          name: "Pehowa",
          state: "Haryana",
      },
      {
          value: "Sonepur",
          name: "Sonepur",
          state: "Bihar",
      },
      {
          value: "Pappinisseri",
          name: "Pappinisseri",
          state: "Kerala",
      },
      {
          value: "Zamania",
          name: "Zamania",
          state: "Uttar Pradesh",
      },
      {
          value: "Mihijam",
          name: "Mihijam",
          state: "Jharkhand",
      },
      {
          value: "Purna",
          name: "Purna",
          state: "Maharashtra",
      },
      {
          value: "Puliyankudi",
          name: "Puliyankudi",
          state: "Tamil Nadu",
      },
      {
          value: "Shikarpur, Bulandshahr",
          name: "Shikarpur, Bulandshahr",
          state: "Uttar Pradesh",
      },
      {
          value: "Umaria",
          name: "Umaria",
          state: "Madhya Pradesh",
      },
      {
          value: "Porsa",
          name: "Porsa",
          state: "Madhya Pradesh",
      },
      {
          value: "Naugawan Sadat",
          name: "Naugawan Sadat",
          state: "Uttar Pradesh",
      },
      {
          value: "Fatehpur Sikri",
          name: "Fatehpur Sikri",
          state: "Uttar Pradesh",
      },
      {
          value: "Manuguru",
          name: "Manuguru",
          state: "Telangana",
      },
      {
          value: "Udaipur",
          name: "Udaipur",
          state: "Tripura",
      },
      {
          value: "Pipar City",
          name: "Pipar City",
          state: "Rajasthan",
      },
      {
          value: "Pattamundai",
          name: "Pattamundai",
          state: "Odisha",
      },
      {
          value: "Nanjikottai",
          name: "Nanjikottai",
          state: "Tamil Nadu",
      },
      {
          value: "Taranagar",
          name: "Taranagar",
          state: "Rajasthan",
      },
      {
          value: "Yerraguntla",
          name: "Yerraguntla",
          state: "Andhra Pradesh",
      },
      {
          value: "Satana",
          name: "Satana",
          state: "Maharashtra",
      },
      {
          value: "Sherghati",
          name: "Sherghati",
          state: "Bihar",
      },
      {
          value: "Sankeshwara",
          name: "Sankeshwara",
          state: "Karnataka",
      },
      {
          value: "Madikeri",
          name: "Madikeri",
          state: "Karnataka",
      },
      {
          value: "Thuraiyur",
          name: "Thuraiyur",
          state: "Tamil Nadu",
      },
      {
          value: "Sanand",
          name: "Sanand",
          state: "Gujarat",
      },
      {
          value: "Rajula",
          name: "Rajula",
          state: "Gujarat",
      },
      {
          value: "Kyathampalle",
          name: "Kyathampalle",
          state: "Telangana",
      },
      {
          value: "Shahabad, Rampur",
          name: "Shahabad, Rampur",
          state: "Uttar Pradesh",
      },
      {
          value: "Tilda Newra",
          name: "Tilda Newra",
          state: "Chhattisgarh",
      },
      {
          value: "Narsinghgarh",
          name: "Narsinghgarh",
          state: "Madhya Pradesh",
      },
      {
          value: "Chittur-Thathamangalam",
          name: "Chittur-Thathamangalam",
          state: "Kerala",
      },
      {
          value: "Malaj Khand",
          name: "Malaj Khand",
          state: "Madhya Pradesh",
      },
      {
          value: "Sarangpur",
          name: "Sarangpur",
          state: "Madhya Pradesh",
      },
      {
          value: "Robertsganj",
          name: "Robertsganj",
          state: "Uttar Pradesh",
      },
      {
          value: "Sirkali",
          name: "Sirkali",
          state: "Tamil Nadu",
      },
      {
          value: "Radhanpur",
          name: "Radhanpur",
          state: "Gujarat",
      },
      {
          value: "Tiruchendur",
          name: "Tiruchendur",
          state: "Tamil Nadu",
      },
      {
          value: "Utraula",
          name: "Utraula",
          state: "Uttar Pradesh",
      },
      {
          value: "Patratu",
          name: "Patratu",
          state: "Jharkhand",
      },
      {
          value: "Vijainagar, Ajmer",
          name: "Vijainagar, Ajmer",
          state: "Rajasthan",
      },
      {
          value: "Periyasemur",
          name: "Periyasemur",
          state: "Tamil Nadu",
      },
      {
          value: "Pathri",
          name: "Pathri",
          state: "Maharashtra",
      },
      {
          value: "Sadabad",
          name: "Sadabad",
          state: "Uttar Pradesh",
      },
      {
          value: "Talikota",
          name: "Talikota",
          state: "Karnataka",
      },
      {
          value: "Sinnar",
          name: "Sinnar",
          state: "Maharashtra",
      },
      {
          value: "Mungeli",
          name: "Mungeli",
          state: "Chhattisgarh",
      },
      {
          value: "Sedam",
          name: "Sedam",
          state: "Karnataka",
      },
      {
          value: "Shikaripur",
          name: "Shikaripur",
          state: "Karnataka",
      },
      {
          value: "Sumerpur",
          name: "Sumerpur",
          state: "Rajasthan",
      },
      {
          value: "Sattur",
          name: "Sattur",
          state: "Tamil Nadu",
      },
      {
          value: "Sugauli",
          name: "Sugauli",
          state: "Bihar",
      },
      {
          value: "Lumding",
          name: "Lumding",
          state: "Assam",
      },
      {
          value: "Vandavasi",
          name: "Vandavasi",
          state: "Tamil Nadu",
      },
      {
          value: "Titlagarh",
          name: "Titlagarh",
          state: "Odisha",
      },
      {
          value: "Uchgaon",
          name: "Uchgaon",
          state: "Maharashtra",
      },
      {
          value: "Mokokchung",
          name: "Mokokchung",
          state: "Nagaland",
      },
      {
          value: "Paschim Punropara",
          name: "Paschim Punropara",
          state: "West Bengal",
      },
      {
          value: "Sagwara",
          name: "Sagwara",
          state: "Rajasthan",
      },
      {
          value: "Ramganj Mandi",
          name: "Ramganj Mandi",
          state: "Rajasthan",
      },
      {
          value: "Tarakeswar",
          name: "Tarakeswar",
          state: "West Bengal",
      },
      {
          value: "Mahalingapura",
          name: "Mahalingapura",
          state: "Karnataka",
      },
      {
          value: "Dharmanagar",
          name: "Dharmanagar",
          state: "Tripura",
      },
      {
          value: "Mahemdabad",
          name: "Mahemdabad",
          state: "Gujarat",
      },
      {
          value: "Manendragarh",
          name: "Manendragarh",
          state: "Chhattisgarh",
      },
      {
          value: "Uran",
          name: "Uran",
          state: "Maharashtra",
      },
      {
          value: "Tharamangalam",
          name: "Tharamangalam",
          state: "Tamil Nadu",
      },
      {
          value: "Tirukkoyilur",
          name: "Tirukkoyilur",
          state: "Tamil Nadu",
      },
      {
          value: "Pen",
          name: "Pen",
          state: "Maharashtra",
      },
      {
          value: "Makhdumpur",
          name: "Makhdumpur",
          state: "Bihar",
      },
      {
          value: "Maner",
          name: "Maner",
          state: "Bihar",
      },
      {
          value: "Oddanchatram",
          name: "Oddanchatram",
          state: "Tamil Nadu",
      },
      {
          value: "Palladam",
          name: "Palladam",
          state: "Tamil Nadu",
      },
      {
          value: "Mundi",
          name: "Mundi",
          state: "Madhya Pradesh",
      },
      {
          value: "Nabarangapur",
          name: "Nabarangapur",
          state: "Odisha",
      },
      {
          value: "Mudalagi",
          name: "Mudalagi",
          state: "Karnataka",
      },
      {
          value: "Samalkha",
          name: "Samalkha",
          state: "Haryana",
      },
      {
          value: "Nepanagar",
          name: "Nepanagar",
          state: "Madhya Pradesh",
      },
      {
          value: "Karjat",
          name: "Karjat",
          state: "Maharashtra",
      },
      {
          value: "Ranavav",
          name: "Ranavav",
          state: "Gujarat",
      },
      {
          value: "Pedana",
          name: "Pedana",
          state: "Andhra Pradesh",
      },
      {
          value: "Pinjore",
          name: "Pinjore",
          state: "Haryana",
      },
      {
          value: "Lakheri",
          name: "Lakheri",
          state: "Rajasthan",
      },
      {
          value: "Pasan",
          name: "Pasan",
          state: "Madhya Pradesh",
      },
      {
          value: "Puttur",
          name: "Puttur",
          state: "Andhra Pradesh",
      },
      {
          value: "Vadakkuvalliyur",
          name: "Vadakkuvalliyur",
          state: "Tamil Nadu",
      },
      {
          value: "Tirukalukundram",
          name: "Tirukalukundram",
          state: "Tamil Nadu",
      },
      {
          value: "Mahidpur",
          name: "Mahidpur",
          state: "Madhya Pradesh",
      },
      {
          value: "Mussoorie",
          name: "Mussoorie",
          state: "Uttarakhand",
      },
      {
          value: "Muvattupuzha",
          name: "Muvattupuzha",
          state: "Kerala",
      },
      {
          value: "Rasra",
          name: "Rasra",
          state: "Uttar Pradesh",
      },
      {
          value: "Udaipurwati",
          name: "Udaipurwati",
          state: "Rajasthan",
      },
      {
          value: "Manwath",
          name: "Manwath",
          state: "Maharashtra",
      },
      {
          value: "Adoor",
          name: "Adoor",
          state: "Kerala",
      },
      {
          value: "Uthamapalayam",
          name: "Uthamapalayam",
          state: "Tamil Nadu",
      },
      {
          value: "Partur",
          name: "Partur",
          state: "Maharashtra",
      },
      {
          value: "Nahan",
          name: "Nahan",
          state: "Himachal Pradesh",
      },
      {
          value: "Ladwa",
          name: "Ladwa",
          state: "Haryana",
      },
      {
          value: "Mankachar",
          name: "Mankachar",
          state: "Assam",
      },
      {
          value: "Nongstoin",
          name: "Nongstoin",
          state: "Meghalaya",
      },
      {
          value: "Losal",
          name: "Losal",
          state: "Rajasthan",
      },
      {
          value: "Sri Madhopur",
          name: "Sri Madhopur",
          state: "Rajasthan",
      },
      {
          value: "Ramngarh",
          name: "Ramngarh",
          state: "Rajasthan",
      },
      {
          value: "Mavelikkara",
          name: "Mavelikkara",
          state: "Kerala",
      },
      {
          value: "Rawatsar",
          name: "Rawatsar",
          state: "Rajasthan",
      },
      {
          value: "Rajakhera",
          name: "Rajakhera",
          state: "Rajasthan",
      },
      {
          value: "Lar",
          name: "Lar",
          state: "Uttar Pradesh",
      },
      {
          value: "Lal Gopalganj Nindaura",
          name: "Lal Gopalganj Nindaura",
          state: "Uttar Pradesh",
      },
      {
          value: "Muddebihal",
          name: "Muddebihal",
          state: "Karnataka",
      },
      {
          value: "Sirsaganj",
          name: "Sirsaganj",
          state: "Uttar Pradesh",
      },
      {
          value: "Shahpura",
          name: "Shahpura",
          state: "Rajasthan",
      },
      {
          value: "Surandai",
          name: "Surandai",
          state: "Tamil Nadu",
      },
      {
          value: "Sangole",
          name: "Sangole",
          state: "Maharashtra",
      },
      {
          value: "Pavagada",
          name: "Pavagada",
          state: "Karnataka",
      },
      {
          value: "Tharad",
          name: "Tharad",
          state: "Gujarat",
      },
      {
          value: "Mansa",
          name: "Mansa",
          state: "Gujarat",
      },
      {
          value: "Umbergaon",
          name: "Umbergaon",
          state: "Gujarat",
      },
      {
          value: "Mavoor",
          name: "Mavoor",
          state: "Kerala",
      },
      {
          value: "Nalbari",
          name: "Nalbari",
          state: "Assam",
      },
      {
          value: "Talaja",
          name: "Talaja",
          state: "Gujarat",
      },
      {
          value: "Malur",
          name: "Malur",
          state: "Karnataka",
      },
      {
          value: "Mangrulpir",
          name: "Mangrulpir",
          state: "Maharashtra",
      },
      {
          value: "Soro",
          name: "Soro",
          state: "Odisha",
      },
      {
          value: "Shahpura",
          name: "Shahpura",
          state: "Rajasthan",
      },
      {
          value: "Vadnagar",
          name: "Vadnagar",
          state: "Gujarat",
      },
      {
          value: "Raisinghnagar",
          name: "Raisinghnagar",
          state: "Rajasthan",
      },
      {
          value: "Sindhagi",
          name: "Sindhagi",
          state: "Karnataka",
      },
      {
          value: "Sanduru",
          name: "Sanduru",
          state: "Karnataka",
      },
      {
          value: "Sohna",
          name: "Sohna",
          state: "Haryana",
      },
      {
          value: "Manavadar",
          name: "Manavadar",
          state: "Gujarat",
      },
      {
          value: "Pihani",
          name: "Pihani",
          state: "Uttar Pradesh",
      },
      {
          value: "Safidon",
          name: "Safidon",
          state: "Haryana",
      },
      {
          value: "Risod",
          name: "Risod",
          state: "Maharashtra",
      },
      {
          value: "Rosera",
          name: "Rosera",
          state: "Bihar",
      },
      {
          value: "Sankari",
          name: "Sankari",
          state: "Tamil Nadu",
      },
      {
          value: "Malpura",
          name: "Malpura",
          state: "Rajasthan",
      },
      {
          value: "Sonamukhi",
          name: "Sonamukhi",
          state: "West Bengal",
      },
      {
          value: "Shamsabad, Agra",
          name: "Shamsabad, Agra",
          state: "Uttar Pradesh",
      },
      {
          value: "Nokha",
          name: "Nokha",
          state: "Bihar",
      },
      {
          value: "PandUrban Agglomeration",
          name: "PandUrban Agglomeration",
          state: "West Bengal",
      },
      {
          value: "Mainaguri",
          name: "Mainaguri",
          state: "West Bengal",
      },
      {
          value: "Afzalpur",
          name: "Afzalpur",
          state: "Karnataka",
      },
      {
          value: "Shirur",
          name: "Shirur",
          state: "Maharashtra",
      },
      {
          value: "Salaya",
          name: "Salaya",
          state: "Gujarat",
      },
      {
          value: "Shenkottai",
          name: "Shenkottai",
          state: "Tamil Nadu",
      },
      {
          value: "Pratapgarh",
          name: "Pratapgarh",
          state: "Tripura",
      },
      {
          value: "Vadipatti",
          name: "Vadipatti",
          state: "Tamil Nadu",
      },
      {
          value: "Nagarkurnool",
          name: "Nagarkurnool",
          state: "Telangana",
      },
      {
          value: "Savner",
          name: "Savner",
          state: "Maharashtra",
      },
      {
          value: "Sasvad",
          name: "Sasvad",
          state: "Maharashtra",
      },
      {
          value: "Rudrapur",
          name: "Rudrapur",
          state: "Uttar Pradesh",
      },
      {
          value: "Soron",
          name: "Soron",
          state: "Uttar Pradesh",
      },
      {
          value: "Sholingur",
          name: "Sholingur",
          state: "Tamil Nadu",
      },
      {
          value: "Pandharkaoda",
          name: "Pandharkaoda",
          state: "Maharashtra",
      },
      {
          value: "Perumbavoor",
          name: "Perumbavoor",
          state: "Kerala",
      },
      {
          value: "Maddur",
          name: "Maddur",
          state: "Karnataka",
      },
      {
          value: "Nadbai",
          name: "Nadbai",
          state: "Rajasthan",
      },
      {
          value: "Talode",
          name: "Talode",
          state: "Maharashtra",
      },
      {
          value: "Shrigonda",
          name: "Shrigonda",
          state: "Maharashtra",
      },
      {
          value: "Madhugiri",
          name: "Madhugiri",
          state: "Karnataka",
      },
      {
          value: "Tekkalakote",
          name: "Tekkalakote",
          state: "Karnataka",
      },
      {
          value: "Seoni-Malwa",
          name: "Seoni-Malwa",
          state: "Madhya Pradesh",
      },
      {
          value: "Shirdi",
          name: "Shirdi",
          state: "Maharashtra",
      },
      {
          value: "SUrban Agglomerationr",
          name: "SUrban Agglomerationr",
          state: "Uttar Pradesh",
      },
      {
          value: "Terdal",
          name: "Terdal",
          state: "Karnataka",
      },
      {
          value: "Raver",
          name: "Raver",
          state: "Maharashtra",
      },
      {
          value: "Tirupathur",
          name: "Tirupathur",
          state: "Tamil Nadu",
      },
      {
          value: "Taraori",
          name: "Taraori",
          state: "Haryana",
      },
      {
          value: "Mukhed",
          name: "Mukhed",
          state: "Maharashtra",
      },
      {
          value: "Manachanallur",
          name: "Manachanallur",
          state: "Tamil Nadu",
      },
      {
          value: "Rehli",
          name: "Rehli",
          state: "Madhya Pradesh",
      },
      {
          value: "Sanchore",
          name: "Sanchore",
          state: "Rajasthan",
      },
      {
          value: "Rajura",
          name: "Rajura",
          state: "Maharashtra",
      },
      {
          value: "Piro",
          name: "Piro",
          state: "Bihar",
      },
      {
          value: "Mudabidri",
          name: "Mudabidri",
          state: "Karnataka",
      },
      {
          value: "Vadgaon Kasba",
          name: "Vadgaon Kasba",
          state: "Maharashtra",
      },
      {
          value: "Nagar",
          name: "Nagar",
          state: "Rajasthan",
      },
      {
          value: "Vijapur",
          name: "Vijapur",
          state: "Gujarat",
      },
      {
          value: "Viswanatham",
          name: "Viswanatham",
          state: "Tamil Nadu",
      },
      {
          value: "Polur",
          name: "Polur",
          state: "Tamil Nadu",
      },
      {
          value: "Panagudi",
          name: "Panagudi",
          state: "Tamil Nadu",
      },
      {
          value: "Manawar",
          name: "Manawar",
          state: "Madhya Pradesh",
      },
      {
          value: "Tehri",
          name: "Tehri",
          state: "Uttarakhand",
      },
      {
          value: "Samdhan",
          name: "Samdhan",
          state: "Uttar Pradesh",
      },
      {
          value: "Pardi",
          name: "Pardi",
          state: "Gujarat",
      },
      {
          value: "Rahatgarh",
          name: "Rahatgarh",
          state: "Madhya Pradesh",
      },
      {
          value: "Panagar",
          name: "Panagar",
          state: "Madhya Pradesh",
      },
      {
          value: "Uthiramerur",
          name: "Uthiramerur",
          state: "Tamil Nadu",
      },
      {
          value: "Tirora",
          name: "Tirora",
          state: "Maharashtra",
      },
      {
          value: "Rangia",
          name: "Rangia",
          state: "Assam",
      },
      {
          value: "Sahjanwa",
          name: "Sahjanwa",
          state: "Uttar Pradesh",
      },
      {
          value: "Wara Seoni",
          name: "Wara Seoni",
          state: "Madhya Pradesh",
      },
      {
          value: "Magadi",
          name: "Magadi",
          state: "Karnataka",
      },
      {
          value: "Rajgarh (Alwar)",
          name: "Rajgarh (Alwar)",
          state: "Rajasthan",
      },
      {
          value: "Rafiganj",
          name: "Rafiganj",
          state: "Bihar",
      },
      {
          value: "Tarana",
          name: "Tarana",
          state: "Madhya Pradesh",
      },
      {
          value: "Rampur Maniharan",
          name: "Rampur Maniharan",
          state: "Uttar Pradesh",
      },
      {
          value: "Sheoganj",
          name: "Sheoganj",
          state: "Rajasthan",
      },
      {
          value: "Raikot",
          name: "Raikot",
          state: "Punjab",
      },
      {
          value: "Pauri",
          name: "Pauri",
          state: "Uttarakhand",
      },
      {
          value: "Sumerpur",
          name: "Sumerpur",
          state: "Uttar Pradesh",
      },
      {
          value: "Navalgund",
          name: "Navalgund",
          state: "Karnataka",
      },
      {
          value: "Shahganj",
          name: "Shahganj",
          state: "Uttar Pradesh",
      },
      {
          value: "Marhaura",
          name: "Marhaura",
          state: "Bihar",
      },
      {
          value: "Tulsipur",
          name: "Tulsipur",
          state: "Uttar Pradesh",
      },
      {
          value: "Sadri",
          name: "Sadri",
          state: "Rajasthan",
      },
      {
          value: "Thiruthuraipoondi",
          name: "Thiruthuraipoondi",
          state: "Tamil Nadu",
      },
      {
          value: "Shiggaon",
          name: "Shiggaon",
          state: "Karnataka",
      },
      {
          value: "Pallapatti",
          name: "Pallapatti",
          state: "Tamil Nadu",
      },
      {
          value: "Mahendragarh",
          name: "Mahendragarh",
          state: "Haryana",
      },
      {
          value: "Sausar",
          name: "Sausar",
          state: "Madhya Pradesh",
      },
      {
          value: "Ponneri",
          name: "Ponneri",
          state: "Tamil Nadu",
      },
      {
          value: "Mahad",
          name: "Mahad",
          state: "Maharashtra",
      },
      {
          value: "Lohardaga",
          name: "Lohardaga",
          state: "Jharkhand",
      },
      {
          value: "Tirwaganj",
          name: "Tirwaganj",
          state: "Uttar Pradesh",
      },
      {
          value: "Margherita",
          name: "Margherita",
          state: "Assam",
      },
      {
          value: "Sundarnagar",
          name: "Sundarnagar",
          state: "Himachal Pradesh",
      },
      {
          value: "Rajgarh",
          name: "Rajgarh",
          state: "Madhya Pradesh",
      },
      {
          value: "Mangaldoi",
          name: "Mangaldoi",
          state: "Assam",
      },
      {
          value: "Renigunta",
          name: "Renigunta",
          state: "Andhra Pradesh",
      },
      {
          value: "Longowal",
          name: "Longowal",
          state: "Punjab",
      },
      {
          value: "Ratia",
          name: "Ratia",
          state: "Haryana",
      },
      {
          value: "Lalgudi",
          name: "Lalgudi",
          state: "Tamil Nadu",
      },
      {
          value: "Shrirangapattana",
          name: "Shrirangapattana",
          state: "Karnataka",
      },
      {
          value: "Niwari",
          name: "Niwari",
          state: "Madhya Pradesh",
      },
      {
          value: "Natham",
          name: "Natham",
          state: "Tamil Nadu",
      },
      {
          value: "Unnamalaikadai",
          name: "Unnamalaikadai",
          state: "Tamil Nadu",
      },
      {
          value: "PurqUrban Agglomerationzi",
          name: "PurqUrban Agglomerationzi",
          state: "Uttar Pradesh",
      },
      {
          value: "Shamsabad, Farrukhabad",
          name: "Shamsabad, Farrukhabad",
          state: "Uttar Pradesh",
      },
      {
          value: "Mirganj",
          name: "Mirganj",
          state: "Bihar",
      },
      {
          value: "Todaraisingh",
          name: "Todaraisingh",
          state: "Rajasthan",
      },
      {
          value: "Warhapur",
          name: "Warhapur",
          state: "Uttar Pradesh",
      },
      {
          value: "Rajam",
          name: "Rajam",
          state: "Andhra Pradesh",
      },
      {
          value: "Urmar Tanda",
          name: "Urmar Tanda",
          state: "Punjab",
      },
      {
          value: "Lonar",
          name: "Lonar",
          state: "Maharashtra",
      },
      {
          value: "Powayan",
          name: "Powayan",
          state: "Uttar Pradesh",
      },
      {
          value: "P.N.Patti",
          name: "P.N.Patti",
          state: "Tamil Nadu",
      },
      {
          value: "Palampur",
          name: "Palampur",
          state: "Himachal Pradesh",
      },
      {
          value: "Srisailam Project (Right Flank Colony) Township",
          name: "Srisailam Project (Right Flank Colony) Township",
          state: "Andhra Pradesh",
      },
      {
          value: "Sindagi",
          name: "Sindagi",
          state: "Karnataka",
      },
      {
          value: "Sandi",
          name: "Sandi",
          state: "Uttar Pradesh",
      },
      {
          value: "Vaikom",
          name: "Vaikom",
          state: "Kerala",
      },
      {
          value: "Malda",
          name: "Malda",
          state: "West Bengal",
      },
      {
          value: "Tharangambadi",
          name: "Tharangambadi",
          state: "Tamil Nadu",
      },
      {
          value: "Sakaleshapura",
          name: "Sakaleshapura",
          state: "Karnataka",
      },
      {
          value: "Lalganj",
          name: "Lalganj",
          state: "Bihar",
      },
      {
          value: "Malkangiri",
          name: "Malkangiri",
          state: "Odisha",
      },
      {
          value: "Rapar",
          name: "Rapar",
          state: "Gujarat",
      },
      {
          value: "Mauganj",
          name: "Mauganj",
          state: "Madhya Pradesh",
      },
      {
          value: "Todabhim",
          name: "Todabhim",
          state: "Rajasthan",
      },
      {
          value: "Srinivaspur",
          name: "Srinivaspur",
          state: "Karnataka",
      },
      {
          value: "Murliganj",
          name: "Murliganj",
          state: "Bihar",
      },
      {
          value: "Reengus",
          name: "Reengus",
          state: "Rajasthan",
      },
      {
          value: "Sawantwadi",
          name: "Sawantwadi",
          state: "Maharashtra",
      },
      {
          value: "Tittakudi",
          name: "Tittakudi",
          state: "Tamil Nadu",
      },
      {
          value: "Lilong",
          name: "Lilong",
          state: "Manipur",
      },
      {
          value: "Rajaldesar",
          name: "Rajaldesar",
          state: "Rajasthan",
      },
      {
          value: "Pathardi",
          name: "Pathardi",
          state: "Maharashtra",
      },
      {
          value: "Achhnera",
          name: "Achhnera",
          state: "Uttar Pradesh",
      },
      {
          value: "Pacode",
          name: "Pacode",
          state: "Tamil Nadu",
      },
      {
          value: "Naraura",
          name: "Naraura",
          state: "Uttar Pradesh",
      },
      {
          value: "Nakur",
          name: "Nakur",
          state: "Uttar Pradesh",
      },
      {
          value: "Palai",
          name: "Palai",
          state: "Kerala",
      },
      {
          value: "Morinda, India",
          name: "Morinda, India",
          state: "Punjab",
      },
      {
          value: "Manasa",
          name: "Manasa",
          state: "Madhya Pradesh",
      },
      {
          value: "Nainpur",
          name: "Nainpur",
          state: "Madhya Pradesh",
      },
      {
          value: "Sahaspur",
          name: "Sahaspur",
          state: "Uttar Pradesh",
      },
      {
          value: "Pauni",
          name: "Pauni",
          state: "Maharashtra",
      },
      {
          value: "Prithvipur",
          name: "Prithvipur",
          state: "Madhya Pradesh",
      },
      {
          value: "Ramtek",
          name: "Ramtek",
          state: "Maharashtra",
      },
      {
          value: "Silapathar",
          name: "Silapathar",
          state: "Assam",
      },
      {
          value: "Songadh",
          name: "Songadh",
          state: "Gujarat",
      },
      {
          value: "Safipur",
          name: "Safipur",
          state: "Uttar Pradesh",
      },
      {
          value: "Sohagpur",
          name: "Sohagpur",
          state: "Madhya Pradesh",
      },
      {
          value: "Mul",
          name: "Mul",
          state: "Maharashtra",
      },
      {
          value: "Sadulshahar",
          name: "Sadulshahar",
          state: "Rajasthan",
      },
      {
          value: "Phillaur",
          name: "Phillaur",
          state: "Punjab",
      },
      {
          value: "Sambhar",
          name: "Sambhar",
          state: "Rajasthan",
      },
      {
          value: "Prantij",
          name: "Prantij",
          state: "Rajasthan",
      },
      {
          value: "Nagla",
          name: "Nagla",
          state: "Uttarakhand",
      },
      {
          value: "Pattran",
          name: "Pattran",
          state: "Punjab",
      },
      {
          value: "Mount Abu",
          name: "Mount Abu",
          state: "Rajasthan",
      },
      {
          value: "Reoti",
          name: "Reoti",
          state: "Uttar Pradesh",
      },
      {
          value: "Tenu dam-cum-Kathhara",
          name: "Tenu dam-cum-Kathhara",
          state: "Jharkhand",
      },
      {
          value: "Panchla",
          name: "Panchla",
          state: "West Bengal",
      },
      {
          value: "Sitarganj",
          name: "Sitarganj",
          state: "Uttarakhand",
      },
      {
          value: "Pasighat",
          name: "Pasighat",
          state: "Arunachal Pradesh",
      },
      {
          value: "Motipur",
          name: "Motipur",
          state: "Bihar",
      },
      {
          value: "O' Valley",
          name: "O' Valley",
          state: "Tamil Nadu",
      },
      {
          value: "Raghunathpur",
          name: "Raghunathpur",
          state: "West Bengal",
      },
      {
          value: "Suriyampalayam",
          name: "Suriyampalayam",
          state: "Tamil Nadu",
      },
      {
          value: "Qadian",
          name: "Qadian",
          state: "Punjab",
      },
      {
          value: "Rairangpur",
          name: "Rairangpur",
          state: "Odisha",
      },
      {
          value: "Silvassa",
          name: "Silvassa",
          state: "Dadra and Nagar Haveli",
      },
      {
          value: "Nowrozabad (Khodargama)",
          name: "Nowrozabad (Khodargama)",
          state: "Madhya Pradesh",
      },
      {
          value: "Mangrol",
          name: "Mangrol",
          state: "Rajasthan",
      },
      {
          value: "Soyagaon",
          name: "Soyagaon",
          state: "Maharashtra",
      },
      {
          value: "Sujanpur",
          name: "Sujanpur",
          state: "Punjab",
      },
      {
          value: "Manihari",
          name: "Manihari",
          state: "Bihar",
      },
      {
          value: "Sikanderpur",
          name: "Sikanderpur",
          state: "Uttar Pradesh",
      },
      {
          value: "Mangalvedhe",
          name: "Mangalvedhe",
          state: "Maharashtra",
      },
      {
          value: "Phulera",
          name: "Phulera",
          state: "Rajasthan",
      },
      {
          value: "Ron",
          name: "Ron",
          state: "Karnataka",
      },
      {
          value: "Sholavandan",
          name: "Sholavandan",
          state: "Tamil Nadu",
      },
      {
          value: "Saidpur",
          name: "Saidpur",
          state: "Uttar Pradesh",
      },
      {
          value: "Shamgarh",
          name: "Shamgarh",
          state: "Madhya Pradesh",
      },
      {
          value: "Thammampatti",
          name: "Thammampatti",
          state: "Tamil Nadu",
      },
      {
          value: "Maharajpur",
          name: "Maharajpur",
          state: "Madhya Pradesh",
      },
      {
          value: "Multai",
          name: "Multai",
          state: "Madhya Pradesh",
      },
      {
          value: "Mukerian",
          name: "Mukerian",
          state: "Punjab",
      },
      {
          value: "Sirsi",
          name: "Sirsi",
          state: "Uttar Pradesh",
      },
      {
          value: "Purwa",
          name: "Purwa",
          state: "Uttar Pradesh",
      },
      {
          value: "Sheohar",
          name: "Sheohar",
          state: "Bihar",
      },
      {
          value: "Namagiripettai",
          name: "Namagiripettai",
          state: "Tamil Nadu",
      },
      {
          value: "Parasi",
          name: "Parasi",
          state: "Uttar Pradesh",
      },
      {
          value: "Lathi",
          name: "Lathi",
          state: "Gujarat",
      },
      {
          value: "Lalganj",
          name: "Lalganj",
          state: "Uttar Pradesh",
      },
      {
          value: "Narkhed",
          name: "Narkhed",
          state: "Maharashtra",
      },
      {
          value: "Mathabhanga",
          name: "Mathabhanga",
          state: "West Bengal",
      },
      {
          value: "Shendurjana",
          name: "Shendurjana",
          state: "Maharashtra",
      },
      {
          value: "Peravurani",
          name: "Peravurani",
          state: "Tamil Nadu",
      },
      {
          value: "Mariani",
          name: "Mariani",
          state: "Assam",
      },
      {
          value: "Phulpur",
          name: "Phulpur",
          state: "Uttar Pradesh",
      },
      {
          value: "Rania",
          name: "Rania",
          state: "Haryana",
      },
      {
          value: "Pali",
          name: "Pali",
          state: "Madhya Pradesh",
      },
      {
          value: "Pachore",
          name: "Pachore",
          state: "Madhya Pradesh",
      },
      {
          value: "Parangipettai",
          name: "Parangipettai",
          state: "Tamil Nadu",
      },
      {
          value: "Pudupattinam",
          name: "Pudupattinam",
          state: "Tamil Nadu",
      },
      {
          value: "Panniyannur",
          name: "Panniyannur",
          state: "Kerala",
      },
      {
          value: "Maharajganj",
          name: "Maharajganj",
          state: "Bihar",
      },
      {
          value: "Rau",
          name: "Rau",
          state: "Madhya Pradesh",
      },
      {
          value: "Monoharpur",
          name: "Monoharpur",
          state: "West Bengal",
      },
      {
          value: "Mandawa",
          name: "Mandawa",
          state: "Rajasthan",
      },
      {
          value: "Marigaon",
          name: "Marigaon",
          state: "Assam",
      },
      {
          value: "Pallikonda",
          name: "Pallikonda",
          state: "Tamil Nadu",
      },
      {
          value: "Pindwara",
          name: "Pindwara",
          state: "Rajasthan",
      },
      {
          value: "Shishgarh",
          name: "Shishgarh",
          state: "Uttar Pradesh",
      },
      {
          value: "Patur",
          name: "Patur",
          state: "Maharashtra",
      },
      {
          value: "Mayang Imphal",
          name: "Mayang Imphal",
          state: "Manipur",
      },
      {
          value: "Mhowgaon",
          name: "Mhowgaon",
          state: "Madhya Pradesh",
      },
      {
          value: "Guruvayoor",
          name: "Guruvayoor",
          state: "Kerala",
      },
      {
          value: "Mhaswad",
          name: "Mhaswad",
          state: "Maharashtra",
      },
      {
          value: "Sahawar",
          name: "Sahawar",
          state: "Uttar Pradesh",
      },
      {
          value: "Sivagiri",
          name: "Sivagiri",
          state: "Tamil Nadu",
      },
      {
          value: "Mundargi",
          name: "Mundargi",
          state: "Karnataka",
      },
      {
          value: "Punjaipugalur",
          name: "Punjaipugalur",
          state: "Tamil Nadu",
      },
      {
          value: "Kailasahar",
          name: "Kailasahar",
          state: "Tripura",
      },
      {
          value: "Samthar",
          name: "Samthar",
          state: "Uttar Pradesh",
      },
      {
          value: "Sakti",
          name: "Sakti",
          state: "Chhattisgarh",
      },
      {
          value: "Sadalagi",
          name: "Sadalagi",
          state: "Karnataka",
      },
      {
          value: "Silao",
          name: "Silao",
          state: "Bihar",
      },
      {
          value: "Mandalgarh",
          name: "Mandalgarh",
          state: "Rajasthan",
      },
      {
          value: "Loha",
          name: "Loha",
          state: "Maharashtra",
      },
      {
          value: "Pukhrayan",
          name: "Pukhrayan",
          state: "Uttar Pradesh",
      },
      {
          value: "Padmanabhapuram",
          name: "Padmanabhapuram",
          state: "Tamil Nadu",
      },
      {
          value: "Belonia",
          name: "Belonia",
          state: "Tripura",
      },
      {
          value: "Saiha",
          name: "Saiha",
          state: "Mizoram",
      },
      {
          value: "Srirampore",
          name: "Srirampore",
          state: "West Bengal",
      },
      {
          value: "Talwara",
          name: "Talwara",
          state: "Punjab",
      },
      {
          value: "Puthuppally",
          name: "Puthuppally",
          state: "Kerala",
      },
      {
          value: "Khowai",
          name: "Khowai",
          state: "Tripura",
      },
      {
          value: "Vijaypur",
          name: "Vijaypur",
          state: "Madhya Pradesh",
      },
      {
          value: "Takhatgarh",
          name: "Takhatgarh",
          state: "Rajasthan",
      },
      {
          value: "Thirupuvanam",
          name: "Thirupuvanam",
          state: "Tamil Nadu",
      },
      {
          value: "Adra",
          name: "Adra",
          state: "West Bengal",
      },
      {
          value: "Piriyapatna",
          name: "Piriyapatna",
          state: "Karnataka",
      },
      {
          value: "Obra",
          name: "Obra",
          state: "Uttar Pradesh",
      },
      {
          value: "Adalaj",
          name: "Adalaj",
          state: "Gujarat",
      },
      {
          value: "Nandgaon",
          name: "Nandgaon",
          state: "Maharashtra",
      },
      {
          value: "Barh",
          name: "Barh",
          state: "Bihar",
      },
      {
          value: "Chhapra",
          name: "Chhapra",
          state: "Gujarat",
      },
      {
          value: "Panamattom",
          name: "Panamattom",
          state: "Kerala",
      },
      {
          value: "Niwai",
          name: "Niwai",
          state: "Uttar Pradesh",
      },
      {
          value: "Bageshwar",
          name: "Bageshwar",
          state: "Uttarakhand",
      },
      {
          value: "Tarbha",
          name: "Tarbha",
          state: "Odisha",
      },
      {
          value: "Adyar",
          name: "Adyar",
          state: "Karnataka",
      },
      {
          value: "Narsinghgarh",
          name: "Narsinghgarh",
          state: "Madhya Pradesh",
      },
      {
          value: "Warud",
          name: "Warud",
          state: "Maharashtra",
      },
      {
          value: "Asarganj",
          name: "Asarganj",
          state: "Bihar",
      },
      {
          value: "Sarsod",
          name: "Sarsod",
          state: "Haryana",
      },
      {
          value: "Gandhinagar",
          name: "Gandhinagar",
          state: "Gujarat",
      },
      {
          value:"Kullu",
          name:"Kullu",
          state:"Himachal Pradesh",
      },
      {
          value:"Manali",
          name:"Manali",
          state:"Himachal Praddesh",
      },
      {
          value:"Mirzapur",
          name:"Mirzapur",
          state:"Uttar Pradesh",
      },
      {
          value:"Kota",
          name:"Kota",
          state:"Rajasthan",
      },
      {
        value:"Dispur",
        name:"Dispur",
        state:"Assam",
      }
  ])

  const [inputState, setInputState] = useState<string>('');
  const [inputCity, setInputCity] = useState<string>('');
  const [filteredStates, setFilteredStates] = useState<OptionType[]>(stateList);
  const [filteredCity, setFilteredCity] = useState<cityType[]>(cities);
  

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
    const filteredItems = items.filter(item => {
        if (value !== 'Select State' && item.state !== state) {
            return false;
        }
        if (city !== 'Select City' && item.city !== value) {
            return false;
        }
        return true;
    });
    setFilteredItems(filteredItems);
    setCity(value)
  }

    const handleStateChange = (value: string) => {
        console.log(value);

        // Filter items based on the selected state value
        const filteredItems = items.filter(item => {
            if (value !== 'Select State' && item.state !== value) {
                return false;
            }
            if (city !== 'Select City' && item.city !== city) {
                return false;
            }
            return true;
        });

        // Update the filtered items and selected state in state
        setFilteredItems(filteredItems);
        setState(value);
        setCity('Select City'); // Reset the city selection when state changes
    }

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

  const min = 0; // Set the minimum value
  const max = 100; // Set the maximum value

  const [rangeValue, setRangeValue] = useState<number[]>([min, max]);

  const handleRangeChange = (value: string) => {
    setRange(value)
    let maxVal = value.split(' ');
    let numSelected = parseFloat(maxVal[1].replace(/,/g, ''));
    setRangeValue(() => {
      const updatedRangeValue = [0, numSelected];
      return updatedRangeValue;
    });
  };

  useEffect(() => {
    console.log(rangeValue);
  }, [rangeValue]);

  return (
    <>
        <div className='justify-center w-full d-flex '>
          <div className='lg:p-0 px-2 flex justify-center bg-[#001529] rounded min-w-80'>
            <div className='lg:flex-row d-flex flex-col justify-content-evenly align-items-center w-full h-full py-2'>

              {/* price range  */}
              {page === 'Add' &&
                <div className='filter-field text-light relative bg-[#00396e] mx-1 p-2 rounded-lg text-sm hover:bg-gray-700 hover:cursor-pointer w-36 xl:w-60' style={{minWidth: '240px'}} onClick={toggleRange}>
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
              </div>}

              {/* select state  */}
              <div className={`filter-field relative bg-[#00396e] mx-1 py-2 rounded-lg text-sm hover:bg-gray-700 hover:cursor-pointer w-60 ${page === 'Add' ? 'xl:w-60': 'xl:w-80'} `}
                    onClick={toggleState}>
                    <div className='px-2'>
                      <div className='text-yellow-500'>State</div>
                      <div className='text-white'>{state}</div>
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
                              value: option.value,
                              label: option.value,
                            };
                          })
                      }
                      dropdownRender={menu => (
                        <div>
                          <Input 
                            placeholder="State Name" 
                            onChange={(e) => {
                              setInputState(e.target.value)
                              let filtered = stateList.filter(option => option.value.toLowerCase().includes(inputState.toLowerCase()))
                                                      .map(option => ({ value: option.value, label: option.value }));
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
                <div className={`filter-field relative bg-[#00396e] mx-1 py-2 rounded-lg text-sm hover:bg-gray-700 hover:cursor-pointer ${page === 'Add' ? 'w-36 xl:w-60': 'w-60 xl:w-80'} `} onClick={toggleCity}>
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
                            filteredCity.filter(city => city.state === state).map(city => ({
                            value: city.value,
                            label: city.value
                        }))
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

              <Button className='md:p-0 py-3 filter-field bg-yellow-500 hover:bg-yellow-400 mx-1 h-full rounded-lg flex justify-center items-center font-medium
                w-32
                xl:w-36
              '>
                SEARCH
              </Button>

            </div>
          </div>
        </div >
    </ >
  );
};

export default Search;
