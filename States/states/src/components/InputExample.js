import React, { useState } from 'react'


function InputExample() {

    // const [firstName, setFirstName] = useState('')
    // const [surname, setSurname] = useState('')
    const [form, setForm] = useState({firstName:'',surname:''})

    // const onChangeInput = (event) => {
    //     switch (event.target.name) {
    //         case "firstName":
    //             setFirstName(event.target.value)
    //             break;
    //         case "surname":
    //             setSurname(event.target.value)
    //     }
    // }

    //Köşeli parantezin sebebi key olduğu içindir
    const onChangeInput = (event) => {
        setForm({...form,[event.target.name]:event.target.value})
    }

    return (
        <div>
            <p>Please enter name : </p>
            <input name="firstName" type="text" value={form.firstName}
                onChange={onChangeInput} />

            <p>Please enter surname : </p>
            <input name="surname" type="text" value={form.surname}
                onChange={onChangeInput} />

            <p>Name : {form.firstName}</p>
            <p>Surname : {form.surname}</p>
        </div>
    )
}

export default InputExample