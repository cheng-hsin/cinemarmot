import { trpc } from '../utils/trpc';
import Paypal from './Paypal'
import { useState, useEffect } from 'react'
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { signIn, signOut, useSession } from "next-auth/react";
import { any } from 'zod';
import ListItem from './ListItem'
const queryClient = new QueryClient();






export default function SeatMap({ selectedshowtime }: any) {
    const { data: orders } = trpc.orders.showSeats.useQuery(selectedshowtime)
    const [soldOutSeats, setSoldOutSeats] = useState<any>([])
    const [selectedSeat, setSelectedSeat] = useState<number | undefined>();
    console.log('選擇的場次',selectedshowtime)
    function handleSeatChange(e: any) {
        setSelectedSeat(e.target.value);
        console.log(selectedSeat)
    }

    console.log(orders)
    console.log(typeof orders)

    useEffect(() => {
        const soldoutseats = orders?.map((order: any) => order.seats.seat_row + order.seats.seat_column)
        setSoldOutSeats(soldoutseats)
    }, [orders])

    const row = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    return (
        <>
            <div className="bg-violet-600 w-96 h-9 text-center text-white font-bold">
                SCREEN
            </div>
            <div className="plane">
                <ol className="cabin">
                    {
                        row.map((_, i) => {
                            return (
                                <li key={i} className="row row--1">
                                    <ol className="seats">
                                        {
                                            [...Array(12)].map((_, j) => {
                                                return (
                                                    <li key={j} className="seat" onChange={handleSeatChange}>
                                                        <input disabled={soldOutSeats?.includes(`${row[i]}${j + 1}`)} type="radio" className="hidden" name="radio" value={(i*12)+(j+1)} id={`${row[i]}${j + 1}`} />
                                                        <label htmlFor={`${row[i]}${j + 1}`}>{`${row[i]}${j + 1}`}</label>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ol>
                                </li>
                            )

                        })
                    }
                </ol>
            </div>
            <div className="flex justify-center">
                <AuthShowcase selectedShowtime={selectedshowtime} selectedSeat={selectedSeat} />
            </div>
        </>
    )
}

const AuthShowcase: React.FC<any> = ({selectedSeat, selectedShowtime}:any) => {
    const { data: sessionData } = useSession();
    const seat = String(selectedSeat)
    const showtime = String(selectedShowtime)
    const userId = sessionData?.user?.id
    console.log('selectedSeat, selectedShowtime, userId', selectedSeat, selectedShowtime, userId)

    return (
        <div className="flex flex-row items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <button
                    className="mr-1 bg-white/10  font-semibold text-black no-underline transition hover:bg-white/20"
                    onClick={sessionData ? () => signOut() : () => signIn()}
                >
                    {sessionData ? <Paypal selectedSeat={seat} selectedShowtime={showtime} userId={userId} /> : "Please sign in to buy a ticket!"}
                </button>
                <p>
                    {sessionData ? <p>Hi {seat}, {showtime}, {userId}!</p> : ""}
                </p>
            </div>
        </div>
    );
};
