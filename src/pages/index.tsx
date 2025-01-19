import { Form } from 'antd';

export default function Homepage() {
  const [form] = Form.useForm();
  console.log('form', form);

  return <div>123</div>;
}
