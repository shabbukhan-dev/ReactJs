import React from 'react'

const Child = ({handleMessage}) => {
  return (
    <button onClick={() => handleMessage("Send message to Parent")}>
      Click to send message and update the Parent State
    </button>
  )
}

export default Child
