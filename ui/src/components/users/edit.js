import React, {useEffect} from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import './create.css'

import Form, { FormInput } from '../form'
import CommonFields from './common-fields'

export default function Edit({data, onUpdate}) {
  const { register, handleSubmit, reset } = useForm({ shouldUseNativeValidation: true, defaultValues: data });
  let navigate = useNavigate();

  const onSubmit = async data => {
    await onUpdate(data)
    navigate("/users", { replace: true });
  };

  useEffect(() => {
    reset(data)
  }, [data])

  return (
    <div className="container-edit">
      <h1>EDIT USER</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <CommonFields register={register}/>
      </Form>
    </div>
  )
}