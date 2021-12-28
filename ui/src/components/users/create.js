import React from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import './create.css'

import Form, { FormInput } from '../form'

export default function Create() {
  const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });
  let navigate = useNavigate();

  const onSubmit = async data => {
    console.log(data)
    navigate("/users", { replace: true });
  };

  return (
    <div className="container">
      <h1>CREATE NEW USER</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormInput>
          <label for="firtName">First Name</label>
          <input {...register("firstName", {required: "Please enter your first name."})}/>
        </FormInput>
        <FormInput>
          <label for="lastName">Last Name</label>
          <input {...register("lastName")}/>
        </FormInput>
        <FormInput>
          <label for="email">Email</label>
          <input {...register("email", {required: "Please enter your Email."})} type="email"/>
        </FormInput>
        <FormInput>
          <label for="password">Password</label>
          <input {...register("password", {required: "Please enter your Password."})} type="password"/>
        </FormInput>
      </Form>
    </div>
  )
}