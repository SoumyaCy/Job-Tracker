import React, { useState } from "react";
import { AreaChartComponent } from "./AreaChart";
import { BarChartComponent } from "./BarChart";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/ChartsContainer";

export const ChartsContainer = () => {
  const { monthlyApplications: chartsData } = useAppContext();
  const [barChart, setBarChart] = useState(true);

  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type="button" onClick={() => setBarChart(!barChart)}>
        {barChart ? "Area Chart" : "Bar Chart"}
      </button>
      {barChart ? (
        <BarChartComponent chartsData={chartsData} />
      ) : (
        <AreaChartComponent chartsData={chartsData} />
      )}
    </Wrapper>
  );
};
