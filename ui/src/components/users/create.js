import React from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CommonFields from './common-fields'

import './create.css'

import Form, { FormInput } from '../form'

export default function Create({ onCreate }) {
  const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });
  let navigate = useNavigate();

  const onSubmit = async data => {
    await onCreate(data)
    navigate("/users", { replace: true });
  };

  return (
    <div className="container-create">
      <h1>CREATE NEW USER</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <CommonFields register={register} />
      </Form>
    </div>
  )
}