import React from 'react';
import './styles.css';

const UseReactHookForm = () => {
  return (
    <section>
      <h2>Register</h2>
      <form>
        <div>
          <input type="text" name="" />
          <label>First Name</label>
        </div>
        <div>
          <input type="text" name="" />
          <label>Last Name</label>
        </div>
        <div>
          <input type="email" name="" />
          <label>Email</label>
        </div>
        <div>
          <input type="password" name="" />
          <label>Password</label>
        </div>
        <button>Submit!</button>
      </form>
    </section>
  );
}

export default UseReactHookForm;
