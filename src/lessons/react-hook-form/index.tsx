import React from 'react';
import './styles.css';

const UseReactHookForm = () => {
  return (
    <section>
      <h2>Login</h2>
      <form>
        <div>
          <input type="text" name="firstName" />
          <label>First Name</label>
        </div>
        <div>
          <input type="text" name="lastName" />
          <label>Last Name</label>
        </div>
        <div>
          <input type="email" name="email" />
          <label>Email</label>
        </div>
        <div>
          <input type="password" name="password" />
          <label>Password</label>
        </div>
        <button>Submit!</button>
      </form>
    </section>
  );
}

export default UseReactHookForm;
