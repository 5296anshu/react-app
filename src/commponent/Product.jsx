import React, { useEffect } from 'react';
import axios from 'axios'

const Product = () => {
    const [data, setData] = React.useState([])
    const productlist = async () => {
        const result = await axios.get('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products')

        setData(result.data)
    }

    useEffect(() => {
        productlist();
    }, [])
    console.log("result", data)
    return (
        <React.Fragment>
            <h1 style={{textAlign:'center'}}>All Products</h1>
            <div className='product'>
                {data && (data.data || []).map((item, i) => {
                    return (
                        <div key={i} className='product-card'>
                            <p>{i + 1}</p>
                            <h4>{item.title}</h4>
                            <div>{item.category}</div>
                            <div>{item.price}</div>
                        </div>
                    )
                })}
            </div>
        </React.Fragment>
    )
}

export default Product