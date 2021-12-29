import React from 'react';

import { FormInput } from '../form'

const CommonFields = ({ register }) => {
  return (
    <>
      <FormInput>
        <label htmlFor="name">Name</label>
        <input {...register("name", { required: "Please enter role name." })} />
      </FormInput>
      <FormInput>
        <label htmlFor="model">Model</label>
        <input {...register("model")} />
      </FormInput>
      <FormInput>
        <label htmlFor="action">Action</label>
        <input {...register("action")} />
      </FormInput>
    </>
  )
}

export default CommonFields;