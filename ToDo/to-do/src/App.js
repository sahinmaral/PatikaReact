import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer'
import Form from './components/ToDo/Form'
import List from './components/ToDo/List'
import {useEffect, useState} from 'react'

function App() {
  
  if(!JSON.parse(localStorage.getItem('tasks')))
    localStorage.setItem('tasks','[]')
  
  const [tasks,setTasks] = useState(JSON.parse(localStorage.getItem('tasks')))

  useEffect(()=>{
    localStorage.setItem('tasks',JSON.stringify(tasks))
  },[tasks])

  return (
    <div>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <Form setTasks={setTasks} tasks={tasks}/>
        </header>
        <List tasks={tasks} setTasks={setTasks}/>
      </section>
      <Footer />
    </div>
  );
}

export default App;
