import React, { useEffect } from "react";
import { StatsContainer } from "../../components/StatsContainer";
import { ChartsContainer } from "../../components/ChartsContainer";
import { useAppContext } from "../../context/appContext";
import { Loading } from "../../components/Loading";
export const Stats = () => {
  const { isLoading, monthlyApplications, fetchStats } = useAppContext();
  useEffect(() => {
    fetchStats();
  }, []);
  if (isLoading) {
    return <Loading center />;
  }
  return (
    <div>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </div>
  );
};
