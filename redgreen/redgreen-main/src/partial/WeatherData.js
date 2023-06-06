import './Partial.css';
import moment from 'moment';
import { Col, Row } from 'antd';
import React, { useEffect, useState, } from 'react';
import { MoreOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';

const WeatherData = () => {
    const [weathers, setWeathers] = useState(null);
    let URI = "http://localhost:5000/weatherdata";
    URI = "https://api.weatherapi.com/v1/current.json?key=3bcf74a6f79c4d00ae185227221509&q=Dhaka&aqi=no"
    useEffect(()=>{
        fetch(URI)
        .then(res=>res.json())
        .then(data=>setWeathers(data.current))
    },[URI])
    if(weathers){
        return (
            <div>
               <div className='weather-header'>
                    <div>
                        <h1 
                            style={{
                                fontSize:"22px", 
                                fontWeight: "bold",
                            }}>
                                Weather
                        </h1>
                    </div>
                    <div>
                        <MoreOutlined style={{ fontSize: '22px'}} />
                    </div>
               </div>
               <div>
                  <Row>
                    <Col className='col' sm={{span:24}} md={{span:24}} lg={{span:12}}>
                        <div className='weather-left'>
                            <h2>{moment().format('LT')}</h2>
                            <img src={weathers.condition.icon} alt="" />
                            <h3 style={{marginTop: "5px"}}>{weathers.condition.text}, {weathers.temp_c}°C</h3>
                        </div>
                    </Col>
                    <Col className='col' sm={{span:24}} md={{span:24}} lg={{span:12}}>
                        <div>
                            <div className='weather-cl'>
                                <h1>{moment().format("ddd, Do MMMM YYYY")}</h1>
                                <div style={{
                                    marginLeft: "5px",
                                }}>
                                    <LeftOutlined style={{cursor: "pointer", color: "gray"}} />
                                    <RightOutlined style={{cursor: "pointer"}} />
                                </div>
                            </div>
                            <div>
                                <div className='weather-list'>
                                    <div>10:00 AM</div>
                                    <div>Light Rain, 27°C</div>
                                </div>
                                <div className='weather-list'>
                                    <div>01:00 PM</div>
                                    <div>Light Rain, 28°C</div>
                                </div>
                                <div className='weather-list'>
                                    <div>04:00 PM</div>
                                    <div>Cloudy, 27°C</div>
                                </div>
                                <div className='weather-list'>
                                    <div>07:00 PM</div>
                                    <div>Light Rain, 27°C</div>
                                </div>
                                <div className='weather-list'>
                                    <div>10:00 PM</div>
                                    <div>Light Rain, 27°C</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                  </Row>
               </div>
            </div>
        );
    }
};

export default WeatherData;