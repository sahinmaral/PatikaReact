import "./App.css";
import Header from "./components/Header";
import User from "./components/User";

const isLoggedIn = true;
const friends = [
  {
    id:1,
    name : 'Mehmet'
  },
  {
    id:2,
    name : 'Ali'
  },
  {
    id:3,
    name : 'Hasan'
  }
]

function App() {
  return (
    <div>
      <User
        name="Şahin"
        surname="Maral"
        isLoggedIn={false}
        age={22}
        friends={friends}
        address= {
          {title:"Adres1" , zipCode : 34899},
          {title: "Adres2" , zipCode : 34890}
        }
      />

      <h1>
        {isLoggedIn && <Header />}
        {!isLoggedIn && "Not logged"}
      </h1>
    </div>
  );
}

export default App;
