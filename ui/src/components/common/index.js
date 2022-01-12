import React from 'react'

import './index.css'

export function DetailsItem({ label, value }) {
  return (
    <div className="field-container">
      <div className="label">
        {label}:
        </div>
      <div className="value">
        {value}
      </div>
    </div>
  )
}