import React from "react";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { Alert } from "../../components/Alert";
import { FormRow } from "../../components/FormRow";
import { FormRowSelect } from "../../components/FormRowSelect";

export const AddJob = () => {
  const {
    isEditing,
    isLoading,
    showAlert,
    displayAlert,
    position,
    company,
    jobLocation,
    jobTypeOptions,
    jobType,
    statusOptions,
    status,
    handleChange,
    clearValues,
    createJob,
    editJob,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position || !jobLocation || !company) {
      displayAlert();
    }
    if (isEditing) {
      editJob();
      return;
    }
    createJob();
  };
  const handleInput = (e) => {
    const objectKey = e.target.name;
    const objectValue = e.target.value;
    handleChange({ objectKey, objectValue });
  };
  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "edit job" : "add job"} </h3>
        {showAlert && <Alert />}
        <div className="form-center">
          <FormRow
            type="text"
            name="company"
            value={company}
            onChange={handleInput}
          />
          <FormRow
            type="text"
            name="position"
            value={position}
            onChange={handleInput}
          />

          <FormRow
            type="text"
            name="jobLocation"
            labelText="Job Location"
            value={jobLocation}
            onChange={handleInput}
          />
          <FormRowSelect
            name="jobType"
            value={jobType}
            labelText="job-type"
            handleChange={handleInput}
            list={jobTypeOptions}
          />
          <FormRowSelect
            name="status"
            value={status}
            labelText="status"
            handleChange={handleInput}
            list={statusOptions}
          />

          <div className="btn-container">
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
            <button
              className="btn btn-block clear-btn"
              onClick={(e) => {
                e.preventDefault();
                clearValues();
              }}
            >
              clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
