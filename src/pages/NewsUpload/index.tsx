import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Upload, Button, message, Card } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const NewsUpload: React.FC = () => {
  const [fileList, setFileList] = useState<any[]>([]);
  const [uploading, setUploading] = useState(false)
  const handleUpload = () => {
    const formData = new FormData();
    fileList.forEach(file => {
      formData.append('files[]', file);
    });
    setUploading(true);
    // You can use any AJAX library you like
    fetch('https://www.mocky.io/v2/5cc8019d300000980a055e76', {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(() => {
        setFileList([]);
        message.success('upload successfully.');
      })
      .catch(() => {
        message.error('upload failed.');
      })
      .finally(() => {
        setUploading(false);
      });
  };
  const props = {
    onRemove: file => {
      setFileList(fileList => {
        const index = fileList.indexOf(file);
        const newFileList = fileList.slice();
        newFileList.splice(index, 1);
        return newFileList;
      });
    },
    beforeUpload: file => {
      setFileList(fileList => [...fileList, file]);
      return false;
    },
    fileList,
  };

  return (
    <PageContainer>
      <Card title="上传原始数据Excel数据，列数1列">
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>选择文件</Button>
        </Upload>
        <Button
          type="primary"
          onClick={handleUpload}
          disabled={fileList.length === 0}
          loading={uploading}
          style={{ marginTop: 16 }}
        >
          {uploading ? '上传中' : '开始上传原始数据'}
        </Button>
      </Card>
    </PageContainer>
  );
}


export default NewsUpload;
