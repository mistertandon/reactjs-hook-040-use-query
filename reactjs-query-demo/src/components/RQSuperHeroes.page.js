import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

const fetchRQSuperHeroes = () => {
  return axios("http://localhost:4000/superheroes");
};

const RQSuperHeroesPage = () => {
  const {
    isLoading: isRQHeroesDataLoading,
    isFetching: isRQHeroesDataFetching,
    data: rqHeroesData,
    isError: rqHeroesErrorStatus,
    error: rqHeroesError,
  } = useQuery("get-rq-super-heroes", fetchRQSuperHeroes, {
    cacheTime: 300000,
    staleTime: 30000,
    refetchOnMount: "always",
    refetchOnWindowFocus: "always",
    refetchInterval: 5000,
    refetchIntervalInBackground: true,
  });

  console.log({
    isRQHeroesDataLoading,
    isRQHeroesDataFetching,
  });

  if (isRQHeroesDataLoading) {
    return <>Loading...</>;
  }

  if (rqHeroesErrorStatus) {
    return <>{rqHeroesError.message}</>;
  }

  return (
    <>
      <h2>RQ Super Heroes </h2>
      {rqHeroesData?.data.map((hero) => (
        <div key={hero.name}>
          <h3>{hero.name}</h3>
        </div>
      ))}
    </>
  );
};

export default RQSuperHeroesPage;
