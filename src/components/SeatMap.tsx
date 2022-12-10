export default function SeatMap({ children }) {
    return (
        <div className="grid gap-4 grid-cols-10 grid-rows-10">
            {
                [...Array(100)].map((_, i) => {
                    return (
                        <div className="flex items-center mb-0">
                            {/* <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/> */}
                                {/* <label for="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label> */}
                                {/* <img src="https://cdn3.iconfinder.com/data/icons/movie-entertainment-flat-style/64/13_seat-movie-cinema-chair-theater-512.png" className="h-6 w-6" alt="" /> */}
                        {/* <a href="#" type="checkbox" className="bg-slate-300 rounded-lg w-10 text-center hover:bg-gray-100 ">A{i+1}</a> */}
                        <label>
                            <input className="sr-only peer" name="size" type="checkbox" value="s" />
                            <div className="w-10 h-6 rounded-full flex items-center justify-center  text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">
                                A{i}
                            </div>
                        </label>
                        </div>
                    )
                })
            }
            {/* <div className="flex items-center mb-4">
                <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label for="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">A1</label>
            </div> */}

        </div>
    )
}
