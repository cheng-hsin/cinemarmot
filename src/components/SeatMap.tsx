import { useState } from 'react'
import Paypal from './Paypal'
export default function SeatMap() {
    // const [selected, setSelected] = useState("")
    const row = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I','J']
    return (
        <>
            <div className="bg-violet-600 w-96 h-9 text-center text-white mb-4 font-bold">
                SCREEN
            </div>
            <table className="">
                <tbody>
                    {
                        row.map((_, i) => {
                            return (
                                <tr className="">
                                    <th className="">
                                        {row[i]}
                                    </th>
                                    {
                                        [...Array(10)].map((_, i) => {
                                            return (
                                                <td className="">
                                                    <label>
                                                        <input className="sr-only peer" name="seat" type="radio" value={`${row[i]}${i + 1}`} />
                                                        <div className="w-8 h-6 rounded-full flex items-center justify-center  text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">
                                                            {i + 1}
                                                        </div>
                                                    </label>
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                            )

                        })
                    }
                </tbody>
            </table>
            <div className="flex justify-center">
                <p className='m-4 text-blue-600'>Buy now!</p>
                <Paypal />
            </div>

        </>
    )
}
