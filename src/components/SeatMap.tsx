import { trpc } from '../utils/trpc';
import Paypal from './Paypal'
import { useState, useEffect } from 'react'
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { any } from 'zod';
import ListItem from './ListItem'
const queryClient = new QueryClient();

export default function SeatMap({ setseat, selectedshowtime }:any) {
    const { data: orders } = trpc.orders.showSeats.useQuery(selectedshowtime)
    const { data: seats } = trpc.seats.getAll.useQuery()
    const [soldOutSeats, setSoldOutSeats] = useState<any>([])
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
                                <li className="row row--1">
                                    <ol className="seats">
                                        {
                                            [...Array(12)].map((_, j) => {
                                                return (
                                                    <li className="seat" onChange={setseat}>
                                                        <input disabled={soldOutSeats?.includes(`${row[i]}${j + 1}`)} type="radio" className="hidden" name="radio" value={`${row[i]}${j + 1}`} id={`${row[i]}${j + 1}`} />
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
                <p className='m-4 text-blue-600'>Buy now!</p>
                <Paypal />
            </div>
        </>
    )
}
