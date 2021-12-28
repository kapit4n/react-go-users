import React from 'react';

import Form, { FormInput } from '../form'

const CommonFields = ({register}) => {
  return (
    <>
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
    </>
  )
}

export default  CommonFields;