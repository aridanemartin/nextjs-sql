import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';

export function ProductForm() {

    const router = useRouter();

    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: 0
    })
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post('/api/products', product)
        router.push('/');
        

    }

    const handleChange = ({ target: {name, value}}) => {
        setProduct({...product, [name]: value})  
    }

    return (

    <div>

    <form onSubmit={handleSubmit} >
        <label htmlFor="name">Name:</label>
        <input onChange={handleChange} type="text" name="name"/>

        <label htmlFor="price">precio:</label>
        <input onChange={handleChange} type="text" name="price"/>

        <label htmlFor="description">Description:</label>
        <textarea onChange={handleChange} name="description" id="" cols="30" rows="2"></textarea>

        <button>Save</button>
    </form>

    </div>

    )
}
