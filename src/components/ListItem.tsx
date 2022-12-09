export default function ListItem({ movie }) {
    return (
        <div className="flex font-sans p-5">
            <div className="flex-none w-56 relative">
                <img src={movie.movie_poster_path} alt="" className="absolute inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />
            </div>
            <form className="flex-auto p-6">
                <div className="flex flex-wrap">
                    <h1 className="flex-auto font-medium text-slate-900">
                        {movie.movie_title}
                    </h1>
                    <div className="w-full flex-none mt-2 order-1 text-3xl font-bold text-sky-900">
                        {movie.movie_title}
                    </div>
                    <div className="text-sm font-medium text-slate-400">
                    on view
                    </div>
                </div>
                <div className="flex items-baseline mt-4 mb-4 pb-2 border-b border-slate-200">
                    <div className="space-x-2 flex text-sm font-bold">
                        <label>
                            <input className="sr-only peer" name="size" type="radio" value="xs" checked />
                            <div className="w-12 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">
                                8:25
                            </div>
                        </label>
                        <label>
                            <input className="sr-only peer" name="size" type="radio" value="s" />
                            <div className="w-12 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">
                                10:20
                            </div>
                        </label>
                        <label>
                            <input className="sr-only peer" name="size" type="radio" value="m" />
                            <div className="w-12 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">
                                13:00
                            </div>
                        </label>
                        <label>
                            <input className="sr-only peer" name="size" type="radio" value="l" />
                            <div className="w-12 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">
                                16:30
                            </div>
                        </label>
                        <label>
                            <input className="sr-only peer" name="size" type="radio" value="xl" />
                            <div className="w-12 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">
                                20:10
                            </div>
                        </label>
                    </div>
                </div>
                <div className="flex space-x-4 mb-5 text-sm font-medium">
                    <div className="flex-auto flex space-x-4">
                        <button className="h-8 px-6 font-semibold rounded-full bg-violet-600 text-white" type="submit">
                            Check seat
                        </button>
                        <button className="h-8 px-6 font-semibold rounded-full border border-slate-200 text-slate-900" type="button">
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