import { trpc } from '../utils/trpc';
import Paypal from './Paypal'
import { useState } from 'react'
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { any } from 'zod';
import ListItem from './ListItem'
const queryClient = new QueryClient();

export default function SeatMap({ setseat, selectedshowtime }) {
    const [selected, setSelected] = useState("")
    const { data: orders } = trpc.orders.showSeats.useQuery(selectedshowtime)
    console.log(orders)
    console.log(typeof orders)

    const row = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    return (
        <>
            <div className="bg-violet-600 w-96 h-9 text-center text-white font-bold">
                SCREEN
            </div>
            <div>
                {
                    orders?.map((order:any) => (
                        <p key={order.seat_id}  className="font-semibold">{order.seats.seat_row}{order.seats.seat_column} is sold out</p>
                    ))
                }
            </div>
            <div className="plane">
                <ol className="cabin">
                    {
                        row.map((_, i) => {
                            return (
                                <li className="row row--1">
                                    <ol className="seats" type={row[i]}>
                                        {
                                            [...Array(12)].map((_, j) => {
                                                return (
                                                    <li className="seat" onChange={setseat}>
                                                        <input type="radio" className="hidden" name="radio" value={`${row[i]}${j + 1}`} id={`${row[i]}${j + 1}`} />
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
