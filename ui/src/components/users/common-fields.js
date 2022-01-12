import React from 'react';

import Form, { FormInput } from '../form'

const CommonFields = ({register}) => {
  return (
    <>
     <FormInput>
          <label htmlFor="firtName">First Name</label>
          <input {...register("firstName", {required: "Please enter your first name."})}/>
        </FormInput>
        <FormInput>
          <label htmlFor="lastName">Last Name</label>
          <input {...register("lastName")}/>
        </FormInput>
        <FormInput>
          <label htmlFor="email">Email</label>
          <input {...register("email", {required: "Please enter your Email."})} type="email"/>
        </FormInput>
        <FormInput>
          <label htmlFor="password">Password</label>
          <input {...register("password")} type="password"/>
        </FormInput>
    </>
  )
}

export default  CommonFields;