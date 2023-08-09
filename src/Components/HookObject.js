import React, { useState } from 'react'

function HookObject() {
    const [name, setname] = useState({
        firstName: '',
        lastName: ''
    })
  return (
    <div>
        <form>
            <input type="text" value={name.firstName} onChange={ e => setname({...name, firstName: e.target.value})}></input>
            <input type="text" value={name.lastName} onChange={ e => setname({...name, lastName: e.target.value})}></input>
        </form>

        {name.firstName}
        {name.lastName}
        {JSON.stringify(name)}
    </div>
  )
}

export default HookObject