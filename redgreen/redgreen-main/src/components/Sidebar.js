import { Menu } from 'antd';
import { AppstoreFilled, FlagFilled, DatabaseFilled, SettingFilled, UserOutlined, ExclamationCircleFilled } from '@ant-design/icons';
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='sideBar'>
            <Menu 
                defaultSelectedKeys={['dashboard']}
            >
                <h3 style={{margin: "15px", marginTop:"30px"}} class="menu-title">MENU</h3>
                <Menu.Item key="dashboard"> 
                    <Link to='/'>
                        <AppstoreFilled />
                        <span>Dashboard</span>
                    </Link>   
                </Menu.Item>
                <Menu.Item key="maps">
                    <Link to='/products'>
                        <FlagFilled />
                        <span>Products</span>
                    </Link> 
                </Menu.Item>
                <Menu.Item key="menu">
                    <Link to='/menu'>
                        <DatabaseFilled />
                        <span>Menu</span>
                    </Link>
                </Menu.Item>
                <h3 style={{margin: "15px", marginTop:"30px"}} class="menu-title">OTHERS</h3>
                <Menu.Item key="settings">
                    <Link to='/settings'>
                        <SettingFilled />
                        <span>Settings</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="accounts">
                    <Link to='/accounts'>
                        <UserOutlined />
                        <span>Accounts</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="helps">
                    <Link to='/helps'>
                        <ExclamationCircleFilled />
                        <span>Helps</span>
                    </Link>
                </Menu.Item>
            </Menu>
        </div>
    );
};

export default Sidebar;