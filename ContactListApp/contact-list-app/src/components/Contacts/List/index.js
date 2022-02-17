import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

function List({ addedContacts }) {

  const [filterText,setFilterText] = useState('')

  // const filtered = addedContacts.filter((element)=>{
  //   return element.toString().toLowerCase().includes(filterText.toString().toLocaleLowerCase())
  // })

  const filtered = addedContacts.filter((element)=>{
    return Object.entries(element).some((key)=>{
      return key[1].toString().toLowerCase().includes(filterText.toLocaleLowerCase())
    })
  })

  return (
    <div>

    <input placeholder='Filter Contact' value={filterText} onInput={(event)=>setFilterText(event.target.value)}/>

      {
        filtered.map((element) => {
          return (
            <div key={uuidv4()}>
              <ul className='list'>
                <li>
                  <span>{element.fullName}</span>
                  <span>{element.phoneNumber}</span>
                </li>
              </ul>
            </div>
          )
        })
      }
    </div>
  )
}

export default List