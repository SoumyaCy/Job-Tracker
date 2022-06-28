import React from "react";
import { FormRowSelect } from "./FormRowSelect";
import { FormRow } from "./FormRow";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/SearchContainer";

export const SearchContainer = () => {
  const {
    isLoading,
    search,
    searchStatus,
    searchJobType,
    sort,
    sortOptions,
    statusOptions,
    jobTypeOptions,
    handleChange,
    clearFilters,
  } = useAppContext();
  const handleSearch = (e) => {
    if (isLoading) return;
    const objectKey = e.target.name;
    const objectValue = e.target.value;
    handleChange({ objectKey, objectValue });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoading) return;
    clearFilters();
  };
  return (
    <Wrapper>
      <form className="form">
        <h4>search form</h4>
        <div className="form-center">
          <FormRow
            type="text"
            name="search"
            value={search}
            onChange={handleSearch}
          />
          <FormRowSelect
            labelText="status"
            name="searchStatus"
            value={searchStatus}
            handleChange={handleSearch}
            list={["all", ...statusOptions]}
          />
          <FormRowSelect
            labelText="Sort by"
            name="sort"
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          />
          <FormRowSelect
            labelText="job type"
            name="searchJobType"
            value={searchJobType}
            handleChange={handleSearch}
            list={["all", ...jobTypeOptions]}
          />
          <button
            disabled={isLoading}
            className="btn btn-block btn-danger"
            onClick={handleSubmit}
          >
            Clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
