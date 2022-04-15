import React, { useState , useId} from 'react'

const defaultItems = [
    { name: 'Item A' },
    { name: 'Item B' },
    { name: 'Item C' },
]

function ToDo() {

    const [text, setText] = useState('');
    const [items, setItems] = useState(defaultItems);
    return (
        <div>
            <input type="text"
                value={text}
                placeholder='Enter text'
                onChange={(event) => setText(event.target.value)} />

            <button onClick={() => setItems([...items, {name:text}])}>Add</button>

            <br />

            {
                items.map((item,index) => {
                    return <div key={index}>{item.name}</div>
                })
            }
        </div>
    )
}

export default ToDo