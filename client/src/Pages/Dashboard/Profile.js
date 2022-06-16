import React, { useState } from "react";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { Alert } from "../../components/Alert";
import { FormRow } from "../../components/FormRow";

export const Profile = () => {
  const { user, displayAlert, updateUser, showAlert, isLoading } =
    useAppContext();
  const [name, setName] = useState(user?.name);
  const [lastname, setLastname] = useState(user?.lastname);
  const [email, setEmail] = useState(user?.email);
  const [location, setLocation] = useState(user?.location);

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!name || !email || !location || !lastname) {
    //   displayAlert();
    //   return;
    // }
    updateUser({ name, email, lastname, location });
  };
  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>profile</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          <FormRow
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FormRow
            type="text"
            name="lastname"
            labelText="last name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <FormRow
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormRow
            type="text"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button className="btn btn-block" type="submit" disabled={isLoading}>
            {isLoading ? "Please Wait" : "Save Changes"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
