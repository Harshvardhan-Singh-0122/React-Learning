import React from 'react'
import Card from './components/Card/Card'

const images = [
  "https://plus.unsplash.com/premium_vector-1719858610436-4d27a57a6c0a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wzfHx8ZW58MHx8fHx8",
  "https://plus.unsplash.com/premium_vector-1719858610096-bba4498e5fc1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wyfHx8ZW58MHx8fHx8",
  "https://plus.unsplash.com/premium_vector-1719858611851-9a22a608f923?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
  "https://plus.unsplash.com/premium_vector-1719858610210-ba3445e84822?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3w4fHx8ZW58MHx8fHx8" // uploaded image
];

const Cards = [
  {
    name: 'Bessie Cooper',
    role: 'Project Lead',
    Department: 'Product',
    joining: 'May 20, 2015',
    email: 'bessie.cooper@gmail.com',
    phone: '(209) 555-0100',
    status: 'Active',
    img: images[0],
  },
  {
    name: 'Jacob Jones',
    role: 'UI Designer',
    Department: 'Human Resources',
    joining: 'Aug 12, 2018',
    email: 'jacob.jones@gmail.com',
    phone: '(209) 555-0101',
    status: 'Remote',
    img: images[1],
  },
  {
    name: 'Esther Howard',
    role: 'Process Manager',
    Department: 'Engineering',
    joining: 'Jan 15, 2020',
    email: 'esther.howard@gmail.com',
    phone: '(209) 555-0102',
    status: 'Part-Time',
    img: images[2],
  },
  {
    name: 'Cameron Williamson',
    role: 'Executive',
    Department: 'Maintenance',
    joining: 'Sep 08, 2019',
    email: 'cameron.w@gmail.com',
    phone: '(209) 555-0103',
    status: 'Part-Time',
    img: images[3],
  },
  {
    name: 'Jenny Wilson',
    role: 'Frontend Developer',
    Department: 'Engineering',
    joining: 'Mar 10, 2021',
    email: 'jenny.wilson@gmail.com',
    phone: '(209) 555-0104',
    status: 'Active',
    img: images[0],
  },
  {
    name: 'Robert Fox',
    role: 'Backend Developer',
    Department: 'Technology',
    joining: 'Nov 25, 2017',
    email: 'robert.fox@gmail.com',
    phone: '(209) 555-0105',
    status: 'Remote',
    img: images[1],
  },
  {
    name: 'Wade Warren',
    role: 'QA Engineer',
    Department: 'Testing',
    joining: 'Jul 14, 2022',
    email: 'wade.warren@gmail.com',
    phone: '(209) 555-0106',
    status: 'Active',
    img: images[2],
  },
  {
    name: 'Brooklyn Simmons',
    role: 'Data Analyst',
    Department: 'Analytics',
    joining: 'Apr 18, 2020',
    email: 'brooklyn.s@gmail.com',
    phone: '(209) 555-0107',
    status: 'Part-Time',
    img: images[3],
  },
  {
    name: 'Devon Lane',
    role: 'DevOps Engineer',
    Department: 'Cloud',
    joining: 'Jun 30, 2019',
    email: 'devon.lane@gmail.com',
    phone: '(209) 555-0108',
    status: 'Remote',
    img: images[0],
  },
  {
    name: 'Savannah Nguyen',
    role: 'Product Manager',
    Department: 'Product',
    joining: 'Dec 11, 2016',
    email: 'savannah.n@gmail.com',
    phone: '(209) 555-0109',
    status: 'Active',
    img: images[1],
  },
  {
    name: 'Guy Hawkins',
    role: 'System Administrator',
    Department: 'IT Support',
    joining: 'Feb 02, 2023',
    email: 'guy.hawkins@gmail.com',
    phone: '(209) 555-0110',
    status: 'Part-Time',
    img: images[2],
  },
  {
    name: 'Kristin Watson',
    role: 'UX Researcher',
    Department: 'Design',
    joining: 'Oct 27, 2021',
    email: 'kristin.w@gmail.com',
    phone: '(209) 555-0111',
    status: 'Remote',
    img: images[3],
  },
  {
    name: 'Marvin McKinney',
    role: 'Mobile Developer',
    Department: 'Engineering',
    joining: 'May 06, 2018',
    email: 'marvin.m@gmail.com',
    phone: '(209) 555-0112',
    status: 'Active',
    img: images[0],
  },
  {
    name: 'Annette Black',
    role: 'Business Analyst',
    Department: 'Business',
    joining: 'Jan 09, 2022',
    email: 'annette.black@gmail.com',
    phone: '(209) 555-0113',
    status: 'Part-Time',
    img: images[1],
  },
  {
    name: 'Darlene Robertson',
    role: 'Content Strategist',
    Department: 'Marketing',
    joining: 'Aug 19, 2020',
    email: 'darlene.r@gmail.com',
    phone: '(209) 555-0114',
    status: 'Remote',
    img: images[2],
  },
];



const App = () =>{
  
    return (
      <div className='flex flex-wrap'>
        {
          Cards.map((ele, idx) =>{
            return <Card index={idx}  Card={ele} /> 
          })
        }
      </div>
    )
}

export default App
