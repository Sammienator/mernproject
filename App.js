
import './App.css';
import { useState useEffect } from 'react';
function App() {
  const [listOfUsers, setListOfUsers] = useState([ ]);

  useEffect(() => {

  }, [])
  return (
    <div className="App">
      <div className="usersDisplay">
        {listOfUsers.map((user) => {
          return <div>
            <h3> Name:{user.name} </h3>
            <h3> Age:{user.age} </h3>
            <h3> Username:{user.username} </h3>
            </div>
        })}

      </div>
      
    </div>
  );
}

export default App;
