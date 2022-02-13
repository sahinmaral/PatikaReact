import { useState, useEffect } from 'react'

function ComponentUnmount() {
  const [number, setNumber] = useState(0)

  useEffect(() => {
    console.log("number state güncellendi")
  }, [number])

  useEffect(() => {
    
    const interval = setInterval(() => { setNumber((number)=>number+1) }, 1000)

    return () => clearInterval(interval)
  }, [])


  

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>
    </div>
  )


}

export default ComponentUnmount