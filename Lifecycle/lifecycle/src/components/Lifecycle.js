import React from 'react'
import {useState,useEffect  } from 'react'

function Lifecycle() {
    const [number, setNumber] = useState(0)
    const [name, setName] = useState('')
  
    //Hookları kullanırken bir koşul içerisinde olmamalıdır
  
    //Name içerisindeki veri değiştiğinde state efek 
    //aktif olur.
    useEffect(()=>{
      console.log("name state güncellendi")
    },[name])
  
    useEffect(()=>{
      console.log("number state güncellendi")
    },[number])
  
    //İkinci parametre , dependency array
    //Eğer bu parametre içerisinde dizi varsa,
    //bu efek eğer parametre içerisindeki listedeki
    //değerleri değişirse aktif olur.
  
    useEffect(()=>{
      console.log("component mount edildi")
    },[])
  
    return (
      <div className="App">
        <h1>{number}</h1>
        <button onClick={() => setNumber(number + 1)}>Click</button>
  
        <hr/>
  
        <h1>{name}</h1>
        <button onClick={() => setName('Şahin')}>Click</button>
      </div>
    );
}

export default Lifecycle