import { IoCartOutline } from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";

const Navbar = ({ carts }) => {
    // console.log(totalCart);

    return (
        <nav className="shadow-sm">
            <div className="max-w-308 w-full mx-auto navbar py-4 font-semibold">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden text-xl mr-2"
                        >
                            <RiMenu2Fill />
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                        >
                            <li>
                                <a>Products</a>
                            </li>
                            <li>
                                <a>Features</a>
                            </li>
                            <li>
                                <a>Pricing</a>
                            </li>
                            <li>
                                <a>Testimonials</a>
                            </li>
                            <li>
                                <a>FAQ</a>
                            </li>
                        </ul>
                    </div>
                    <a className="linear-text text-3xl font-bold cursor-pointer">
                        DigiTools
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <a>Products</a>
                        </li>
                        <li>
                            <a>Features</a>
                        </li>
                        <li>
                            <a>Pricing</a>
                        </li>
                        <li>
                            <a>Testimonials</a>
                        </li>
                        <li>
                            <a>FAQ</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="text-[1.75rem] mr-2 md:mr-3  relative">
                        <IoCartOutline />

                        <p className=" absolute top-0 -right-1 bg-red-500 text-[8px] text-white rounded-full px-1">
                            {carts.length}
                        </p>
                    </div>
                    <div>
                        <button className="mr-2 md:mr-3 hidden sm:block">
                            Login
                        </button>
                    </div>
                    <button
                        className="btn linear-btn text-white font-bold rounded-full hidden sm:block
                    "
                    >
                        Get Start
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
