import React from 'react'
import './index.css'

export const FormInput = ({ children }) => {

  return (
    <div className="input-group">
      {children}
    </div>
  )
}

const Index = ({ children, ...props }) => {
  return (
    <form className="form" {...props}>
      {children}
      <div className="actions">
        <button className="primary-button" type="submit">SAVE</button>
        <button>CANCEL</button>
      </div>
    </form>
  )
}

export default Index;