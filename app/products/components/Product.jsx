import React from 'react'
import Link from 'next/link';
const product = () => {
     const products = [
    { id: 1, title: 'phones' },
    { id: 2, title: 'laptops' },
    { id: 3, title: 'cameras' },
    { id: 4, title: 'carbuds' },
    { id: 5, title: 'tvs' },
    { id: 6, title: 't-shirt' },
  ];
  return (
     <div>
      <h1>This is products route</h1>
      <h2>We offer following products</h2>
      <h1>We are making dynamic routes</h1>
      {
        products.map((item) => (
          <ul key={item.title}>
            <li style={{ color: 'white' }}>
              <Link href={`/products/${item.title}`}>{item.title}</Link>
            </li>
          </ul>
        ))
      }
    </div>
  )
}

export default product
