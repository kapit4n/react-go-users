import React from 'react'
import Navigation from './navigation'

const Index =  ({ children }) => {
  return (
    <>
      <Navigation />
      <main>
        {children}
      </main>
    </>
  )
}

export default Index;