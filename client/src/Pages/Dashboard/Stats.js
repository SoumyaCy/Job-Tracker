import React, { useEffect } from "react";
import { StatsContainer } from "../../components/StatsContainer";
import { useAppContext } from "../../context/appContext";

export const Stats = () => {
  const { isLoading, monthlyApplications, fetchStats } = useAppContext();
  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <div>
      <StatsContainer />
    </div>
  );
};
