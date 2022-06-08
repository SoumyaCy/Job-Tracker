import React, { useEffect } from "react";

export const Dashboard = () => {
  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const data = await fetch("/api/v1");
      const response = await data.json();
      console.log(response);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);
  return <div>Dashboard</div>;
};
