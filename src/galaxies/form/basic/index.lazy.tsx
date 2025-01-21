import { createLazyFileRoute } from '@tanstack/react-router';
import { type SubmitHandler, useForm } from 'react-hook-form';
import Input from './components/Input';

export const Route = createLazyFileRoute('/form/basic/')({
  component: RouteComponent,
});

type Inputs = {
  firstName: string;
  example: string;
  exampleRequired: string;
};

function RouteComponent() {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  // console.log(watch('example')); // watch input value by passing the name of it
  console.log(789);
  return (
    <div>
      Hello "/form/basic/"!
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input name='firstName' control={control} />
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue='test' {...register('example')} />

        {/* include validation with required or other standard HTML validation rules */}
        <input {...register('exampleRequired', { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type='submit' />
      </form>
    </div>
  );
}
