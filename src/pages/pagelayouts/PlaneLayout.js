import React from 'react'

function PlaneLayout({children}) {
  return (
    <div style={{width:"100%", maxwidth: "500px", margin: "auto"}}>
        {children}
    </div>
  )
}

export default PlaneLayout;