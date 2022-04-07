import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';

const initialTask = { 'isDone': false, 'name': '' }

function Form({ setTasks, tasks }) {

    const notify = (message) => toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const onSubmit = (event) => {
        event.preventDefault()

        //Eger eklenmisse de false dondur ve bunun hatasini yolla(toastr ile)
        if (task.name === '') {
            notify('Task cannot be empty')
            return false
        }

        else if (tasks.some((currentTask) => currentTask.name === task.name) === true) {
            notify('You have already added same task')
            return false
        }
        else {
            setTasks([...tasks, task])
            setTask(initialTask)
        }




    }

    const onChangeTask = (event) => {
        setTask({ ...task, 'name': event.target.value, 'id': uuidv4() })
    }

    const [task, setTask] = useState(initialTask)

    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <form onSubmit={onSubmit}>
                <input
                    className="new-todo"
                    value={task.name}
                    onChange={onChangeTask}
                    placeholder="What needs to be done?"
                    autoFocus />
            </form>
        </div>
    )
}

export default Form;