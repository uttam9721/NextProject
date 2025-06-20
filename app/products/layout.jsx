import React from 'react'
import Product from './components/Product'
const layout = ({children}) => {
  return (
    <div>
      <h1>
        This is the comman layout
      </h1>
      <Product/>

        {children}
    </div>
  )
}

export default layout
