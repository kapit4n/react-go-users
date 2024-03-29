import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import './create.css'

import Form from '../form'
import CommonFields from './common-fields'

export default function Edit({ data, updatePermission }) {
  const { register, handleSubmit, reset } = useForm({ shouldUseNativeValidation: true, defaultValues: data });
  let navigate = useNavigate();

  const onSubmit = async data => {
    updatePermission(data)
    navigate("/permissions", { replace: true });
  };

  useEffect(() => {
    reset(data)
  }, [data])

  return (
    <div className="container">
      <h1>EDIT PERMISSION</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <CommonFields register={register} />
      </Form>
    </div>
  )
}