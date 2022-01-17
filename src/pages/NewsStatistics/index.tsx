import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { List, Row, Col, Card } from 'antd';

const image = require('./chart.png');
const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

const NewsStatistics: React.FC = () => {

  return (
    <PageContainer>
      <Card title="新闻一览表">
        <img src={image} style={{ width: '80%' }} />
      </Card>
      <Row gutter={16} style={{ marginTop: '16px' }}>
        <Col className="gutter-row" span={12}>
          <Card title="时政" >
            <p>习近平：不断做强做优做大我国数字经济</p>
          </Card>
        </Col>
        <Col className="gutter-row" span={12}>
          <Card title="社会">
            <List
              dataSource={data}
              renderItem={item => (
                <List.Item>
                  · {item}
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </PageContainer>
  );
}


export default NewsStatistics;
