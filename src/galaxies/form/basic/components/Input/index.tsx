import { Input as BaseInput } from 'antd';
import { useController } from 'react-hook-form';

function Input({ control, name }) {
  const { field } = useController({ control, name });
  return <BaseInput ref={field.ref} />;
}
export default Input;
