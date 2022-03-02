import axios from 'axios';
import { useState } from 'react';
import { ProductForm } from '../components/ProductForm';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home({ products }) {

  return (
    <div className={styles.container}>
      

      {products.map(product =>(
        <Link key={product.id} href={`/products/${product.id}`}>
          <a>
            <div key={product.id}>
              <h1 >{product.name}</h1>
              <p>{product.description}</p>
              <p>{product.price}</p>
            </div>
          </a>
        </Link>
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
