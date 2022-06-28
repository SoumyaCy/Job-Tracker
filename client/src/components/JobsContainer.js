import React from "react";
import { useAppContext } from "../context/appContext";
import { useEffect } from "react";
import { Job } from "./Job";
import { Loading } from "./Loading";
import { PageBtnContainer } from "./PageBtnContainer";
import Wrapper from "../assets/wrappers/JobsContainer";

export const JobsContainer = () => {
  const {
    getJobs,
    jobs,
    isLoading,
    page,
    totalJobs,
    search,
    searchStatus,
    searchJobType,
    sort,
    noOfPages,
  } = useAppContext();
  useEffect(() => {
    getJobs(); // eslint-disable-next-line
  }, [search, searchStatus, searchJobType, sort, page]);
  if (isLoading) {
    return <Loading center />;
  }
  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h1>No Jobs to display...</h1>;
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 && "s"}found
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {noOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};
