import axios from 'axios';
import { useState } from 'react';
import { ProductForm } from '../components/ProductForm';
import styles from '../styles/Home.module.css';

export default function Home({ products }) {

  useState({
    name: '',
    description: '',
    price: 0
  })

  return (
    <div className={styles.container}>
      <ProductForm/>

      {products.map(product =>(
        <div key={product.id}>
          <h1 >{product.name}</h1>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
      
    </div>
  )
}

export const getServerSideProps = async(context) => {
  
  const res = await axios.get('http://localhost:3000/api/products');
  

  return{
    props: {
      products: res.data,
    },
  }
}
