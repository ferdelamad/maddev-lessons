import React from 'react';
import { useForm } from "react-hook-form";
import './styles.css';

const UseReactHookForm = () => {
  // TODO: add prettier

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data, null, 2));
  };

  const {
    register,
    handleSubmit,
    errors,
    setError,
    clearErrors,
    formState: { isSubmitting }
  } = useForm();

  return (
    <section>
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input type="text" name="firstName" ref={register({ required: true })} required/>
          <label>First Name</label>
        </div>
        <div>
          <input type="text" name="lastName" ref={register({ required: true })} required/>
          <label>Last Name</label>
        </div>
        <div>
          <input type="email" name="email" ref={register({ required: true, pattern: /^\S+@\S+$/i })} required/>
          <label>Email</label>
        </div>
        <div>
          <input type="password" name="password" ref={register({ required: true, minLength: 2 })}  required/>
          <label>Password</label>
        </div>
        <button>Submit!</button>
      </form>
    </section>
  );
}

export default UseReactHookForm;
