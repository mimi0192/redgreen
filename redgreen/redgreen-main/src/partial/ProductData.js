import { Divider } from 'antd';
import { Link } from 'react-router-dom';
import { MoreOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';

const ProductData = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('product.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    return (
        <div>
            <div 
                style={{
                    display: "flex",
                    marginBottom: "20px",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}>
                <div>
                    <h1 
                        style={{
                            fontSize:"22px", 
                            fontWeight: "bold",
                        }}>
                            Most Popular Product
                    </h1>
                </div>
                <div>
                    <MoreOutlined style={{ fontSize: '22px'}} />
                </div>
            </div>
            <div>
            {
                products.map(product=>
                    <div>
                        <div className='product-main'>
                        <div className='product-sub'>
                            <div>
                                <div 
                                    style={{
                                        width: "45px",
                                        marginRight: "8px",
                                        padding: "8px 10px",
                                        textAlign: "center",
                                        borderRadius: "8px",
                                        border: "1px solid #d5cfcf",
                                    }}>
                                    <h1>{product.name}</h1>
                                </div>
                            </div>
                            <div>
                                <h1>{product.title}</h1>
                                {
                                    product.profit < 0
                                    ?
                                    <h5 style={{color: "red"}}>{product.profit}% Increase</h5>
                                    :
                                    <h5>{product.profit}% Increase</h5>
                                }
                            </div>
                        </div>
                        <div>
                            <span
                                style={{
                                    color: "red"
                                }}
                            >
                                {product.sales}
                            </span>
                        </div>
                        </div>
                        <Divider />
                    </div>
                )
            }
            <Link style={{color: "#2D5BFF", fontWeight: "bold"}} to="http://google.com" target="_blank">Show more</Link>
            </div>
        </div>
    );
};

export default ProductData;