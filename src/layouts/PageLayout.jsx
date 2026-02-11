// import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import Client from "../molecules/Client";
import Service from "../components/Service";

const ProjectLayout = () => {
  return (
    <> 
      <div className=" ">
        <Navbar />
        <Outlet />
        <Service />
        <Client />
        <Footer />
      </div>
    </>
  );
};

export default ProjectLayout;
