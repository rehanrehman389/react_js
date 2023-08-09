import React, {Fragment} from 'react'

function FunctionClick() {
  function changeEvent(e){
    e.preventDefault() //block for anchor tag to route
    console.log('event')
    //we cannot use this keyword here
  }


  return (
    //if we dont want div then we can use fragment to group multiple element...just replace div with React.Fragment
    //<Fragment>
    <>
        <a href='https://web.whatsapp.com/' onClick={changeEvent}>Click me</a>
    </>
    //</Fragment>
  )
}

//rfce command shortcut

export default FunctionClick