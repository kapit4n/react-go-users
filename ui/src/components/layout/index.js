import React from 'react'
import Navigation from './navigation'

const Index =  ({ children }) => {
  return (
    <div>
      <Navigation />
      <main className="container">
        {children}
      </main>
    </div>
  )
}

export default Index;