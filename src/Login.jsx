import { useState } from "react";
import css from "./App.module.css";

export function LoginForm() {
  const [values, setValues] = useState({
    login: "",
    password: "",
  });

  const handleChange = (evt) => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSumit = (evt) => {
    evt.preventDefault();
    console.log(values);
    setValues({
      login: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSumit} className={css.loginForm}>
      <h2>Login Form</h2>
      <div>
        <label>
          Login:
          <input
            type="text"
            name="login"
            value={values.login}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
