import React from "react";
import Wrapper from "../assets/wrappers/StatItem";

export const StatsItem = ({ title, icon, count, bgc, color }) => {
  return (
    <Wrapper color={color} bgc={bgc}>
      <header>
        <span className="count">{count}</span>
        <div className="icon">{icon}</div>
      </header>
      <h5 className="title">{title}</h5>
    </Wrapper>
  );
};
