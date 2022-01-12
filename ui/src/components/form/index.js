import React, { useState } from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom';
export const FormInput = ({ children }) => {

  return (
    <div className="input-group">
      {children}
    </div>
  )
}

const Index = ({ children, ...props }) => {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)

  const goToPreviousPath = () => {
    navigate.goBack()
    setLoading(true)
  }

  return (
    <form className="form" {...props}>
      {children}
      <div className="actions">
        <button className="primary-button" type="submit" disabled={loading}>SAVE</button>
        <button onClick={goToPreviousPath} disabled={loading}>CANCEL</button>
      </div>
    </form>
  )
}

export default Index;