import React, {useEffect, useState} from 'react'

export default function HookCounter() {
    const [channelName, setname] = useState("Test Channel")
    const [count, setcount] = useState("Subscriber")
    const [counter, setcounter] = useState(0)
    const [counter1, setcounter1] = useState(0)

    const stateHandler = () => {
        setname("test Change")
        setcount("44")
    }

    const Increament = () => {
        setcounter(counter + 1)
    }

    const Decreament = () => {
        setcounter1(counter1 - 1)
    }

    const Increamented = () => {
        for(let i=0; i<10; i++){
            //setcounter(counter + 1)  //this will not work
            setcounter(prevCount => prevCount + 1) //prev state managment
        }
    }

    useEffect(() => {
        console.log('Rehan')
    }, []) //specify when useeffect will run //you can pass multiple also
    //empty [] will only run on render

  return (
    <div>
        {channelName}
        {count}
        <button onClick={stateHandler}>Click</button>
        <button onClick={Increament}>Increament {counter}</button>
        <button onClick={Decreament}>Decreament {counter1}</button>
        <button onClick={Increamented}>Increamented by 10 - {counter}</button>
    </div>
  )
}
