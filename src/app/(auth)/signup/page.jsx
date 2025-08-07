'use client';


import { useForm , submitHandler } from 'react-hook-form'; 
import {yupResolver} from '@hookform/resolvers/yup'; 
import * as yup from 'yup';
import RHFTextField from '@/ui/RHFTextField';
import Button from '@/ui/Button';


const schema = yup.object({
  name: yup.string().required("نام اجباری می باشد").max(25).min(3, "نام حداق باید سه حرف باشد"),
  email: yup.string().email().required(),
  password :yup.string().required()
})

function Signup() {

const {
  register,
  handleSubmit,
  formState : {errors , isLoading}
} = useForm({
  resolver : yupResolver(schema),
mode: 'onTouched'
})


  return (
    <div className='bg-white'>
      <h1>ثبت نام در وب سایت</h1>
      <form action="" onSubmit={handleSubmit(onsubmit)} className="space-y-10">


       <RHFTextField
       label="نام و نام خانوادگی"
       name="name"
       register={register}
       isRequired
      errors={errors}
       />
             
      <RHFTextField
       label="ایمیل"
       name="email"
       register={register}
       isRequired
       errors={errors}
       dir='ltr'
       />
            
      <RHFTextField
       label="رمز عبور"
       name="password"
       register={register}
       isRequired
       errors={errors}
       
       />
      <button type='submit'>submit</button>
      </form>
    </div>
  );
}

export default Signup;
