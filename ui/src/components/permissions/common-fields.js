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
          <label for="description">Description</label>
          <input {...register("description")}/>
        </FormInput>
    </>
  )
}

export default  CommonFields;