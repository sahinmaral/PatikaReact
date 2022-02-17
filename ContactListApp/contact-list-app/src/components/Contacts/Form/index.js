import { useState } from 'react'

function Form({addContact,addedContacts}) {

    const [form, setForm] = useState({ fullName: '', phoneNumber: '' })

    const onChangeInput = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const onSubmit = (event) => {
        event.preventDefault()

        if(form.fullName === '' || form.phoneNumber === '') return false

        addContact([...addedContacts,form])
        console.log(form)
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <input type="text" name='fullName' placeholder='Full Name' onChange={onChangeInput} />
                </div>
                <div>
                    <input type="number" name='phoneNumber' placeholder='Phone Number' onChange={onChangeInput} />
                </div>

                <div className='btn'>
                    <button type="submit">Add Contact</button>
                </div>
            </form>
        </div>
    )
}

export default Form