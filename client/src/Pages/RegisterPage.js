import React, { useState } from "react";
import { Logo } from "../components/Logo";
import Wrapper from "../assets/wrappers/RegisterPage";
import { FormRow } from "../components/FormRow";
import { Alert } from "../components/Alert.js";
import { useAppContext } from "../context/appContext";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

export const RegisterPage = () => {
  const [values, setValues] = useState(initialState);

  const { showAlert, displayAlert } = useAppContext();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(e.target);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!password || !email || (!isMember && !name)) {
      displayAlert();

      return;
    }
    console.log(values);
  };
  const handleToggle = (e) => {
    setValues({ ...values, isMember: !values.isMember });
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={handleSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert />}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            onChange={handleChange}
            labelText="name"
            value={values.name}
          />
        )}
        <FormRow
          type="email"
          name="email"
          onChange={handleChange}
          labelText="email"
          value={values.email}
        />
        <FormRow
          type="password"
          name="password"
          onChange={handleChange}
          labelText="password"
          value={values.password}
        />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          {!values.isMember ? "Already have an account?" : "Not a member?"}
          {values.isMember ? (
            <button onClick={handleToggle} type="button" className="member-btn">
              Register
            </button>
          ) : (
            <button
              onClick={handleToggle}
              type="button"
              className=" member-btn"
            >
              Login
            </button>
          )}
        </p>
      </form>
      ;
    </Wrapper>
  );
};
