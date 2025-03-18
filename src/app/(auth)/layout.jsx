import React from "react";
import ParticleJS from "../../components/web-site/particleJS";
import ContextProvider from "../../context/ContextProvider";

const AuthLayout = ({ children }) => {
  return (
    <ContextProvider>
      <div className="w-screen h-screen p-5 grid items-center">
        <ParticleJS />
        {children}
      </div>
    </ContextProvider>
  );
};

export default AuthLayout;
