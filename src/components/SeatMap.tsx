import { trpc } from '../utils/trpc';
import Paypal from './Paypal'
import { useState } from 'react'
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
const queryClient = new QueryClient();

export default function SeatMap() {
    const [selected, setSelected] = useState("")
    const orders = trpc.orders.getAll.useQuery()
    console.log(orders.data)

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
                                    <ol className="seats" type={row[i]}>
                                        {
                                            [...Array(12)].map((_, j) => {
                                                return (
                                                    <li className="seat">
                                                        <input type="checkbox" id={`${row[i]}${j + 1}`} />
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
            {
                orders.data?.map((order) => {
                    return (
                        <div className="flex justify-center">
                            <p className='m-4 text-blue-600'>Buy now!</p>
                            <Paypal />
                        </div>
                    )
                })
            }
        </>
    )
}
