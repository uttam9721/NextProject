import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <div>
      <h1>This is products route</h1>
      <h2>We offer following products</h2>
      <ul>
        <li><Link href={'/products/phones'}>Phones</Link></li>
        <li><Link href={'/products/laptops'}>Laptops</Link></li>
        <li><Link href={'/products/cameras'}>Cameras</Link></li>
      </ul>
    </div>
  )
}

export default page
