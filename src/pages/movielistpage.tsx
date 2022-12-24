import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import List from '../components/List'
import ListItem from '../components/ListItem'
import SeatMap from '../components/SeatMap'
import { trpc } from "../utils/trpc";
import Layout from "./Layout";


const MovieListPage: NextPage = (props) => {
  const [selectedShowtime, setSelectedShowtime] = useState();
  

  const { data: movies } = trpc.movies.getShowTimes.useQuery()
  // console.log(typeof movies)
  console.log(movies)

  function handleShowtimeChange(e: any) {
    setSelectedShowtime(e.target.value);
    console.log(selectedShowtime)
  }



  function checkSeat(e: any) {
    e.preventDefault();
    console.log(selectedShowtime)
  }

  return (
    <>
      <Layout />
      <main className="flex min-h-screen flex-col items-center justify-center bg-white">
        <div className="container flex flex-row">
          <div className="pl-20 container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <div className="divide-y divide-slate-100">
              <List>
                {movies?.map((movie:any) => (
                  <ListItem key={movie.id} movie={movie} setshowtime={handleShowtimeChange} checkseat={checkSeat} selectedshowtime={selectedShowtime}/>
                ))}
              </List>
            </div>
          </div>
          <div className="pr-10 container flex flex-col items-center mt-8 ">
            <div className="flex flex-col items-center  sticky top-0 ">
              <AuthShowcase />
              <SeatMap selectedshowtime={selectedShowtime} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MovieListPage;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();
  return (
    <>
      <p className="text-center text-2xl text-stone-400 mt-8 mb-2">
        {sessionData ? `Hi ${sessionData.user?.name}, choose your seat!` : "Buy a ticket, go to the cinema, and enjoy the movie!"}
      </p>

    </>
  );
};