import { type NextPage } from "next";
import React from "react";
import HomePage from "./HomePage";
import Layout from "./Layout";


const Home: NextPage = (props) => {
  return (
    <>
     <Layout/>
     <HomePage/>
    </>
  );
};

export default Home;

