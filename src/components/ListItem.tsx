export default function ListItem({ movie, setshowtime, checkseat }) {

    return (
        <div className="flex font-sans p-5">
            <div className="flex-none w-56 relative">
                <img src={movie.movie_poster_path} alt="" className="absolute inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />
            </div>
            <form className="flex-auto p-6">
                <div className="flex flex-wrap">
                    <h1 className="flex-auto font-medium text-slate-900">
                        {movie.movie_language}
                    </h1>
                    <div className="w-full flex-none mt-2 order-1 text-3xl font-bold text-sky-900">
                        {movie.movie_title}
                    </div>
                    <div className="text-sm font-medium text-slate-400">
                        on view
                    </div>
                </div>
                <div className="flex items-baseline mt-4 mb-4 pb-2 border-b border-slate-200">
                    <div className="space-x-2 flex text-sm font-semibold">
                        <div className="relative w-full lg:max-w-sm">
                            <select onChange={setshowtime} className="hover:bg-violet-400 text-white bg-violet-600 focus:ring-2 focus:outline-none focus:ring-violet-600 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-violet-600 dark:hover:bg-violet-600 dark:focus:ring-violet-600">
                                <option className="font-semibold hidden">select show time</option>
                                {
                                    movie?.showtimes.map((showtime: any) => (
                                        <option key={showtime.id} value={Number(showtime.showtime_id)} className="font-semibold">Date: {showtime.showtime_date.toString().slice(4, 10)} Time: {showtime.showtime_time.toString().slice(16, 21)}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                </div>
                <div className="flex space-x-4 mb-5 text-sm font-medium">
                    <div className="flex-auto flex space-x-4">
                        <button onClick={checkseat} className="h-auto px-6 font-semibold rounded-full bg-violet-600 text-white" type="button" >
                            Check Seat
                        </button>
                        <button className="h-auto px-6 font-semibold rounded-full border border-slate-200 text-slate-900" type="button">
                            Intro
                        </button>
                    </div>
                    <button className="flex-none flex items-center justify-center w-12 h-9 rounded-full text-violet-600 bg-violet-50" type="button" aria-label="Like">
                        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                        </svg>
                    </button>
                </div>
                <p className="text-sm text-slate-500">
                    {movie.movie_leading}
                </p>
            </form>
        </div>
    )
}