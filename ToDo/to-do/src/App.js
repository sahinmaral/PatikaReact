import './App.css';
import InfoFooter from './components/InfoFooter';
import TaskForm from './components/TaskForm';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <TaskForm />
        </header>
        {/* <!-- This section should be hidden by default and shown when there are todos --> */}
      

        {/* <!-- This footer should hidden by default and shown when there are todos --> */}
        <Footer />
      </section>

      <InfoFooter />
    </div>
  );
}

export default App;
