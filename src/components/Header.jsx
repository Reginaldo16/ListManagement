import { GraduationCap } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <div className="flex w-screen bg-gray-50 justify-between text-gray-950 py-6 border shadow-slate-900 border-x-0">
            <header className="px-4 flex justify-between items-center w-full">
                <div className="flex text-center">
                    <h1 className="block py-1 px-[.25rem] text-xl font-semibold hover:text-blue-500 hover:cursor-pointer">
                        <GraduationCap size={62} />
                    </h1>
                </div>
                <nav>
                    <ul className="flex space-x-3">
                        <NavLink
                            to={"/"}
                            className={({ isActive }) =>
                                `block py-1 px-[.25rem] ${isActive ? 'text-white bg-blue-500 rounded-md' : 'text-gray-950'}`
                            }
                        >
                            HOME
                        </NavLink>
                        <NavLink
                            to={"/student"}
                            className={({ isActive }) =>
                                `block py-1 px-[.25rem] ${isActive ? 'text-white bg-blue-500 rounded-md' : 'text-gray-950'}`
                            }
                        >
                            ESTUDANTE
                        </NavLink>
                        <NavLink
                            to={"/contact"}
                            className={({ isActive }) =>
                                `block py-1 px-[.25rem] ${isActive ? 'text-white bg-blue-500 rounded-md' : 'bg-slate-300 text-gray-950 rounded-md'}`
                            }
                        >
                            CONTACTO
                        </NavLink>
                    </ul>
                </nav>
            </header>
        </div>
    );
};
