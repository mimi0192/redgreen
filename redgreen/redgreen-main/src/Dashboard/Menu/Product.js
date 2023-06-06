import { Space, Table, Button, Modal } from 'antd';
import { EditOutlined, DeleteOutlined, ExclamationCircleOutlined} from '@ant-design/icons';
import React from 'react';
const { confirm } = Modal;
const { Column, ColumnGroup } = Table;
const data = [
  {
    key: '1',
    name: 'HUAWEI MateBook D 15 - 8 GB RAM - 512 GB SSD - 15.6',
    quantity: 32,
    price: 73999,
  },
  {
    key: '2',
    name: 'Walton Walpad 10P, FHD 10.5inch IPS Display, 6GB LPDDR4 RAM',
    quantity: 42,
    price: 18850,
  },
  {
    key: '3',
    name: 'Xiaomi Smart TV 5A 43 inch Full HD Smart LED TV',
    quantity: 22,
    price: 24999,
  },
  {
    key: '4',
    name: 'Sony BRAVIA KD-43X74K 43 inch UHD Smart LED TV',
    quantity: 32,
    price: 47999,
  },
  {
    key: '5',
    name: 'Xiaomi Mi TV 4A 40 inch Full HD Smart LED TV',
    quantity: 32,
    price: 17999,
  },
];

const showConfirm = () => {
    confirm({
      title: 'Do you Want to delete these items?',
      icon: <ExclamationCircleOutlined />,
      content: 'After click on delete then your item will be delete permanently.',
      okText: 'Delete',
  
      onOk() {
        console.log('OK');
      },
  
      onCancel() {
        console.log('Cancel');
      },
    });
};

const Product = () => (
  <Table dataSource={data}>
    <Column 
      title="Image" 
      key="image"
      render={(_, record) =>(
        <Space>
            <img src="https://api.lorem.space/image/watch?w=150&h=150" width={80} height={50} alt="" />
        </Space>
      )}
      />
    <Column title="Name" dataIndex="name" key="name" />
    <Column title="Quantity" dataIndex="quantity" key="quantity" />
    <Column title="Price(BDT)" dataIndex="price" key="price" />
    <Column
      title="Action"
      key="action"
      render={(_, record) => (
        <Space size="middle">
          <Button type="primary">
            <EditOutlined />
          </Button>
          <Button type="danger" onClick={showConfirm}>
            <DeleteOutlined />
          </Button>
        </Space>
      )}
    />
  </Table>
);

export default Product;