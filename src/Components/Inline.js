import React from 'react'

function Inline() {
    const heading = {
        color: 'red',
        fontSize: '26px'
    }
  return (
    <div>
        <h1 className='error'>Error</h1>
        <h1 style={heading}>Hello Inline CSS</h1>
    </div>
  )
}

export default Inline


//<h1 className='error'>Error</h1> //This will work in any component
//<h1 style={heading}>Hello Inline CSS</h1> //This will work in where declare