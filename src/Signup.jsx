import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup">
      <h1>Signup</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" value={name} onChange={(event) => setName(event.target.value)} maxLength={20}/>
          <small>{20 - name.length} characters remaining</small>
        </div>
        <div>
          Email: <input name="email" type="email" />
        </div>
        <div>
          Password: <input name="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} maxLength={20}/>
          <small>{20 - password.length} characters remaining</small>
        </div>
        <div>
          Password confirmation: <input name="password_confirmation" type="password" value={passwordConfirmation} onChange={(event) => setPasswordConfirmation(event.target.value)} maxLength={20}/>
          <small>{20 - passwordConfirmation.length} characters remaining</small>
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}