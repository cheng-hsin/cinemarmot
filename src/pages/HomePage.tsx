import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import List from '../components/List'
import ListItem from '../components/ListItem'
import SeatMap from '../components/SeatMap'
import { trpc } from "../utils/trpc";
import Layout from "./Layout";
import Link from 'next/link'


const HomePage: NextPage = (props) => {
  const [selectedShowtime, setSelectedShowtime] = useState();
  const [selectedMovie, setSelectedMovie] = useState();
  const [selectedSeat, setSelectedSeat] = useState();
  

  const { data: movies } = trpc.movies.getShowTimes.useQuery()
  // console.log(typeof movies)
  console.log(movies)

  function handleShowtimeChange(e: any) {
    setSelectedShowtime(e.target.value);
    console.log(selectedShowtime)
  }

  function handleSeatChange(e: any) {
    setSelectedSeat(e.target.value);
    console.log(selectedSeat)
  }

  function checkSeat(e: any) {
    e.preventDefault();
    console.log(selectedShowtime)
  }

  return (
    <>
      <main className="flex flex-col items-center justify-center bg-white">
        <div className="py-6 md:py-12 mt-16">
          <div className="container px-4 mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-serif mb-5">You see it, you like it, you want it, you got it.</h1>
              <Link href='/MovieListPage' className="bg-indigo-600 text-white py-2 px-6 rounded-full text-xl mt-6">Get A Ticket</Link>
              <div className="mt-4 object-center">
                <img src="https://media.tenor.com/OXkz5W1XP3kAAAAC/tenor.gif" alt="mockup" className="h-auto w-96 inline rounded shadow-md" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;