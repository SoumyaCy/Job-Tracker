import React from "react";
import NotFound from '../assets/images/NotFound.svg';
import Wrapper from "../assets/wrappers/ErrorPage"
import {Link} from "react-router-dom"

export const ErrorPage = () => {
  return <Wrapper>
      <img src={NotFound} alt="page not found" className="img"/>
      <h3>Sorry,page not found</h3>
      <Link to="/" className="btn btn-hero">Back to home</Link>
  </Wrapper>;
};
