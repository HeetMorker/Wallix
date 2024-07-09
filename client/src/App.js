import "./App.css";
import React from 'react';
// import UserGroups from './components/UserGroups';
import UserGroup from './components/Usergroup';
function App() {

  return (
    <>
      <h1 className="text-center">WALLIX API CALLING SAMPLE</h1>
      <div className="App">
        <UserGroup/>
      </div>
    </>
  );
}

export default App;
