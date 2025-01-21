import { createLazyFileRoute } from '@tanstack/react-router';
import { Button, Form, Input, Table } from 'antd';
import useStore from './store';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

function BaseList() {
  const dataSource = useStore((state) => state.data);

  return (
    <>
      <Form>
        <Form.Item label='Username'>
          <Input />
        </Form.Item>
        <Form.Item label='Password'>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type='primary'>Submit</Button>
        </Form.Item>
      </Form>
      <Table columns={columns} dataSource={dataSource} />
    </>
  );
}

export const Route = createLazyFileRoute('/base-list/')({
  component: BaseList,
});
