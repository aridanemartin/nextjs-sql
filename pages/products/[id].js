import axios from "axios";
import { Router, useRouter } from "next/router";

function ProductView({ product }) {

    const router = useRouter();

    const handleDelete = async (id) => {
        const res = await axios.delete('/api/products/' + id)
        router.push('/');

    }


    return (
    <>
        <h1>{product.name}</h1>
        <p>{product.description}</p>

        <button onClick={() => handleDelete(product.id)}>DELETE</button>
        
    </>
    

    )
}

export const getServerSideProps = async(context) => {
    
    const { data: product } = await axios.get('http://localhost:3000/api/products/' + context.query.id);
    
    return {
        props: {
            product,
        }
    }
}

export default ProductView