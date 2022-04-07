import React, { useEffect, useState } from 'react'

function List({ tasks, setTasks }) {

    const [filteredTasks , setFilteredTasks] = useState({'tasks':tasks,'filter':'all'})

    const filterTasks = (event) => {
        switch (event.target.name) {
            case 'all':
                setFilteredTasks({'tasks':tasks,'filter':'all'})
                break;
            case 'active':
                setFilteredTasks({'tasks':tasks.filter((task)=>task.isDone === false),'filter':'active'})
                break;
            case 'completed':
                setFilteredTasks({'tasks':tasks.filter((task)=>task.isDone === true),'filter':'completed'})
                break;
            default:
                break;
        }
    }

    useEffect(()=>{
        setFilteredTasks({...tasks,'tasks':tasks})
    },[tasks])

    const changeTasks = () => {
        setTasks([...tasks])
    }

    const deleteTask = (task) => {
        tasks.pop(task)
        changeTasks()
    }

    const changeTaskStatus = (task) => {
        task.isDone = !task.isDone
        changeTasks()
    }

    const clearCompletedTasks = () => {
        setTasks(tasks.filter((task) => task.isDone === false))
    }

    return (
        <div>
            {/* <!-- This section should be hidden by default and shown when there are todos --> */}
            <section className="main">
                <input className="toggle-all" type="checkbox" />
                <label htmlFor="toggle-all">
                    Mark all as complete
                </label>

                <ul className="todo-list">
                    {
                        filteredTasks.tasks.map((task) => {
                            return <li key={task.id} className={task.isDone ? 'completed' : ''} onClick={() => changeTaskStatus(task)}>
                                <div className="view">
                                    <input className="toggle" type="checkbox" />
                                    <label>{task.name}</label>
                                    <button className="destroy" onClick={() => deleteTask(task)}></button>
                                </div>
                            </li>
                        })
                    }
                </ul>
            </section>

            {/* <!-- This footer should hidden by default and shown when there are todos --> */}
            <footer className="footer">

                {/* <!-- This should be `0 items left` by default --> */}
                <span className="todo-count">
                    <strong>{tasks.length} </strong>
                    items left
                </span>

                <ul className="filters">
                    <li>
                        <button 
                        className={filteredTasks.filter === 'all' ? 'selected' : ''} 
                        name='all' 
                        onClick={filterTasks}>All</button>
                    </li>
                    <li>
                        <button 
                        className={filteredTasks.filter === 'active' ? 'selected' : ''} 
                        name='active' 
                        onClick={filterTasks}>Active</button>
                    </li>
                    <li>
                        <button 
                        className={filteredTasks.filter === 'completed' ? 'selected' : ''} 
                        name='completed' 
                        onClick={filterTasks}>Completed</button>
                    </li>
                </ul>

                {/* <!-- Hidden if no completed items are left ↓ --> */}
                <button className="clear-completed" onClick={clearCompletedTasks}>
                    Clear completed
                </button>
            </footer>
        </div>
    )
}

export default List