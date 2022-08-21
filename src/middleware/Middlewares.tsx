import React, { FC, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

const Middlewares: FC<Props> = ({ children }) => {
  const [needLoginPage, setNeedLoginPage] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("authToken")) {
      setNeedLoginPage(true);
    } else {
      setNeedLoginPage(false);
    }
  }, []);

  return (
    <>
      {needLoginPage && <Navigate to="/" />}
      {!needLoginPage && <>{children}</>}
    </>
  );
};

export default Middlewares;
