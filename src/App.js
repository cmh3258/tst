import React, { useState, useEffect } from 'react';

// The requirements are:
// 1. create a form with 3 input fields, for the username, password and confirm password respectively
// 2. persist the state of the input fields entries
// 3. the password and confirm password input field should valid there entries by comparing both values
// 4. output to the user when both field match or dont match
// 5. bonus would be to style the form

function App() {

  const [username, setUsername] = useState(() => {
    const saved = localStorage.getItem("username");
    return JSON.parse(saved) || "";
  })
  const [password, setPassword] = useState(() => {
    const saved = localStorage.getItem("password");
    return JSON.parse(saved) || "";
  })
  const [confirmPassword, setConfirmPassword] = useState(() => {
    const saved = localStorage.getItem("confirmPassword");
    return JSON.parse(saved) || "";
  })

  const comparingPassword = password.length > 0 && confirmPassword.length > 0
  const match = password === confirmPassword

  const submitForm = () => {
    // basic checking of form filled out
    if(username.length > 0 && password === confirmPassword) {
      localStorage.setItem("username", JSON.stringify(username));
      localStorage.setItem("password", JSON.stringify(password));
      localStorage.setItem("confirmPassword", JSON.stringify(confirmPassword));
    }
  }

  return (
    <div className="App">
      <div style={{width: "200px", border: "1px solid black", padding: "2em", margin: "0 auto", marginTop: "10em"}}>
        <label>Username:
          <input name="username" type="string" value={username} onChange={e => setUsername(e.target.value)}/>
        </label>

        <label style={{marginTop: "1em", display:"block"}}>Password:
          <input name="password" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
        </label>

        <label style={{marginTop: "1em", display:"block"}}>Confirm Password:
          <input name="confirm-password" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
        </label>
        {comparingPassword && !match ? <div style={{color: "red"}}>{`Passwords Do Not Match`}</div> : ''}
        {comparingPassword && match ? <div style={{color: "blue"}}>{`Passwords Match`}</div> : ''}

        <button onClick={submitForm} style={{cursor:"pointer", marginTop: "1em", background: "blue", color: "white", padding: "10px 20px", border:"1px solid black"}}>Submit</button>
      </div>
    </div>
  );
}

export default App;
