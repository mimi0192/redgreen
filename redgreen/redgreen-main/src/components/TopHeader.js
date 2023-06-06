import React from 'react';
import logo from '../assets/images/logo.png'
import { Col, Row, Input, Badge, Avatar, Button, Modal, Space} from 'antd';
import { DownOutlined , BellFilled , ExclamationCircleOutlined, MenuUnfoldOutlined, CloseSquareOutlined } from '@ant-design/icons';


const { confirm } = Modal;
const { Search } = Input;
const onSearch = (value) => console.log(value);

const TopHeader = ({showSidebar, hideSidebar}) => {
    const showConfirm = () => {
        confirm({
          title: 'Do you Want to logout?',
          icon: <ExclamationCircleOutlined />,
          content: 'After click on logout then you lost your authentication.',
          okText: 'Logout',
      
          onOk() {
            console.log('OK');
          },
      
          onCancel() {
            console.log('Cancel');
          },
        });
      };
    return (
        <div className='topHeader'>
          <Row>
            <Col className='top-col' style={{padding: "0 30px",display: "flex", justifyContent: "space-between", alignItems: "center"}} sm={{span:24}} md={{span:24}} lg={{span:4}}>
              <div  style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <img style={{width: "50px"}} src={logo} alt="" />
                <span style={{fontSize: "24px", fontWeight: "bold"}}>RedGreen</span>
              </div>
              <div style={{display: "flex"}}>
                <Button id='toggle-btn' onClick={showSidebar}><MenuUnfoldOutlined /></Button>
                <Button id='toggle-btn' onClick={hideSidebar}><CloseSquareOutlined /></Button>
              </div>
            </Col>
            <Col sm={{span:24}} md={{span:24}} lg={{span:20}}>
              <Row 
              style={{
                paddingLeft: 35,
                paddingRight: 25,
              }}>
                <Col className='top-col2' sm={{span:24}} md={{span:16}} lg={{span:16}}>
                <Search
                  className='search-box'
                  placeholder="Search"
                  onSearch={onSearch}
                />
                </Col>
                <Col className='top-col2 right' sm={{span:24}} md={{span:8}} lg={{span:8}}>
                  <ul 
                  style={{
                    display: 'flex',
                    justifyContent: 'end',
                    alignItems: 'center',
                    listStyle: 'none',
                    marginTop: "8px",
                  }}
                  >
                    <li>
                      <Badge style={{marginRight: "20px",}} dot>
                        <BellFilled 
                          style={{
                            marginRight: "20px",
                            fontSize: 25,
                            color: "gray"
                          }}
                        />
                      </Badge>
                    </li>
                    <li>
                      <Avatar src="https://joeschmoe.io/api/v1/random" />
                    </li>
                    <li>
                    <Space wrap>
                    <Button style={{ border: "none"}} onClick={showConfirm}>
                      <span>admin</span>
                      <DownOutlined />
                    </Button>
                    </Space>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
        </Row>
        </div>
    );
};

export default TopHeader;