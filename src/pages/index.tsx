import { type NextPage } from "next";
import Head from "next/head";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import Navbar from '../components/Navbar'
import { trpc } from "../utils/trpc";
import MovieListPage from "./MovieListPage";
import HomePage from "./HomePage";
import Layout from "./Layout";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'


const Home: NextPage = (props) => {
  return (
    <>
     <Layout/>
     <HomePage/>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined },
  );

  return (
    <>
      <p className="text-center text-2xl text-stone-400 mt-8 mb-2">
        {sessionData ? `Hi ${sessionData.user?.name}, choose your seat!` : "Buy a ticket, go to the cinema, and enjoy the movie!"}
      </p>
    </>
  );
};