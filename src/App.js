import { useState } from "react";

function App() {
  const [userQuery, setUserQuery] = useState('');
  const searchQuery = () => {
    // _blank opens up the results in a new tab. Without this, it will simply 
    // replace the current page. Also, removing the q takes you to the google page.
    window.open(`https://google.com/search?q=${userQuery}`, '_blank');
  }
  const updateUserQuery = event => {
    setUserQuery(event.target.value);
  }

  const handleKeyPress = event => {
    if(event.key === 'Enter'){
      searchQuery();
    }
  }
  
  return (
    <div className="App">
      <h1>Hello Bill</h1>
      <div className="form">
        <input 
        value={userQuery} 
        onChange={updateUserQuery}
        onKeyUp={handleKeyPress}
        />
        <button onClick={searchQuery}>Search</button>
      </div>
    </div>
  );
}

export default App;
