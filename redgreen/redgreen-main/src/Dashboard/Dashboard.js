import './Dashboard.css'
import React from 'react';
import moment from 'moment';
import PieCharts from '../charts/PieCharts';
import SalesData from '../partial/SalesData';
import LineCharts from '../charts/LineCharts';
import { MoreOutlined } from '@ant-design/icons';
import ProductData from '../partial/ProductData';
import WeatherData from '../partial/WeatherData';
import { Alert, Col, Row, DatePicker,Select, Card } from 'antd';

// start ant-select
const { Option } = Select;
const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
// end ant-select

// start ant-datepicker
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
// end ant-datepicker

const onClose = (e) => {
    console.log(e, 'I was closed.');
  };

const Dashboard = () => {
    return (
        <div>
            <header>
                <h1 style={{
                    fontSize: "18px",
                    marginBottom: "10px"
                }}>Redgreen Sales</h1>
            </header>
            <div>
                <Alert
                    message="Notification"
                    description="You dont have enough stock for the next campaign."
                    type="warning"
                    closable
                    onClose={onClose}
                    showIcon
                />
            </div>
            <div style={{marginTop: "20px"}}>
                <Row gutter={[16, 16]}>
                    <Col sm={{span:24}} md={{span:24}} lg={{span:15}}>
                        <Card className='sale-card'>
                            <div className='sale-header'>
                                <div>
                                    <h1 style={{fontSize:"22px", fontWeight: "bold"}}>Total Sale</h1>
                                </div>
                                <div className='sale-header2'>
                                    <DatePicker defaultValue={moment('01/01/2015', dateFormatList[0])} format={dateFormatList} />
                                    <MoreOutlined style={{ fontSize: '22px'}} />
                                </div>
                            </div>
                            <Row style={{paddingTop: "30px"}}>
                                <Col sm={{span:24}} md={{span:24}} lg={{span:6}}>
                                    <div className='sale-list'>
                                        <div>
                                            <h4>TV</h4>
                                            <h3>600.000</h3>
                                        </div>
                                        <div>
                                            <h4>Laptop</h4>
                                            <h3>1200.000</h3>
                                        </div>
                                        <div>
                                            <h4>Other</h4>
                                            <h3>210.387</h3>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={{span:24}} md={{span:24}} lg={{span:18}}>
                                    <div>
                                        <LineCharts></LineCharts>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col sm={{span:24}} md={{span:24}} lg={{span:9}}>
                        <Card className='sale-card'>
                            <div className='chart-one'>
                                <div>
                                    <h1 style={{fontSize:"22px", fontWeight: "bold"}}>Sales Chart</h1>
                                </div>
                                <div>
                                    <MoreOutlined style={{ fontSize: '22px'}} />
                                </div>
                            </div>
                            <div className='chart-two'>
                                <div>
                                    <h4>Todays Sale</h4>
                                    <h1 style={{ fontSize: '22px'}}>156</h1>
                                </div>
                                <div>
                                    <Select
                                    defaultValue="today"
                                    style={{
                                        width: 120,
                                    }}
                                    onChange={handleChange}
                                    >
                                      <Option value="today">Today</Option>
                                      <Option value="tomorrow">Tomorrow</Option>  
                                      <Option value="previous">Previous</Option>  
                                    </Select>
                                </div>
                            </div>
                            <div>
                                <PieCharts></PieCharts>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div style={{marginTop: "20px"}}>
                <Row gutter={[16, 16]}>
                    <Col className='product-col' sm={{span:24}} md={{span:24}} lg={{span:12}}>
                        <Card className='product-card'>
                            <ProductData />
                        </Card>
                    </Col>
                    <Col className='product-col' sm={{span:24}} md={{span:24}} lg={{span:12}}>
                        <Card className='sub-sale1'>
                            <SalesData />
                        </Card>
                        <Card className='sub-sale2'>
                            <WeatherData />
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Dashboard;