'use client'
import React from 'react';
import { products } from '../../data.js';


import {usePathname, useRouter} from "next/navigation";
import {useState} from 'react'


// const page = ({ params: { slug } }) => {
const page = ({ params }) => {
    const {slug} = React.use(params);
    const router = useRouter();
    const location = usePathname()

    const [counter,setCounter] = useState(0)


  const newProduct = products.filter((e) => 
    e.category.toLowerCase().includes(slug.toLowerCase())
  );
  console.log("printing the params id : ", newProduct);
 console.log(location);
  return (
  <div style={{ padding: '20px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
  <h1 style={{ color: '#333', marginBottom: '20px' }}>Welcome to {slug}</h1>

  {
    newProduct.map(item => (
      <div
        key={item.title}
        style={{
          textAlign:'center',
          justifyContent:'center',
          backgroundColor: 'black',
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '16px',
          marginBottom: '20px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          maxWidth: '400px'
        }}
      >
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li><strong>Title:</strong> {item.title}</li>
          <li><strong>Category:</strong> {item.category}</li>
          <li><strong>Price:</strong> ₹{item.price}</li>
          <li><strong>User Rating:</strong> ⭐ {item.userRating}</li>
        </ul>
      </div>
    ))
  }
  <button onClick={()=>router.push('/products')}>Back To Product</button>
</div>

  );
};

export default page;
