import { Button, Table, Form, Select, Card } from 'antd';
import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';

const { Option } = Select;
const data = [{
  number: 'aaa',
  website: 'bbb',
  title: 'ccc',
  content: 'ddd',
  publish_time: 1111
}]
const columns = [
  {
    title: '编号',
    dataIndex: 'number',
  },
  {
    title: '网址',
    dataIndex: 'website',
  },
  {
    title: '标题',
    dataIndex: 'title',
  },
  {
    title: '内容',
    dataIndex: 'content',
  },
  {
    title: '发布时间',
    dataIndex: 'publish_time',
  }
];

const TableList: React.FC = () => {



  return (
    <PageContainer>
      <Card>
        <Form layout="vertical" >
          <Form.Item name="gender" rules={[{ required: true }]}>
            <Select
              placeholder="请选择要爬取的新闻网站"
              allowClear
            >
              <Option value="male">人民网</Option>
              <Option value="female">中国新闻网</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              开始爬取
            </Button>
            <Button htmlType="button" style={{ marginLeft: '20px' }} >
              停止爬取
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <Card>
        <Table columns={columns} dataSource={data} size="middle" />
      </Card>
    </PageContainer>
  );
};

export default TableList;
