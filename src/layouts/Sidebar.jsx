import { FaShoppingCart } from "react-icons/fa";
import { MdHeadsetMic } from "react-icons/md";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { MdAnalytics, MdReviews, MdRestaurantMenu } from "react-icons/md";

export default function Sidebar() {

    const [active, setActive] = useState("dashboard");

    const menuClass = ({ isActive }) =>
        `flex cursor-pointer items-center rounded-xl p-4  space-x-2
        ${isActive ?
            "text-blue-500 bg-blue-200 font-extrabold" :
            "text-gray-600 hover:text-blue-500 hover:bg-blue-200 hover:font-extrabold"
        }`;

    return (
        <div id="sidebar" className="flex min-h-screen w-[360px] flex-col bg-white p-10 shadow-lg">

            {/* Logo */}
            <div id="sidebar-logo" className="flex flex-col">
                <span id="logo-title" className="font-poppins text-[48px] text-gray-900">
                    Sedap <b id="logo-dot" className="text-blue-500">.</b>
                </span>
                <span id="logo-subtitle" className="font-semibold text-gray-400">
                    Modern Admin Dashboard
                </span>
            </div>

            {/* List Menu */}
            <div id="sidebar-menu" className="mt-10">
                <ul id="menu-list" className="space-y-3">

                    {/* Dashboard */}
                    <li>
                        <NavLink
                            id="menu-1"
                            to="/"
                            className={menuClass}
                        >
                            <MdSpaceDashboard className="mr-4 text-xl" />
                            Dashboard
                        </NavLink>
                    </li>

                    {/* Orders */}
                    <li>
                        <NavLink
                            id="menu-2"
                            to="/orders"
                            onClick={() => setActive("orders")}
                            className={menuClass}
                        >
                            <span className="mr-4 text-xl"><FaShoppingCart /></span>
                            Orders List
                        </NavLink>
                    </li>

                    {/* Customers */}
                    <li>
                        <NavLink
                            id="menu-3"
                            to="/customers"
                            onClick={() => setActive("customers")}
                            className={menuClass}
                        >
                            <span className="mr-4 text-xl">
                                <MdHeadsetMic />
                            </span>
                            Customers
                        </NavLink>
                    </li>

                    {/* 🔥 TAMBAHAN ERROR MENU */}

                    <li>
                        <NavLink
                            to="/Error-400"
                            className={menuClass}
                        >
                            <MdAnalytics className="text-lg" />
                            Analytics
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/Error-401"
                            className={menuClass}
                        >
                            <MdReviews className="text-lg" />
                            Reviews
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/Error-403"
                            className={menuClass}
                        >
                            <MdRestaurantMenu className="text-lg" />
                            Foods
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Footer */}
            <div id="sidebar-footer" className="mt-auto">
                <div
                    id="footer-card"
                    className="bg-blue-500 px-4 py-2 rounded-md shadow-lg mb-10 flex items-center"
                >
                    <div id="footer-text" className="pr-3">
                        <span className="text-white text-sm leading-relaxed">
                            Please organize your menus through button below!
                        </span>

                        <div
                            id="add-menu-button"
                            className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2 w-fit"
                        >
                            <span className="text-gray-600 flex items-center">
                                Add Menus
                            </span>
                        </div>
                    </div>

                    <img
                        id="footer-avatar"
                        className="w-20 h-20 min-w-[80px] min-h-[80px] rounded-full object-cover ml-auto border-4 border-white"
                        src="/images/foto.png"
                    />
                </div>

                <span id="footer-brand" className="font-bold text-gray-400">
                    Sedap Restaurant Admin Dashboard
                </span>

                <p id="footer-copyright" className="font-light text-gray-400">
                    &copy; 2025 All Right Reserved
                </p>
            </div>
        </div>
    );
}