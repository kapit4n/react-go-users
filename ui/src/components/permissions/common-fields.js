import React from 'react';

import { FormInput } from '../form'

const CommonFields = ({register}) => {
  return (
    <>
     <FormInput>
          <label for="name">Name</label>
          <input {...register("name", {required: "Please enter role name."})}/>
        </FormInput>
        <FormInput>
          <label for="model">Model</label>
          <input {...register("model")}/>
        </FormInput>
        <FormInput>
          <label for="action">Action</label>
          <input {...register("action")}/>
        </FormInput>
    </>
  )
}

export default  CommonFields;