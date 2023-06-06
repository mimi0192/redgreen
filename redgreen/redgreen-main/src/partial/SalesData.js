import moment from 'moment';
import { Link } from 'react-router-dom';
import { DatePicker, Divider } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import salePic from "../assets/images/Two Cars Collide.png"

// start ant-datepicker
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
// end ant-datepicker

const SalesData = () => {
    const [sales, setSales] = useState([]);

    useEffect(()=>{
        fetch('sale.json')
        .then(res=>res.json())
        .then(data=>setSales(data))
    },[])
    return (
        <div>
            <div 
                style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "20px",
                    justifyContent: "space-between",
                }}>
                <div>
                    <h1 
                        style={{
                            fontSize:"22px", 
                            fontWeight: "bold",
                        }}>
                            Sale
                    </h1>
                </div>
                <div>
                    <MoreOutlined style={{ fontSize: '22px'}} />
                </div>
            </div>
            <div style={{
                                display: "flex",
                                alignItems: "center",
                                marginBottom: "20px",
                                justifyContent: "space-between",
                            }}>
                                <div>
                                    <h4>Monthly Sales</h4>
                                    <h1 style={{ fontSize: '22px'}}>156</h1>
                                </div>
                                <div>
                                <DatePicker defaultValue={moment('01/01/2015', dateFormatList[0])} format={dateFormatList} />
                                </div>
            </div>
            <div>
            {
                sales.map(sale=>
                    <div>
                        <div className='product-main'>
                        <div className='product-sub'>
                            <div>
                                <div 
                                    style={{
                                        width: "65px",
                                        marginRight: "8px",
                                        padding: "8px 10px",
                                        textAlign: "center",
                                        borderRadius: "8px",
                                        border: "1px solid #d5cfcf",
                                    }}>
                                    <img src={salePic} alt="salePic.png" />
                                </div>
                            </div>
                            <div>
                                <h1>{sale.name}</h1>
                                <h5>{sale.date} - {sale.customer}</h5>
                            </div>
                        </div>
                        <div>
                            <Link style={{color: "#2D5BFF", fontWeight: "bold"}} to="http://google.com" target="_blank">Details</Link>
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

export default SalesData;