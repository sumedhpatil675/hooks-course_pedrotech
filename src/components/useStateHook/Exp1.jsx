import React, { useState } from 'react'

export const UseState = () => {

const [count,setCount]  = useState(0)

const incr=()=>
{
  setCount(count+1)
}

  return (
    <div>
        <button onClick={incr}>Increment</button>
    </div>
  )
}
