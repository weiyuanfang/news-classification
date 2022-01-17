import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Input, Card, Result } from 'antd';

const InputForecast: React.FC = () => {

  return (
    <PageContainer>
      <Card>
        <Input placeholder='请输入新闻标题，预测结果' />
        <div style={{ marginTop: 32 }}>预测内容：马龙许昕“花式对打”再现魔力转圈圈</div>
        <Button
          type="primary"
          style={{ marginTop: 32 }}
        >
          点击预测
        </Button>
        <Result
          title="预测标签：体育"
          icon={<></>}
        />
      </Card>
    </PageContainer>
  );
}


export default InputForecast;
