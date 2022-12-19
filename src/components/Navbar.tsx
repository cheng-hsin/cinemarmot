import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";
export default function Navbar() {
    return (


        <nav className="bg-[#ff193b] border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 w-auto">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a href="https://flowbite.com/" className="flex items-center">
                    <img src="https://upload.wikimedia.org/wikipedia/en/b/b6/Dramatic_Chipmunk.png" className="h-6 mr-3 sm:h-12" alt="Flowbite Logo" />
                    <span className="self-center text-xl font-extrabold whitespace-nowrap text-white">CineMarmot</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <div className="flex flex-col items-center justify-center gap-4">
                            <li className="flex flex-col items-center justify-center gap-4">
                                <a href="#" className="block py-2 pl-3 pr-4 ml-1 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white " aria-current="page">Home</a>
                            </li>
                        </div>
                        <div>
                            <AuthShowcase />
                        </div>
                    </ul>
                </div>
            </div>
        </nav>


    )
}


const AuthShowcase: React.FC = () => {
    const { data: sessionData } = useSession();

    const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
        undefined, // no input
        { enabled: sessionData?.user !== undefined },
    );

    return (
        <div className="flex flex-row items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <button
                    className="mr-1 bg-white/10  font-semibold text-black no-underline transition hover:bg-white/20"
                    onClick={sessionData ? () => signOut() : () => signIn()}
                >
                    {sessionData ? "Sign out" : "Sign in"}
                </button>
            </div>
            <div className="flex flex-col items-center justify-center">
                {sessionData?.user?.image ?
                    <img src={sessionData.user.image} className="h-6 mr-0 sm:h-12" alt="" /> : <></>}

            </div>
        </div>
    );
};