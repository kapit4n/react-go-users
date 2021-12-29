import React from 'react';

import { FormInput } from '../form'

const CommonFields = ({register}) => {
  return (
    <>
     <FormInput>
          <label htmlFor="name">Name</label>
          <input {...register("name", {required: "Please enter role name."})}/>
        </FormInput>
        <FormInput>
          <label htmlFor="description">Description</label>
          <input {...register("description")}/>
        </FormInput>
    </>
  )
}

export default  CommonFields;