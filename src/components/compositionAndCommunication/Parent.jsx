import {useState} from 'react';
import Child from './Child'

const Parent = () => {
    const [message, setMessage] = useState("");

    console.log("Parent state updated!", message)

    const handleMessage = value =>{
        setMessage(value)
    }
  return (
    <>
    <Child handleMessage={handleMessage} />
    <p>{message}</p>
    </>
    
  )
}

export default Parent
