import { createLazyFileRoute } from '@tanstack/react-router';
import { Form, Input } from 'antd';
const useForm = Form.useForm;
const FormItem = Form.Item;

export const Route = createLazyFileRoute('/form/antd/')({
  component: RouteComponent,
});

function RouteComponent() {
  const [form] = useForm();
  return (
    <div>
      Hello "/form/antd/"!
      <Form form={form}>
        <FormItem label='Basic' name='basic'>
          <Input />
        </FormItem>
      </Form>
    </div>
  );
}
