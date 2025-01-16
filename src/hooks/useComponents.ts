import React from "react";
import useData from "./useData";

const useComponents = <T>(endpoint: string, resBody: string) => {
  const response = useData(endpoint);
  return resBody in response.data
    ? { ...response, data: response.data.resBody as T[] }
    : { ...response, data: [] };
};

export default useComponents;
